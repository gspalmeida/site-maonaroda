<?php
/**
 * Classe para controlar as informações necessárias para o uso da plataforma Iugu
 * User: newton
 * Date: 30/01/2019
 * Time: 09:23
 */

//require_once ($_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php');
require_once ('/home/newton/git/sites/site-maonaroda/vendor/autoload.php') ;

Use Monolog\Logger;
Use Monolog\Handler\StreamHandler;
use SaintSystems\OData\ODataClient;

class PloomesConfig
{
  /* Informações do cliente - MÃO NA RODA */
  const DEBUG = false;
  const API_KEY  = "FDC3FC4168DE2E3E9E2BC97CDB2613E2BDF123F6146EFD2E37E060F199BBF080D7C042C7DE6CBE86D84DB941EDEC48227C0A4705A8E462475141CDA92C34BA3E"; //Ambiente de Teste..
  const ROOT_API = 'https://api2.ploomes.com';

  private $apiKey;
  public  $ODataObject;
  private $logPath;
  private $headers;
  public  $log;

  public function __construct()
  {
    $this->apiKey = self::API_KEY;

    if (self::DEBUG)
      $this->logPath = '/home/newton/git/sites/site-maonaroda';
    else
      $this->logPath = $_SERVER['DOCUMENT_ROOT'];

    $this->ODataObject = new ODataClient(self::ROOT_API,function ($request){
      $request->headers['User-Key'] = $this->apiKey;
    });

    $this->log = new Logger('ploomesApi');
    $this->log->pushHandler(new StreamHandler( $this->logPath . '/log/ploomes-api.log',Logger::WARNING));
  }


  public function getAPIKey()
  {
    return $this->apiKey;
  }

  public static function getRootApi()
  {
    return self::ROOT_API;
  }

  public static function isDateBetweenDates(DateTime $date, DateTime $startDate, DateTime $endDate) {
    return $date >= $startDate && $date <= $endDate;
  }

  public static function appendZeros($valor, $tipo)
  {
    if ($tipo === 'CNPJ')
      $valorLocal = str_pad($valor, 14, '0', STR_PAD_LEFT);
    elseif ($tipo === 'CNPJ-DIG')
      $valorLocal = str_pad($valor, 12, '0', STR_PAD_LEFT);
    elseif ($tipo === 'CPF')
      $valorLocal = str_pad($valor, 11, '0', STR_PAD_LEFT);
    elseif ($tipo === 'CPF-DIG')
      $valorLocal = str_pad($valor, 9, '0', STR_PAD_LEFT);
    elseif ($tipo === 'CEP')
      $valorLocal = str_pad($valor, 8, '0', STR_PAD_LEFT);
    elseif ($tipo === 'FONE')
      $valorLocal = str_pad($valor, 9, '0', STR_PAD_LEFT);
    elseif ($tipo === 'DIG-CPF' || $tipo === 'DIG-CNPJ')
      $valorLocal = str_pad($valor, 2, '0', STR_PAD_LEFT);
    return $valorLocal;
  }

  public static function removeFormat($text)
  {
    return preg_replace( "/[^0-9]/", "", $text);
  }

  public static function formatPhoneNumber($nrTelefone)
  {
    $nrTelefoneLocal = self::appendZeros($nrTelefone, 'FONE');
    // Se o FONE está vazio, não retornamos formatação...
    if ($nrTelefoneLocal === '000000000')
      return '';
    // Formata o FONE ##.###-###
    $nrTelefoneFormatado = substr($nrTelefoneLocal, 0, 1) . ' ';
    $nrTelefoneFormatado .= substr($nrTelefoneLocal, 1, 4) . '-';
    $nrTelefoneFormatado .= substr($nrTelefoneLocal, 5, 8) . '';
    if (substr($nrTelefoneFormatado, 0,2) === '0 ')
      $nrTelefoneFormatado = substr($nrTelefoneFormatado, 2);

    return $nrTelefoneFormatado;
  }

  /**
   * Procedimento para formatação de textos com o uso de double curly braces {{ ... }}.
   * Este recebe um conjunto de parâmetros no formato de array que serão utilizados para substituir
   * os valores cercados por {{variável}}
   *
   * @param string $textoOriginal Texto contendo a parte fixa e conteúdo para substituição. Exemplo: "Hello, {{nomeUsuario}}!"
   * @param array $parametros Array que contém os textos para substituição de variáveis. Cada índice do array
   * corresponde a uma variável a ser substituída.
   * @return string texto com a substituição realizada
   */
  public static function parseText($originalText, array $params)
  {
    $answer = preg_replace_callback('/{{(.+?)}}/ix',function($match)use($params){
      return !empty($params[$match[1]]) ? $params[$match[1]] : $match[0];
    },$originalText);

    return $answer;
  }

  /**
   * Formata a mensagem de erro, caso a resposta seja desta natureza.
   *
   * @param array $response Resposta fornecida pelo tratamento em IuguConfig da solicitação de API
   * @return array Resposta tratada para ser apresentada ao usuário
   */
  public function setErrorResponse(array $response): array
  {
    if ($response['type'] === 'error') {
      if (is_numeric($response['error']['title'])) {
        $responseData = json_decode($response['data'], true);
        if ($response['error']['title'] == 400) {
          $response['error']['title'] = 'Erro de Bad Request';
          $response['error']['message'] .= implode(' | ', $responseData['errors']);
        } elseif ($response['error']['title'] == 422) {
          $response['error']['title'] = 'Erro de Invalid Record';
          $strErrors = '';
          foreach ($responseData['errors'] as $key => $error) {
            $strErrors .= "[$key] ";
            $strErrors .= implode(' | ', $error);
            $strErrors .= ' ';
          }
          $response['error']['message'] .= $strErrors;
        }
      }
    }
    return $response;
  }
}
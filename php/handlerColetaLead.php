<?php
// Função para validar contra mail injection
function IsInjected($str)
{
  $injections = array('(\n+)',
    '(\r+)',
    '(\t+)',
    '(%0A+)',
    '(%0D+)',
    '(%08+)',
    '(%09+)'
  );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
  {
    return true;
  }
  else
  {
    return false;
  }
}
//Função para construir a tabela dos comodos
function build_table($array){
  $html = '<table style="border-collapse: collapse;width: 100%;">';
  $html .= '<tr>';
  foreach($array[0] as $key=>$value){
    $html .=
      '<th style="border: 1px solid #dddddd;text-align: left;padding: 8px;">' .
          trataCamposTabela(htmlspecialchars($key)) .
      '</th>';
  }
  $html .= '</tr>';
  foreach( $array as $key=>$value){
    $html .= '<tr>';
    foreach($value as $key2=>$value2){
      $html .=
        '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">' .
            trataCamposTabela(htmlspecialchars($value2)) .
        '</td>';
    }
    $html .= '</tr>';
  }
  $html .= '</table>';
  return $html;
}
//Validações dos dados de entrada
if(!isset($_POST['submit']))
{
  echo "<p>Erro de permissão, essa página não pode ser acessada diretamente.</p>";
  exit;
}

//Recebe os dados do POST
$name = $_POST['nome'];
$visitor_email = $_POST['email'];
$phone = $_POST['telefone'];
$tipoLead = $_POST['tipoLead'];
$msgRetorno = [];

//Valida os campos obrigatórios do formulário
if(empty($name)||empty($visitor_email)||empty($phone))
{
  $msgRetorno = [
    'titulo'=>"Campos obrigatórios não foram preenchidos",
    'mensagem'=>"Confira se digitou seu Nome, Email, Telefone e CEP",
    'tipo'=>"erro"
  ];
  echo json_encode($msgRetorno);
  exit;
}


require_once ($_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php') ;
//require_once ('/var/www/html/demonstracao.galileosoft.com.br/vendor/autoload.php') ;
//require_once ('/var/www/html/galileosoft.com.br/site-maonaroda/vendor/autoload.php') ;
//require_once ('/var/www/html/site-maonaroda/vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;


$mailer = new PHPMailer();
//Login no servidor SMTP
$mailer->IsSMTP();
$mailer->Host       = "smtp.galileosoft.com.br";
$mailer->SMTPAuth   = true;
$mailer->Port = 587;
$mailer->SMTPSecure = false;
$mailer->SMTPAutoTLS = false;
$mailer->Username   = 'site@maonaroda.com';
$mailer->Password   = 'SMTP!01';
//Pessoa que ENVIA o email
$mailer->Sender = "site@maonaroda.com"; //Email que envia
$mailer->From = "site@maonaroda.com"; //Email que aparece pra quem recebe
$mailer->FromName = "Site - Mão na Roda"; //Nome que aparece pra quem recebe
//Pessoa que RECEBE o email
$mailer->addAddress('comercial@maonaroda.com');
//Escreve o Email
$mailer->CharSet = 'UTF-8';
$mailer->isHTML(true);
$mailer->Subject = "Novo Contato Site - Mão na Roda";
$mailer->Body = "<p style='text-align: center;font-size: 12px;text-transform: uppercase;'><strong>Novo Lead Coletado no Site</strong></p>
                    <hr>
                    <p style='text-align: center'><strong>Dados Pessoais</strong></p>
                    <p><strong>Tipo do Lead: </strong>".$tipoLead."</p>
                    <p><strong>Nome: </strong>".$name."</p>
                    <p><strong>Telefone: </strong>".$phone."</p>
                    <p><strong>Email: </strong>".$visitor_email."</p>";

$enviado = $mailer->send();
$mailer->ClearAllRecipients();


if (!$enviado){
  $msgRetorno = ['titulo'=>"Pedimos desculpa, mas correu um erro durante o envio do seu orçamento, por favor tente novamente!",
                 'mensagem'=>"Caso o problema persista, entre em contato via WhatsApp ou Ligação e estaremos de prontidão para lhe ajudar",
                 'tipo'=>"erro"];
  echo json_encode($msgRetorno);
  exit;
}else{
  $msgRetorno = ['titulo'=>"Orçamento Solicitado com Sucesso!",
                 'mensagem'=>"O Mão na Roda agradece pelo seu contato, entraremos em contato em breve.",
                 'tipo'=>"sucesso"];
  echo json_encode($msgRetorno);
  exit;
}

//Debug
//$mailer->SMTPDebug = 4;
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
//$mailer->Sender = "gustavo@galileosoft.com.br"; //Email que envia
//$mailer->From = "gustavo@galileosoft.com.br"; //Email que aparece pra quem recebe
//$mailer->addAddress('contato@galileosoft.com.br');
//$mailer->Username   = 'gustavo@galileosoft.com.br';
//$mailer->Password   = '';


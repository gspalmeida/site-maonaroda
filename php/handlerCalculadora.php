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
//Função para Tratar o Tamanho do Imóvel
function trataTamanhoImovel($tamanhoImovel){
  $stringTamanhoImovel = '';
  if($tamanhoImovel==0){
    $stringTamanhoImovel = 'Até 50 M²';
  }
  else if ($tamanhoImovel==1){
    $stringTamanhoImovel = "Até 75 M²";
  }
  else if ($tamanhoImovel==2){
    $stringTamanhoImovel = "Até 100 M²";
  }
  else if ($tamanhoImovel==3){
    $stringTamanhoImovel = "Até 150 M²";
  }
  else if ($tamanhoImovel==4){
    $stringTamanhoImovel = "Maior que 150 M²";
  }
  return $stringTamanhoImovel;
}
function trataParceiros($parceiro){
  if ($parceiro!=''){
    $stringParceiro = $parceiro;
  }
  else{
    $stringParceiro = "Sem Indicação";
  }
  return $stringParceiro;
}
function trataAlturaPeDireito($alturaPeDireito){
  $stringAlturaPeDireito = '';
  if($alturaPeDireito==0){
    $stringAlturaPeDireito = 'COMUM - Até 2,7 M';
  }
  else if ($alturaPeDireito==1){
    $stringAlturaPeDireito = 'DUPLO - Até 4,5 M';
  }
  else if ($alturaPeDireito==2){
    $stringAlturaPeDireito = 'TRIPLO - Mais de 4,5 M';
  }
  return $stringAlturaPeDireito;
}
function trataTipoMaterial($tipoMaterial){
  $stringTipoMaterial = '';
  if($tipoMaterial==0){
    $stringTipoMaterial = 'Sem Material Incluso';
  }
  else if ($tipoMaterial==1){
    $stringTipoMaterial = 'Tinta Tipo 1';
  }
  else if ($tipoMaterial==2){
    $stringTipoMaterial = 'Tinta Tipo 2';
  }
  else if ($tipoMaterial==3){
    $stringTipoMaterial = 'Tinta Tipo 3';
  }
  return $stringTipoMaterial;
}
function trataCamposTabela($campoAtual){
  if ($campoAtual==='dormitorio'){
    $campoTratado = 'Dormitório';
  }
  else if ($campoAtual==='banheiro'){
    $campoTratado = 'Banheiro';
  }
  else if ($campoAtual==='cozinha'){
    $campoTratado = 'Cozinha';
  }
  else if ($campoAtual==='halldeentrada'){
    $campoTratado = 'Hall De Entrada';
  }
  else if ($campoAtual==='corredor'){
    $campoTratado = 'Corredor';
  }
  else if ($campoAtual==='sacada'){
    $campoTratado = 'Sacada';
  }
  else if ($campoAtual==='sala'){
    $campoTratado = 'Sala';
  }
  else if ($campoAtual==='lavanderia'){
    $campoTratado = 'Lavanderia';
  }
  else if ($campoAtual==='id'){
    $campoTratado = 'ID';
  }
  else if ($campoAtual==='tipo'){
    $campoTratado = 'Tipo';
  }
  else if ($campoAtual==='parede'){
    $campoTratado = 'Parede';
  }
  else if ($campoAtual==='teto'){
    $campoTratado = 'Teto';
  }
  else if ($campoAtual==='moldura'){
    $campoTratado = 'Moldura';
  }
  else if ($campoAtual==='rodape'){
    $campoTratado = 'Rodapé';
  }
  else if ($campoAtual==='qtdPortas'){
    $campoTratado = 'Quantidade de Portas';
  }
  else if ($campoAtual==='observacoes'){
    $campoTratado = 'Observações';
  }
  else if ($campoAtual===''){
    $campoTratado = 'Não Informado';
  }
  else if ($campoAtual==='true'){
    $campoTratado = 'Sim';
  }
  else if ($campoAtual==='false'){
    $campoTratado = 'Não';
  }
  else{
    $campoTratado = $campoAtual;
  }
  return $campoTratado;
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
$message = $_POST['mensagem'];
$cep = $_POST['CEP'];
$alturaParede = $_POST['alturaParede'];
$comodos = $_POST['comodos'];
$tamanhoImovel = $_POST['tamanhoImovel'];
$tipoMaterial = $_POST['tipoMaterial'];
$parceiro = $_POST['parceiro'];
$msgRetorno = [];

//Valida os campos obrigatórios do formulário
if(empty($name)||empty($visitor_email)||empty($phone)||empty($cep))
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
$mailer->Username   = 'gustavo@galileosoft.com.br';
$mailer->Password   = '123321ikariam';
//Pessoa que ENVIA o email
$mailer->Sender = "gustavo@galileosoft.com.br"; //Email que envia
$mailer->From = "gustavo@galileosoft.com.br"; //Email que aparece pra quem recebe
$mailer->FromName = "Site - Mão na Roda"; //Nome que aparece pra quem recebe
//Pessoa que RECEBE o email
$mailer->addAddress('gustavo@galileosoft.com.br');
//Escreve o Email
$mailer->CharSet = 'UTF-8';
$mailer->isHTML(true);
$mailer->Subject = "Novo Contato Site - Mão na Roda";
$mailer->Body = "<p style='text-align: center;font-size: 12px;text-transform: uppercase;'><strong>Novo Orçamento Solicitado no Site</strong></p>
                    <hr>
                    <p style='text-align: center'><strong>Dados Pessoais</strong></p>
                    <p><strong>Nome: </strong>".$name."</p>
                    <p><strong>Telefone: </strong>".$phone."</p>
                    <p><strong>Email: </strong>".$visitor_email."</p>
                    <p><strong>CEP: </strong>".$cep."</p>
                    <p><strong>Comentários Adicionais: </strong>".$message."</p>
                    <p><strong>Indicação: </strong>".trataParceiros($parceiro)."</p>
                    <hr>
                    <p style='text-align: center'><strong>Dados do Imóvel</strong></p>
                    <p><strong>Tamanho do Imóvel: </strong>".trataTamanhoImovel($tamanhoImovel)."</p>
                    <p><strong>Altura do Pé Direito: </strong>".trataAlturaPeDireito($alturaParede)."</p>
                    <p><strong>Tipo do Material Escolhido:</strong>".trataTipoMaterial($tipoMaterial)."</p>
                    <p><strong>Cômodos:</strong><br/>".build_table($comodos)."</p>";

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



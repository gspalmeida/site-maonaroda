<?php
// Handler para a criação de cliente na plataforma Iugu e em seguida a geração do seu pagamento...
require_once(__DIR__ . "/classes/PloomesConfig.php");
require_once(__DIR__ . "/classes/PloomesContacts.php");
require_once(__DIR__ . "/classes/PloomesDeals.php");
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
    $stringTamanhoImovel = 'Até 50m²';
  }
  else if ($tamanhoImovel==1){
    $stringTamanhoImovel = "Até 75m²";
  }
  else if ($tamanhoImovel==2){
    $stringTamanhoImovel = "Até 100m²";
  }
  else if ($tamanhoImovel==3){
    $stringTamanhoImovel = "Até 150m²";
  }
  else if ($tamanhoImovel==4){
    $stringTamanhoImovel = "Maior que 150m²";
  }
  return $stringTamanhoImovel;
}
function trataOrigens($origem){
  if ($origem!=''){
    $stringOrigem = $origem;
  }
  else{
    $stringOrigem = "Orgânico";
  }
  return $stringOrigem;
}
function trataAlturaPeDireito($alturaPeDireito){
  $stringAlturaPeDireito = '';
  if($alturaPeDireito==0){
    $stringAlturaPeDireito = 'Até 2,70m';
  }
  else if ($alturaPeDireito==1){
    $stringAlturaPeDireito = 'Até 4,5m';
  }
  else if ($alturaPeDireito==2){
    $stringAlturaPeDireito = 'Acima de 4,50m';
  }
  return $stringAlturaPeDireito;
}
function trataTipoMaterial($tipoMaterial){
  $stringTipoMaterial = '';
  if($tipoMaterial==0){
    $stringTipoMaterial = 'Não desejo  material';
  }
  else if ($tipoMaterial==1){
    $stringTipoMaterial = 'Tinta 1 - Clássica';
  }
  else if ($tipoMaterial==2){
    $stringTipoMaterial = 'Tinta 2 - Fosco Completo';
  }
  else if ($tipoMaterial==3){
    $stringTipoMaterial = 'Tinta 3 - Toque de Seda';
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
$dadosContato = [
  'name'     => (isset($_POST['nome'])) ? $_POST['nome'] : null,
  'email'    => (isset($_POST['email'])) ? $_POST['email'] : null  ,
  'phone'    => (isset($_POST['telefone'])) ? $_POST['telefone'] : null,
  'zipcode'  => (isset($_POST['CEP'])) ? $_POST['CEP'] : null,
  'origin'   => (isset($_POST['origem'])) ? $_POST['origem'] : null,
  ];

$dadosOtherProperties = [
  'alturaParede'    => (isset($_POST['alturaParede'])) ? trataAlturaPeDireito($_POST['alturaParede']) : null,
  'comodos'         => (isset($_POST['comodos'])) ? build_table($_POST['comodos']) : null,
  'tamanhoImovel'   => (isset($_POST['tamanhoImovel'])) ? trataTamanhoImovel($_POST['tamanhoImovel']) : null,
  'tipoMaterial'    => (isset($_POST['tipoMaterial'])) ? trataTipoMaterial($_POST['tipoMaterial']) : null,
  'tipoImovel'     => (isset($_POST['tipoImovel'])) ? $_POST['tipoImovel'] : null,
  'valorOrcado'     => (isset($_POST['valorSemDesconto'])) ? $_POST['valorSemDesconto'] : null,
  'valorDesconto'   => (isset($_POST['valorComDesconto'])) ? $_POST['valorComDesconto'] : null,
  'observacoes'     => (isset($_POST['mensagem'])) ? $_POST['mensagem'] : null,
  'cupomDesconto'   => (isset($_POST['cupomDesconto'])) ? $_POST['cupomDesconto'] : null,
  'coefDesconto'    => (isset($_POST['coefDesconto'])) ? 100 - ($_POST['coefDesconto']*100) : null,
  'dataInicio'      => (isset($_POST['dataInicio'])) ? $_POST['dataInicio'] : null,
  'tipoPintura'     => (isset($_POST['tipoPintura'])) ? $_POST['tipoPintura'] : null,
  'meioContato'     => (isset($_POST['meioContato'])) ? $_POST['meioContato'] : null,
  'canal'           => 'Site',
  'origin'          => (isset($_POST['origem'])) ? $_POST['origem'] : null,
  'nomeDaPagina'    => (isset($_POST['nomeDaPagina'])) ? $_POST['nomeDaPagina'] : null,
];


/*$dadosContato = [
  'name'    => ('Nome de Teste') ? 'Nome de Teste' : null,
  'email'   => ('email@email.com') ? 'email@email.com' : null  ,
  'phone'   => ('44999990000') ? '44 99999-0000' : null,
  'zipcode' => ('87100000') ? '87100-000' : null,
];

$comodos = json_decode('{"id":0,"tipo":"dormitorio","parede":true,"teto":true,"moldura":true,"rodape":true,"qtdPortas":"1","observacoes":"observação"}');
$dadosOtherProperties = [
  'alturaParede'    => ('X') ? trataAlturaPeDireito(1) : null,
  'comodos'         => ('x') ? build_table([$comodos]) : null,
  'tamanhoImovel'   => ('X') ? trataTamanhoImovel(2) : null,
  'tipoMaterial'    => ('X') ? trataTipoMaterial(2) : null,
  'origem'        => ('X') ? null : null,
  'valorOrcado'     => ('x') ? 1234.54 : null,
  'valorDesconto'   => ('x') ? 1200.00 : null,
  'observacoes'     => ('x') ? 'Teste de observações' : null,
  'cupomDesconto'   => ('x') ? 'cupom10' : null,
  'coefDesconto'    => ('X') ? 100 - (.80 * 100) : null,
  'dataInicio'      => ('X') ? 'Dentro dos próximos 30 dias' : null,
  'tipoImovel'      => ('X') ? 'Comercial' : null,
  'meioContato'     => ('X') ? 'Telefone' : null,
  'tipoPintura'     => ('X') ? 'Interna' : null,
];*/

$msgRetorno = [];

//Valida os campos obrigatórios do formulário
if(empty($dadosContato['name'])||empty($dadosContato['email'])||empty($dadosContato['phone'])||empty($dadosContato['zipcode']))
{
  $msgRetorno = [
    'titulo'=>"Campos obrigatórios não foram preenchidos",
    'mensagem'=>"Confira se digitou seu Nome, Email, Telefone e CEP",
    'tipo'=>"erro"
  ];
  echo json_encode($msgRetorno);
  exit;
}

// Criação dos objetos necessários para a execução dos procedimentos necessários para a
// manipulação de clientes e faturas...

$contact = new PloomesContacts();

$contactData = [];

$contato = $contact->searchContacts('Name',$dadosContato['name']);

if (!$contato)
  $respContato = $contact->insertContact($dadosContato);
else
  $respContato = $contact->updateContact($contato->Id,$dadosContato);

$respContato = $respContato->first();

// Criar o negócio...
$deal = new PloomesDeals();

$dealData = [
  'title' => 'Cotação via site: '.$dadosContato['name'],
  'contactId' => $respContato->Id,
  'otherProperties' => $deal->createOtherProperties($dadosOtherProperties)
];

$respNegocio = $deal->insertDeal($dealData);

if (!$respNegocio->first())
  $msgRetorno = ['titulo'=>"Pedimos desculpa, mas correu um erro durante o envio do seu orçamento, por favor tente novamente!",
                 'mensagem'=>"Caso o problema persista, entre em contato via WhatsApp ou Ligação e estaremos de prontidão para lhe ajudar",
                 'tipo'=>"erro"];
else
  $msgRetorno = ['titulo'=>"Orçamento Solicitado com Sucesso!",
                 'mensagem'=>"O Mão na Roda agradece pelo seu contato, entraremos em contato em breve.",
                 'tipo'=>"sucesso"];

echo json_encode($msgRetorno);
exit;

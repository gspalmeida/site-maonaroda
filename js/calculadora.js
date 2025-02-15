//Sempre que fizer alterações nesses arquivos da calculadora, lembrar que elas tem que ser replicadas em todas as páginas de parceiross

//Input customizado "- e +"
function changeValue(click,type) {
    var input = click.parentNode.querySelector('input[type=number]');
    if(type ==='minus'){
        click.parentNode.querySelector('input[type=number]').stepDown();
    }
    if(type ==='plus'){
        click.parentNode.querySelector('input[type=number]').stepUp();
    }
    var inputSelector = '#'+input.id+':visible';
    var inputVisibleValue = $(inputSelector).val();
    $(input).attr('value',inputVisibleValue);
}
function setValue(input) {
    $(input).on('focusout',function () {
        var inputSelector = '#'+input.id+':visible';
        var inputVisibleValue = $(inputSelector).val();
        $(input).attr('value',inputVisibleValue);
    })
}
// Logica Visual Calculadora
$(function setaValoresIniciais() {
  sessionStorage.clear();
  $('.btn-tipo-imovel:first-child').addClass('active');
  $('.btn-tipo-pintura:first-child').addClass('active');
  $('.btn-tamanho-imovel:first-child').addClass('active');
  armazenaDados('tipoImovel','Casa');
  armazenaDados('tipoPintura','Interna');
  armazenaDados('tamanhoImovel','0');
  armazenaDados('tipoMaterial','0');
  armazenaDados('coefDesconto','1');
  armazenaDados('valorOrcado','0');
  armazenaDados('cupomDesconto','');
});
function progressBarAnimate(width) {
    document.getElementById("progressBar-mobile").style.width = width;
    document.getElementById("progressBar-pc").style.width = width;
    $('#progressBar-mobile').html(width);
    $('#progressBar-pc').html(width);
    if (width==='0%'){
        document.getElementById("progressBar-mobile").style.color = '#000';
        document.getElementById("progressBar-pc").style.color = '#000';
        document.getElementById("progressBar-mobile").style.paddingLeft = "10px";
        document.getElementById("progressBar-pc").style.paddingLeft = "10px";
        document.getElementById("progressBar-mobile").style.backgroundColor = "#eee";
        document.getElementById("progressBar-pc").style.backgroundColor = "#eee";
    }else{
        document.getElementById("progressBar-mobile").style.color = '#fff';
        document.getElementById("progressBar-pc").style.color = '#fff';
        document.getElementById("progressBar-mobile").style.paddingLeft = "0px";
        document.getElementById("progressBar-pc").style.paddingLeft = "0px";
        document.getElementById("progressBar-mobile").style.backgroundColor = "#0d47a1";
        document.getElementById("progressBar-pc").style.backgroundColor = "#0d47a1";
    }
    if (width==='100%'){
        document.getElementById("progressBar-mobile").style.color = '#fff';
        document.getElementById("progressBar-pc").style.color = '#fff';
        document.getElementById("progressBar-mobile").style.fontSize = '16px';
        document.getElementById("progressBar-pc").style.fontSize = '16px';
        document.getElementById("progressBar-mobile").style.fontWeight = '500';
        document.getElementById("progressBar-pc").style.fontWeight = '500';
        document.getElementById("progressBar-mobile").style.paddingLeft = "0px";
        document.getElementById("progressBar-pc").style.paddingLeft = "0px";
        document.getElementById("progressBar-mobile").style.backgroundColor = "#00c851";
        document.getElementById("progressBar-pc").style.backgroundColor = "#00c851";
    }
}
function trocaSlideCupons() {
  var elementoQueSai ='.inserirCupom';
  var elementoQueEntra ='.cupomInserido';
  $(elementoQueSai).addClass('zoomOut animated');
  $(elementoQueSai).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('#cardWrapper-pc').hide();
    $('#iconCalculadora-PC').removeClass('far fa-money-bill-alt blue-icon-panel').addClass('fas fa-tag iconCupomAtivo animated pulse').html('<p class="mb-0 mt-2 iconCupomAtivoTexto">Cupom<br>Ativado</p>');
    $(elementoQueSai).addClass('hide-section');
    $(elementoQueSai).removeClass('zoomOut animated');
    $(elementoQueEntra).removeClass('hide-section');
    $(elementoQueEntra).addClass('zoomIn animated');
    $(elementoQueSai).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
  });
  $(elementoQueEntra).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(elementoQueSai).removeClass('zoomIn animated');
    $(elementoQueEntra).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
  });
}
function mudaTipoPintura() {
    setTimeout(function () {
        if($('#btn-pinturaInterna').hasClass('active')){
          //Interna e Externa
          if($('#btn-pinturaExterna').hasClass('active')) {
            $('#calculadora').addClass('hide-section');
            $('#alerta').addClass('hide-section');
            $('.data').addClass('hide-section');
            $('.calculadora-controls').addClass('hide-section');
            $('#tamanhoImovel').addClass('hide-section');
            $('#orcamento-padrao').removeClass('hide-section');
            armazenaDados('tipoPintura','Interna e Externa');
          }
          //Somente Interna
          else{
            $('#alerta').addClass('hide-section');
            $('#orcamento-padrao').addClass('hide-section');
            $('#calculadora').removeClass('hide-section');
            $('.data').removeClass('hide-section');
            $('.calculadora-controls').removeClass('hide-section');
            $('#tamanhoImovel').removeClass('hide-section');
            armazenaDados('tipoPintura','Interna');
          }
        }
        else{
          //Somente Externa
          if($('#btn-pinturaExterna').hasClass('active')) {
            $('#calculadora').addClass('hide-section');
            $('#alerta').addClass('hide-section');
            $('.data').addClass('hide-section');
            $('.calculadora-controls').addClass('hide-section');
            $('#tamanhoImovel').addClass('hide-section');
            $('#orcamento-padrao').removeClass('hide-section');
            armazenaDados('tipoPintura','Externa');
          }
          //Alerta de 'Marque ao menos uma Opção
          else{

            // $('#calculadora').addClass('hide-section');
            // $('#orcamento-padrao').addClass('hide-section');
            // $('#tamanhoImovel').addClass('hide-section');
            // $('#alerta').removeClass('hide-section');
            // $('.data').removeClass('hide-section');
            // $('.calculadora-controls').removeClass('hide-section');
            armazenaDados('tipoPintura','Undefined');
          }
        }
    },50);
}
function mudaTipoImovel(tipoImovel) {
  if(tipoImovel==='apartamento'){
    $('#tipoPintura').addClass('hide-section');
    $('#alerta').addClass('hide-section');
    $('#orcamento-padrao').addClass('hide-section');
    $('#calculadora').removeClass('hide-section');
    $('.data').removeClass('hide-section');
    $('.calculadora-controls').removeClass('hide-section');
    $('#tamanhoImovel').removeClass('hide-section');
    armazenaDados('tipoImovel','Apartamento');
    armazenaDados('tipoPintura','Interna');
  }
  if(tipoImovel==='casa'){
    $('#tipoPintura').removeClass('hide-section');
    armazenaDados('tipoImovel','Casa');
    mudaTipoPintura();
  }
  if(tipoImovel==='escritorio'){
    $('#tipoPintura').addClass('hide-section');
    $('#calculadora').addClass('hide-section');
    $('.data').addClass('hide-section');
    $('#tamanhoImovel').addClass('hide-section');
    $('.calculadora-controls').addClass('hide-section');
    $('#orcamento-padrao').removeClass('hide-section');
    armazenaDados('tipoImovel','Escritório');
    armazenaDados('tipoPintura','Interna');
    armazenaDados('tamanhoImovel','Undefined');
    armazenaDados('alturaParede','Undefined');
  }
  if(tipoImovel==='outros'){
    $('#tipoPintura').addClass('hide-section');
    $('#calculadora').addClass('hide-section');
    $('.data').addClass('hide-section');
    $('#tamanhoImovel').addClass('hide-section');
    $('.calculadora-controls').addClass('hide-section');
    $('#orcamento-padrao').removeClass('hide-section');
    armazenaDados('tipoImovel','Outros');
    armazenaDados('tipoPintura','Interna');
    armazenaDados('tamanhoImovel','Undefined');
    armazenaDados('alturaParede','Undefined');
  }
}
function atualizaValorEstimado(valorOrcado) {
  valorOrcado[0] = Math.ceil(valorOrcado[0])+',00';
  valorOrcado[1] = Math.ceil(valorOrcado[1])+',00';
  valorOrcado[2] = Math.ceil(valorOrcado[2])+',00';
  valorOrcado[3] = Math.ceil(valorOrcado[3])+',00';
  valorOrcado[4] = Math.ceil(valorOrcado[4])+',00';
  if(valorOrcado[0] === valorOrcado[1]){
    $('.valorEstimado').html('R$ '+valorOrcado[0]);
  }
  else{
    $('#cardWrapper-pc').hide();
    $('#iconCalculadora-PC').removeClass('far fa-money-bill-alt blue-icon-panel').addClass('fas fa-tag iconCupomAtivo animated pulse').html('<p class="mb-0 mt-2 iconCupomAtivoTexto">Cupom<br>Ativado</p>');
    $('#navegadorHeader-PC').attr('style','padding-right:'+Math.ceil($('#iconCalculadora-PC').innerWidth())+'px'); //Corrige a 'lateralidade do titulo do navegador, sem isso ele fica descentralizado devido ao icone presente do lado esquerdo
    $('#valorWrapper-mobile').removeClass('data');
    $('.valorEstimadoTitle').hide();
    $('.valorEstimado').hide();
    $('.valorBaseCupomAtivo').html('Valor Estimado: <span style="text-decoration: line-through!important;font-size: 0.9rem!important;color: #999999!important;"> De R$ '+valorOrcado[0]+'</span>');
    $('.valorDescontoCupomAtivo').html('Por R$ '+valorOrcado[1]);
    $('.valoresMobile').removeClass('hide-section').addClass('zoomIn animated');
    $('.valoresPC').removeClass('hide-section').addClass('tada animated');
  }
  armazenaDados('valorOrcado',valorOrcado[0]+'-'+valorOrcado[1]+'-'+valorOrcado[2]+'-'+valorOrcado[3]+'-'+valorOrcado[4]);
}
function notificaErro(titulo,mensagem) {
  toastr.error(mensagem,titulo);
}

//Logica para validação e armazenamento dos dados
function armazenaDados(keyName, value) {
  sessionStorage.setItem(keyName, value);
}
function linhaTabela(tipoComodo,linhaTabela) {
  $("#table-body").empty();
  setTimeout(function () {
    $("#table-body").append(
      "<tr id=\""+tipoComodo+"-"+linhaTabela+"\">\n" +
      "  <th scope=\"row\">"+tipoComodo+" "+ linhaTabela + "</th>\n" +
      "  <td class=\"text-center\">\n" +
      "    <div>"+
      "     <input class=\"form-check-input\" onclick=\"salvaComodos();\" type=\"checkbox\" id=\""+tipoComodo+linhaTabela+"-parede\" checked>\n" +
      "     <label class=\"form-check-label label-table\" for=\""+tipoComodo+linhaTabela+"-parede\"></label>\n" +
      "    </div>"+
      "  </td>\n" +
      "  <td class=\"text-center\">\n" +
      "    <div>"+
      "     <input class=\"form-check-input\" onclick=\"salvaComodos();\" type=\"checkbox\" id=\""+tipoComodo+linhaTabela + "-teto\" checked>\n" +
      "     <label class=\"form-check-label label-table\" for=\""+tipoComodo+linhaTabela+"-teto\"></label>\n" +
      "    </div>"+
      "  </td>\n" +
      "  <td class=\"text-center\">\n" +
      "    <div>"+
      "     <input class=\"form-check-input\" onclick=\"salvaComodos();\" type=\"checkbox\" id=\""+tipoComodo+linhaTabela + "-moldura\">\n" +
      "     <label class=\"form-check-label label-table\" for=\""+tipoComodo+linhaTabela+"-moldura\"></label>\n" +
      "    </div>"+
      "  </td>\n" +
      "  <td class=\"text-center\">\n" +
      "    <div>"+
      "     <input class=\"form-check-input\" onclick=\"salvaComodos();\" type=\"checkbox\" id=\""+tipoComodo+linhaTabela + "-rodape\">\n" +
      "     <label class=\"form-check-label label-table\" for=\""+tipoComodo+linhaTabela+"-rodape\"></label>\n" +
      "    </div>"+
      "  </td>\n" +
      "  <td class=\"text-center\">\n" +
      "    <div class=\"md-form form-sm mt-2 mb-0\">\n" +
      "      <input type=\"number\" onchange=\"salvaComodos();\" class=\"form-control\" id=\""+tipoComodo+linhaTabela+"-qtdPortas\" onkeypress=\"this.value=this.value.replace(/[^0-9]/g,'');\">\n" +
      "      <label class=\"tableLabel\" for=\""+tipoComodo+linhaTabela+"-qtdPortas\">Qdt. Portas</label>\n" +
      "    </div>\n" +
      "  </td>\n" +
      "  <td class=\"text-center\">\n" +
      "    <div class=\"md-form form-sm mt-2 mb-0\">\n" +
      "      <input type=\"text\" onchange=\"salvaComodos();\" id=\""+tipoComodo+linhaTabela+"-observacoes\" class=\"form-control\" placeholder=\"Ex: Infiltração no teto\">\n" +
      "    </div>\n" +
      "  </td>\n" +
      "</tr>");
  },100);
  salvaComodos();
}
function Comodo(id,tipo,parede,teto,moldura,rodape,qtdPortas,observacoes) {
  this.id = id;
  this.tipo = tipo;
  this.parede = parede;
  this.teto = teto;
  this.moldura = moldura;
  this.rodape = rodape;
  this.qtdPortas = qtdPortas;
  this.observacoes = observacoes;
}
function trataAlturaPeDireito(alturaPeDireito){
  var stringAlturaPeDireito = '';
  if(alturaPeDireito==0){
    stringAlturaPeDireito = 'COMUM - Até 2,7 M';
  }
  else if (alturaPeDireito==1){
    stringAlturaPeDireito = 'DUPLO - Até 4,5 M';
  }
  else if (alturaPeDireito==2){
    stringAlturaPeDireito = 'TRIPLO - Mais de 4,5 M';
  }
  return stringAlturaPeDireito;
}
function trataTamanhoImovel(tamanhoImovel){
  var stringTamanhoImovel = '';
  if(tamanhoImovel==0){
    stringTamanhoImovel = 'Até 50 M²';
  }
  else if (tamanhoImovel==1){
    stringTamanhoImovel = "Até 75 M²";
  }
  else if (tamanhoImovel==2){
    stringTamanhoImovel = "Até 100 M²";
  }
  else if (tamanhoImovel==3){
    stringTamanhoImovel = "Até 150 M²";
  }
  else if (tamanhoImovel==4){
    stringTamanhoImovel = "Maior que 150 M²";
  }
  return stringTamanhoImovel;
}
//Transforma do ID do elemento html para o formato de tipoComodo
function capturaTipo(elementID) {
  var tipoComodo = elementID.split("-",1);
  tipoComodo = tipoComodo[0];
  tipoComodo = tipoComodo.substring(0,(tipoComodo.length - 1));
  while(tipoComodo.indexOf(" ") != -1){
    tipoComodo = tipoComodo.replace(" ", "");
  }
  tipoComodo = tipoComodo.toLowerCase();
  return tipoComodo
}
function salvaComodos() {
  var camposSalvos = 0;
  var idComodo = 0;
  setTimeout(function () {
    var comodos = [];
    $("tbody#table-body > tr > td > div > input").each(function (index) {
      if (index === (camposSalvos)) {
        comodo = new Comodo();
        comodo.id = idComodo;
        comodo.tipo = capturaTipo(this.id);
        comodo.parede = $(this).prop('checked');
        idComodo++;
      }
      if (index === (1+camposSalvos)){
        comodo.teto = $(this).prop('checked');
      }
      if (index === (2+camposSalvos)){
        comodo.moldura = $(this).prop('checked');
      }
      if(index === (3+camposSalvos)) {
        comodo.rodape = $(this).prop('checked');
      }
      if(index === (4+camposSalvos)) {
        comodo.qtdPortas = $(this).prop('value');
        if(comodo.qtdPortas===""){
          comodo.qtdPortas = 0;
        }
      }
      if(index === (5+camposSalvos)) {
        comodo.observacoes = $(this).prop('value');
        comodos.push(comodo);
        camposSalvos = camposSalvos+6;
      }
    });
    comodos = JSON.stringify(comodos);
    armazenaDados('comodos',comodos);
    geraOrcamento();
  },100);
}
function validaViewBase() {
  var tipoImovel = sessionStorage.getItem('tipoImovel');
  var tamanhoImovel = sessionStorage.getItem('tamanhoImovel');
  var alturaParede = sessionStorage.getItem('alturaParede');
  var tipoPintura = sessionStorage.getItem('tipoPintura');
  if (tipoImovel==='Casa'){
    if(tamanhoImovel!=0&&tamanhoImovel!=1&&tamanhoImovel!=2&&tamanhoImovel!=3&&tamanhoImovel!=4){
      notificaErro('Você esqueceu um campo obrigatório','Marque uma das opções para o Tamanho do Imóvel');
    }
    else if (alturaParede!=0&&alturaParede!=1&&alturaParede!=2){
      notificaErro('Você esqueceu um campo obrigatório','Marque uma das opções para a Altura do Pé Direito');
    }
    else if(tipoPintura === 'Undefined'){
      notificaErro('Você esqueceu um campo obrigatório','É necessário marcar o Tipo de Pintura desejado');
    }
    else{
      trocaSlide('.base','.view1');
      progressBarAnimate('20%');
    }
  }
  else if (tipoImovel==='Apartamento') {
    if(tamanhoImovel!=0&&tamanhoImovel!=1&&tamanhoImovel!=2&&tamanhoImovel!=3&&tamanhoImovel!=4){
      notificaErro('Você esqueceu um campo obrigatório','Marque uma das opções para o Tamanho do Imóvel');
    }
    else if (alturaParede!=0&&alturaParede!=1&&alturaParede!=2){
      notificaErro('Você esqueceu um campo obrigatório','Marque uma das opções para a Altura do Pé Direito');
    }
    else{
      trocaSlide('.base','.view1');
      progressBarAnimate('20%');
    }
  }
}
function validaView1() {
  var qtdDormitorios = parseInt($("#input-dormitorio").val());
  var qtdBanheiros = parseInt($("#input-banheiro").val());
  var qtdCozinhas = parseInt($("#input-cozinha").val());
  var qtdHall = parseInt($("#input-hallentrada").val());
  var qtdCorredores = parseInt($("#input-corredor").val());
  var qtdSacadas = parseInt($("#input-sacada").val());
  var qtdSalas = parseInt($("#input-sala").val());
  var qtdLavanderia = parseInt($("#input-lavanderia").val());
  var qtdTotalComodos = qtdDormitorios+qtdBanheiros+qtdCozinhas+qtdHall+qtdCorredores+qtdSacadas+qtdSalas+qtdLavanderia;
  var linhaComodo = 1;
  if (qtdTotalComodos!==0) {
    trocaSlide('.view1','.view2');
    progressBarAnimate('40%');
    armazenaDados('qtdComodos',qtdTotalComodos);
    for(linhaComodo=1; linhaComodo<=qtdDormitorios; linhaComodo++){
      linhaTabela('Dormitorio',linhaComodo);
    }
    for(linhaComodo=1; linhaComodo<=qtdBanheiros; linhaComodo++){
      linhaTabela('Banheiro',linhaComodo);
    }
    for(linhaComodo=1; linhaComodo<=qtdCozinhas; linhaComodo++){
      linhaTabela('Cozinha',linhaComodo);
    }
    for(linhaComodo=1; linhaComodo<=qtdHall; linhaComodo++){
      linhaTabela('Hall de Entrada',linhaComodo);
    }
    for(linhaComodo=1; linhaComodo<=qtdCorredores; linhaComodo++){
      linhaTabela('Corredor',linhaComodo);
    }
    for(linhaComodo=1; linhaComodo<=qtdSacadas; linhaComodo++){
      linhaTabela('Sacada',linhaComodo);
    }
    for(linhaComodo=1; linhaComodo<=qtdSalas; linhaComodo++){
      linhaTabela('Sala',linhaComodo);
    }
    for(linhaComodo=1; linhaComodo<=qtdLavanderia; linhaComodo++){
      linhaTabela('Lavanderia',linhaComodo);
    }
  }
  else{
    notificaErro('Você esqueceu um campo obrigatório',"É necessário Informar pelo menos um comodo");
  }
}
function validaView2() {
  var validado = 0;
  $('#view2-slide1 > div > div > div.radio-card-icon').each(function (index) {
    if($(this).hasClass("active")){
      validado = 1;
    }
  });

  if (validado === 0){
    notificaErro('Você esqueceu um campo obrigatório',"Escolha um tipo de Material");
  }
  else{
    trocaSlide('.view2','.view3');
    progressBarAnimate('60%');
    geraOrcamento();
  }
}
function validaView3() {
  var contaLinha = 1;
  var quebraLinha = 3;
  var validado = 1;
  var linha = [];
  var tabela = [];
  //Popula o Array tabela com o valor lógico de cada um dos items obrigatórios do site
  $("tbody#table-body > tr > td > div > input.form-check-input").each(function (index) {
    if (index === quebraLinha){
      quebraLinha = quebraLinha +4;
      linha.push($(this).prop('checked'));
      tabela.push(linha);
      linha = [];
    }else{
      linha.push($(this).prop('checked'));
    }
  });
  //Varre o array tabela, validando se os campos obrigatórios foram preenchidos
  tabela.forEach(function (item) {
    if ($.inArray(true,item)===-1){
      $("tbody#table-body > tr:nth-child("+contaLinha+")").addClass('animated pulse bg-color-rosa-claro');
      validado = 0;
    }
    contaLinha++;
  });
  //Se validado, salva os dados num objeto e leva para a proxima view, senao notifica o erro
  if(validado===1){
    var valorAtual = geraOrcamento();
    if(parseInt(valorAtual[1])>450){
      trocaSlide('.view3','.view4');
      progressBarAnimate('90%');
    }else{
      notificaErro('Valor Mínimo não atingido','O valor minimo para orçamentos é 450 Reais, insira mais comodos, ou marque mais opções de pintura(Parede, Teto, Moldura ou Rodapé)');
    }
  }
  else{
    notificaErro('Você esqueceu um campo obrigatório','É necessário marcar ao menos uma opção para área de pintura(Parede, Teto, Moldura ou Rodapé)');
    //Highlight dos itens errados na table
    setTimeout(function () {
      $("tbody#table-body > tr:not(.animated)").removeClass('bg-color-rosa-claro');
      $("tbody#table-body > tr").removeClass('animated pulse');
    },1000);
  }
}
function checkOrNot(item) {
  const check = '<i class="fas fa-check"></i>';
  const notCheck = '<i class="fas fa-times"></i>';
  if (item === true){
    return check
  }else{
    return notCheck
  }
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
  return $campoTratado;
}
function tabelaComodos(comodos) {
  var qtdComodos = comodos.length;
  var texto = '';

  for (var i = 0; i<qtdComodos; i++){
    texto=
        texto +
        `<div class="col-12 col-md-6 py-2">
        <div class="border-orcamento">
          <table class="table table-sm table-striped mb-0">
            <thead>
              <tr>
                <th class="text-center" colspan="2">
                  <h4 class="fw-500">
                  `
                    + trataCamposTabela(comodos[i].tipo) + " " +  (i+1) +
                  `
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Pintar Parede?
                </td>
                <td>
                  `
                    + checkOrNot(comodos[i].parede) +
                  `
                </td>
              </tr>
              <tr>
                <td>Pintar Teto?</td>
                <td>
                  `
                    + checkOrNot(comodos[i].teto) +
                  `
                </td>
              </tr>
              <tr>
                <td>Pintar Moldura?</td>
                <td>
                  `
                    + checkOrNot(comodos[i].moldura) +
                  `
                </td>
              </tr>
              <tr>
                <td>Pintar Rodapé?</td>
                <td>
                  `
                    + checkOrNot(comodos[i].rodape) +
                  `
                </td>
              </tr>
              <tr>
                <td>Qtd. Portas</td>
                <td>
                  `
                    + comodos[i].qtdPortas +
                  `
                </td>
              </tr>
              <tr>
                <td>Observações</td>
                <td>
                  `
                    + comodos[i].observacoes +
                  `
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      `;
  }
  return texto
}
function gerarResumoOrcamento(dadosOrcamento) {
  var valorTotal = dadosOrcamento['valorFerramentas'] + dadosOrcamento['valorMaterial'] + parseInt(dadosOrcamento['valorMOComDesconto']);
  $('#corpoResumoOrcamento').append(
      "<div class=\"row justify-content-center align-items-start\" id=\"corpoResumoOrcamento-infoGeral\">\n" +
      "                  <h3 class=\"fw-500 w-100 text-center\">Informações Gerais</h3>\n" +
      "                  <div class=\"col-12 col-md-6\">\n" +
      "                    <div class=\"border-orcamento mb-3\">\n" +
      "                      <table class=\"table table-sm table-striped mb-0\">\n" +
      "                        <thead>\n" +
      "                        <tr>\n" +
      "                          <th class=\"text-center\" colspan=\"2\">\n" +
      "                            <h4 class=\"fw-500\">Dados para Contato</h4>\n" +
      "                          </th>\n" +
      "                        </tr>\n" +
      "                        </thead>\n" +
      "                        <tbody>\n" +
      "                        <tr>\n" +
      "                          <td>\n" +
      "                            Nome\n" +
      "                          </td>\n" +
      "                          <td>\n" +
      "                            \n" + dadosOrcamento['nome'] +
      "                          </td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td>Telefone</td>\n" +
      "                          <td>\n" +  dadosOrcamento['telefone'] + "</td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td>Email</td>\n" +
      "                          <td>\n" +  dadosOrcamento['email'] + "</td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td>CEP</td>\n" +
      "                          <td>\n" +  dadosOrcamento['CEP'] + "</td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td>Mensagem</td>\n" +
      "                          <td>\n" +  dadosOrcamento['mensagem'] + "</td>\n" +
      "                        </tr>\n" +
      "                        </tbody>\n" +
      "                      </table>\n" +
      "                    </div>\n" +
      "                  </div>\n" +
      "                  <div class=\"col-12 col-md-6\">\n" +
      "                    <div class=\"border-orcamento\">\n" +
      "                      <table class=\"table table-sm table-striped mb-0\">\n" +
      "                        <thead>\n" +
      "                        <tr>\n" +
      "                          <th class=\"text-center\" colspan=\"2\">\n" +
      "                            <h4 class=\"fw-500\">Descrição do Imóvel</h4>\n" +
      "                          </th>\n" +
      "                        </tr>\n" +
      "                        </thead>\n" +
      "                        <tbody>\n" +
      "                        <tr>\n" +
      "                          <td>\n" +
      "                            Tipo do Imóvel\n" +
      "                          </td>\n" +
      "                          <td>\n" +
      "                            \n" + dadosOrcamento['tipoImovel'] +
      "                          </td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td>Tamanho total do Imóvel</td>\n" +
      "                          <td>\n" +  trataTamanhoImovel(dadosOrcamento['tamanhoImovel']) + "</td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td>Tipo de Pintura</td>\n" +
      "                          <td>\n" +  dadosOrcamento['tipoPintura'] + "</td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td>Altura do Pé Direito</td>\n" +
      "                          <td>\n" +  trataAlturaPeDireito(dadosOrcamento['alturaParede']) + "</td>\n" +
      "                        </tr>\n" +
      "                        </tbody>\n" +
      "                      </table>\n" +
      "                    </div>\n" +
      "                  </div>\n" +
      "                </div>\n" +
      "                <hr class=\"w-75\">\n" +
      "                <div class=\"row\" id=\"corpoResumoOrcamento-comodos\">\n" +
      "                  <h3 class=\"fw-500 w-100 text-center\">Cômodos</h3>\n" +
      tabelaComodos(dadosOrcamento['comodos']) +
      "                </div>\n" +
      "                <hr class=\"w-75\">\n" +
      "                <div class=\"row justify-content-center align-items-start\" id=\"corpoResumoOrcamento-valor\">\n" +
      "                  <h3 class=\"fw-500 w-100 text-center\">Resumo do orçamento</h3>\n" +
      "                  <div class=\"col-12 col-md-6 pt-2 pb-4\">\n" +
      "                    <div class=\"border-orcamento\">\n" +
      "                      <table class=\"table table-sm table-striped mb-0\">\n" +
      "                        <thead>\n" +
      "                        <tr>\n" +
      "                          <th class=\"text-center\" colspan=\"2\">\n" +
      "                            <h4 class=\"fw-500\">Resumo do Orçamento</h4>\n" +
      "                          </th>\n" +
      "                        </tr>\n" +
      "                        </thead>\n" +
      "                        <tbody>\n" +
      "                        <tr>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            Valor da Mão de Obra\n" +
      "                          </td>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            R$ \n"  + parseInt(dadosOrcamento['valorMOComDesconto']) +",00"+
      "                          </td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            Valor do Material\n" +
      "                          </td>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            R$ \n" + dadosOrcamento['valorMaterial'] + ",00"+
      "                          </td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            Valor das Ferramentas\n" +
      "                          </td>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            R$ \n" + dadosOrcamento['valorFerramentas'] + ",00"+
      "                          </td>\n" +
      "                        </tr>\n" +
      "                        <tr >\n" +
      "                          <td class=\"text-right fw-600 texto-maior\" style=\"text-decoration: underline\">\n" +
      "                            Garantia de 100% de Satisfação\n" +
      "                          </td>\n" +
      "                          <td class=\"text-right fw-600 texto-maior\">\n" +
      "                            Inclusa\n" +
      "                          </td>\n" +
      "                        </tr>\n" +
      "                        <tr>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            <h3 class=\"fw-400\">\n" +
      "                              Total\n" +
      "                            </h3>\n" +
      "                          </td>\n" +
      "                          <td class=\"text-right\">\n" +
      "                            <h3 class=\"fw-500\">\n" +
      "                              R$ \n" + valorTotal + ",00"+
      "                            </h3>\n" +
      "                          </td>\n" +
      "                        </tr>\n" +
      "                        </tbody>\n" +
      "                      </table>\n" +
      "                    </div>\n" +
      "                  </div>\n" +
      "                </div>"
  );
}

function enviaFormCalculadora() {
  var tamanhoImovel = sessionStorage.getItem('tamanhoImovel');
  var tipoAlturaParede = sessionStorage.getItem('alturaParede');
  var tipoPintura  = sessionStorage.getItem('tipoPintura');
  var tipoMaterial  = sessionStorage.getItem('tipoMaterial');
  var tipoImovel  = sessionStorage.getItem('tipoImovel');
  var origem = sessionStorage.getItem('origem');
  var nomeDaPagina = sessionStorage.getItem('nomeDaPagina');
  var coefDesconto = sessionStorage.getItem('coefDesconto');
  var cupomDesconto = sessionStorage.getItem('cupomDesconto');
  var valorOrcado = sessionStorage.getItem('valorOrcado').replace(/,/g,'.').split('-');
  var valorSemDesconto = valorOrcado[0];
  var valorComDesconto = valorOrcado[1];
  var valorMaterial = Math.ceil(valorOrcado[2]*0.9);
  var valorMO = valorOrcado[3];
  var valorMOComDesconto = valorOrcado[4];
  var valorFerramentas = Math.floor(valorOrcado[2]*0.1);
  var comodos = JSON.parse(sessionStorage.getItem('comodos'));
  var validado = 1;

  $("form#calculadoraForm > div > input").each(function () {
    if(this.value==""){
      notificaErro('Um campo obrigatório nao foi preenchido!', 'Confira se digitou seu Nome, Email, Telefone e CEP');
      validado  = 0;
      return false
    }
  });
  if (validado === 1){
    ShowLoader();
    var dataLayer = window.dataLayer || [];
    var formData = $("#calculadoraForm").serializeArray();
    var dataObj = {};
    $(formData).each(function(i, field){
      dataObj[field.name] = field.value;
    });
    dataObj["tamanhoImovel"] = tamanhoImovel;
    dataObj["alturaParede"] = tipoAlturaParede;
    dataObj["tipoPintura"] = tipoPintura;
    dataObj["tipoMaterial"] = tipoMaterial;
    dataObj["tipoImovel"] = tipoImovel;
    dataObj["origem"] = origem;
    dataObj["nomeDaPagina"] = nomeDaPagina;
    dataObj["coefDesconto"] = coefDesconto;
    dataObj["cupomDesconto"] = cupomDesconto;
    dataObj["valorSemDesconto"] = valorSemDesconto;
    dataObj["valorComDesconto"] = valorComDesconto;
    dataObj["valorMaterial"] = valorMaterial;
    dataObj["valorFerramentas"] = valorFerramentas;
    dataObj["valorMO"] = valorMO;
    dataObj["valorMOComDesconto"] = valorMOComDesconto;
    dataObj["comodos"] = comodos;
    dataObj["submit"] = 'ok';
    $.ajax({
          type: "POST",
          url: "php/handlerPloomesDeals.php",
          data: dataObj,
          dataType: "json",
          success: function (data) {
            if(data.tipo==="sucesso"){
              dataLayer.push({
                'event': 'marcarConversao'
              });
              HideLoader();
              gerarResumoOrcamento(dataObj);
              trocaSlide('.orcamento','.orcamentoEnviado');
              progressBarAnimate('100%');
              toastr.success(data.mensagem,data.titulo);
            }
            else{
          $.ajax({
            type: "POST",
            url: "php/handlerCalculadora.php",
            data: dataObj,
            dataType: "json",
            success: function (data) {
              if (data.tipo === "sucesso") {
                HideLoader();
                toastr.success(data.mensagem, data.titulo);
              } else {
                HideLoader();
                toastr.error(data.mensagem, data.titulo);
              }
            }
          });
        }
      },
          error: function (data) {
            HideLoader();
            gerarResumoOrcamento(dataObj);
            trocaSlide('.orcamento','.orcamentoEnviado');
            progressBarAnimate('100%');
          }
    });
  }
}
function enviaFormPadrao() {
  var tipoImovel  = sessionStorage.getItem('tipoImovel');
  var tipoPintura  = sessionStorage.getItem('tipoPintura');
  var origem = sessionStorage.getItem('origem');
  var nomeDaPagina = sessionStorage.getItem('nomeDaPagina');
  var validado = 1;
  $("form#formPadrao > div > input").each(function () {
    if(this.value==""){
      notificaErro('Um campo obrigatório nao foi preenchido!', 'Confira se digitou seu Nome, Email, Telefone e CEP');
      validado  = 0;
      return false
    }
  });
  if (validado === 1){
    ShowLoader();
    var dataLayer = window.dataLayer || [];
    var formData = $("#formPadrao").serializeArray();
    var dataObj = {};
    $(formData).each(function(i, field){
      dataObj[field.name] = field.value;
    });
    dataObj["tipoPintura"] = tipoPintura;
    dataObj["tipoImovel"] = tipoImovel;
    dataObj["origem"] = origem;
    dataObj["nomeDaPagina"] = nomeDaPagina;
    dataObj["submit"] = 'ok';
    $.ajax({
      type: "POST",
      url: "php/handlerPloomesDeals.php",
      data: dataObj,
      dataType: "json",
      success: function (data) {
        if(data.tipo==="sucesso"){
          dataLayer.push({
            'event': 'marcarConversao'
          });
          HideLoader();
          trocaSlide('.base,#orcamento-padrao','#agradecimentoFormPadrao');
          toastr.success(data.mensagem,data.titulo);
        }
        else{
          $.ajax({
            type: "POST",
            url: "php/handlerCalculadora.php",
            data: dataObj,
            dataType: "json",
            success: function (data) {
              if (data.tipo === "sucesso") {
                HideLoader();
                toastr.success(data.mensagem, data.titulo);
              } else {
                HideLoader();
                toastr.error(data.mensagem, data.titulo);
              }
            }
          });
        }
      }
    });
  }
}
// Calculos
function validaDataCupom(validadeInicio, validadeFinal){
  var dataAtual = new Date;
  var dataInicio = new Date;
  var dataFinal = new  Date;
  var arrayInicio = validadeInicio.split('-');
  var arrayFinal = validadeFinal.split('-');

  dataInicio.setDate(parseInt(arrayInicio[0]));
  dataInicio.setMonth(parseInt(arrayInicio[1])-1);
  dataInicio.setFullYear(parseInt(arrayInicio[2]));
  dataFinal.setDate(parseInt(arrayFinal[0]));
  dataFinal.setMonth(parseInt(arrayFinal[1])-1);
  dataFinal.setFullYear(parseInt(arrayFinal[2]));

  if(dataInicio<= dataAtual && dataAtual<=dataFinal){
    return true
  }
  return false
}
function validarCupom() {
  var cupomInserido = $('#input-cupom').val();
  var cupomInseridoMobile = $('#input-cupom-mobile').val();
  var decryptCupons = JSON.parse(atob(cuponsDesconto));
  var arrayCupons = decryptCupons.cuponsAtivos;
  var cupomValidado = 0;
  var codigoErro = 0;
  arrayCupons.forEach(function (index) {
    if(index.idCupom.toLowerCase() === cupomInserido.toLowerCase() || index.idCupom.toLowerCase() === cupomInseridoMobile.toLowerCase()){
      if (validaDataCupom(index.validadeInicio,index.validadeFinal)===true){
        cupomValidado = 1;
        armazenaDados('cupomDesconto',index.idCupom);
        toastr.info('Desfrute de suas novas cores com um preço especial','Cupom Ativado');
        if(sessionStorage.getItem('valorOrcado')!=='0'){
          trocaSlideCupons();
          armazenaDados('coefDesconto',index.desconto);
          geraOrcamento();
        }else{
          trocaSlideCupons();
          armazenaDados('coefDesconto',index.desconto);
        }
      }
      else {
        codigoErro = 2;
      }
    }else{
      if (codigoErro===0){
        codigoErro = 1;
      }
    }
  });
  //Retorna o Erro, caso tenha ocorrido algum
  if (cupomValidado===0){
    if (codigoErro===1){
      notificaErro('Cupom Inválido','Ops, algo deu errado, confira se digitou corretamente o código do seu cupom');
    }
    if (codigoErro===2){
      notificaErro('Cupom Vencido','Ops, algo deu errado, o prazo de validade do seu cupom expirou');
    }
  }
}
function capturaTamanho(tipoPintura, tipoComodo, tamanhoImovel) {
  var decryptTamanho = JSON.parse(atob(configTamanho));
  var tamanhoComodo = 0;
  var arrayTamanhoComodos;
  if(tipoPintura==='parede'){
    arrayTamanhoComodos = decryptTamanho.perimetroParede;
    arrayTamanhoComodos.forEach(function (index) {
      if(index.tipoComodo === tipoComodo){
        tamanhoComodo = index.tamanho[tamanhoImovel];
      }
    });
  }
  else if(tipoPintura==='teto'){
    arrayTamanhoComodos = decryptTamanho.perimetroTeto;
    arrayTamanhoComodos.forEach(function (index) {
      if(index.tipoComodo === tipoComodo){
        tamanhoComodo = index.tamanho[tamanhoImovel];
      }
    });
  }
  else if(tipoPintura==='moldura'){
    arrayTamanhoComodos = decryptTamanho.perimetroMoldura;
    arrayTamanhoComodos.forEach(function (index) {
      if(index.tipoComodo === tipoComodo){
        tamanhoComodo = index.tamanho[tamanhoImovel];
      }
    });
  }
  else if(tipoPintura==='rodape'){
    arrayTamanhoComodos = decryptTamanho.perimetroRodape;
    arrayTamanhoComodos.forEach(function (index) {
      if(index.tipoComodo === tipoComodo){
        tamanhoComodo = index.tamanho[tamanhoImovel];
      }
    });
  }
  return tamanhoComodo
}
function capturaAltura(tipoAlturaParede) {
  var decryptTamanho = JSON.parse(atob(configTamanho));
  var arrayAlturas = decryptTamanho.alturaParede;
  var alturaParede;
  alturaParede = arrayAlturas[tipoAlturaParede];
  return alturaParede
}
function capturaValor(tipoPintura,tipoMaterial) {
  var decryptTamanho = JSON.parse(atob(configValor));
  var arrayValoresComodos = decryptTamanho.tabelaPreco;
  var coefDesconto = sessionStorage.getItem('coefDesconto');
  var valorBase = 0;
  var valorDesconto = 0;
  var valorMaterial = 0;
  var valorMO = 0;
  var valorMODesconto = 0;
  var valorPorMetro = [];
  arrayValoresComodos.forEach(function (index) {
    if(index.tipoPintura === tipoPintura){
      valorBase = index.maoObra + index.valorMaterial[tipoMaterial];
      valorDesconto = (index.maoObra*coefDesconto) + index.valorMaterial[tipoMaterial];
      valorMaterial = index.valorMaterial[tipoMaterial];
      valorMO = index.maoObra;
      valorMODesconto = index.maoObra*coefDesconto;
      valorPorMetro[0]=valorBase;
      valorPorMetro[1]=valorDesconto;
      valorPorMetro[2]=valorMaterial;
      valorPorMetro[3]=valorMO;
      valorPorMetro[4]=valorMODesconto;
    }
  });
  return valorPorMetro
}
function calculaValorPortas(qtdPortas,tipoMaterial) {
  var decryptTamanho = JSON.parse(atob(configValor));
  var arrayValorPortas = decryptTamanho.tabelaPreco;
  var coefDesconto = sessionStorage.getItem('coefDesconto');
  var valorMaoObra = 0.00;
  var valorMaterial = 0.00;
  var valorBase = 0.00;
  var valorDesconto = 0.00;
  var valorPortas = [];
  arrayValorPortas.forEach(function (index) {
    if(index.tipoPintura === 'porta'){
      valorMaoObra = index.maoObra;
      valorMaterial = index.valorMaterial;
    }
  });
  if (tipoMaterial==0){
    valorBase = qtdPortas*valorMaoObra;
    valorDesconto = qtdPortas*valorMaoObra*coefDesconto;
    valorPortas[0]=valorBase;
    valorPortas[1]=valorDesconto;
  }
  else{
    valorBase = (qtdPortas*valorMaoObra) + ((Math.ceil(qtdPortas/4)*valorMaterial));
    valorDesconto = (qtdPortas*valorMaoObra*coefDesconto) + ((Math.ceil(qtdPortas/4)*valorMaterial));
    valorPortas[0]=valorBase;
    valorPortas[1]=valorDesconto;
  }
  return valorPortas
}
function geraOrcamento() {
  const descontoDeVao = 0.85;
  var i=0;
  var valorOrcadoBase = 0.00;
  var valorOrcadoDesconto = 0.00;
  var valorOrcadoMaterial = 0.00;
  var valorMaoObra = 0.00;
  var valorMaoObraDesconto = 0.00;
  var qtdPortas = 0;
  var custoPorMetro = [0,0];
  var tamanhoComodo = 0;
  var alturaParede = 0;
  var tamanhoImovel = sessionStorage.getItem('tamanhoImovel');
  var tipoAlturaParede = sessionStorage.getItem('alturaParede');
  var tipoMaterial  = sessionStorage.getItem('tipoMaterial');
  var comodos = JSON.parse(sessionStorage.getItem('comodos'));
  var tamanhoArray = comodos.length;
  for (i=0; i<tamanhoArray;i++){
    qtdPortas += parseInt(comodos[i].qtdPortas);
    if(comodos[i].parede===true){
      alturaParede = capturaAltura(tipoAlturaParede);
      tamanhoComodo = capturaTamanho('parede',comodos[i].tipo,tamanhoImovel) * alturaParede * descontoDeVao;
      custoPorMetro = capturaValor('parede',tipoMaterial);
      valorOrcadoBase = valorOrcadoBase + (custoPorMetro[0]*tamanhoComodo);
      valorOrcadoDesconto = valorOrcadoDesconto + (custoPorMetro[1]*tamanhoComodo);
      valorOrcadoMaterial = valorOrcadoMaterial + (custoPorMetro[2]*tamanhoComodo);
    }
    if(comodos[i].teto===true){
      custoPorMetro = capturaValor('teto',tipoMaterial);
      tamanhoComodo = capturaTamanho('teto',comodos[i].tipo,tamanhoImovel);
      valorOrcadoBase = valorOrcadoBase + (custoPorMetro[0]*tamanhoComodo);
      valorOrcadoDesconto = valorOrcadoDesconto + (custoPorMetro[1]*tamanhoComodo);
      valorOrcadoMaterial = valorOrcadoMaterial + (custoPorMetro[2]*tamanhoComodo);
    }
    if(comodos[i].moldura===true){
      custoPorMetro = capturaValor('moldura',tipoMaterial);
      tamanhoComodo = capturaTamanho('moldura',comodos[i].tipo,tamanhoImovel);
      valorOrcadoBase = valorOrcadoBase + (custoPorMetro[0]*tamanhoComodo);
      valorOrcadoDesconto = valorOrcadoDesconto + (custoPorMetro[1]*tamanhoComodo);
      valorOrcadoMaterial = valorOrcadoMaterial + (custoPorMetro[2]*tamanhoComodo);
    }
    if(comodos[i].rodape===true){
      custoPorMetro = capturaValor('rodape',tipoMaterial);
      tamanhoComodo = capturaTamanho('moldura',comodos[i].tipo,tamanhoImovel);
      valorOrcadoBase = valorOrcadoBase + (custoPorMetro[0]*tamanhoComodo);
      valorOrcadoDesconto = valorOrcadoDesconto + (custoPorMetro[1]*tamanhoComodo);
      valorOrcadoMaterial = valorOrcadoMaterial + (custoPorMetro[2]*tamanhoComodo);
    }
  }
  if(qtdPortas>0){
    valorPortas = calculaValorPortas(qtdPortas, tipoMaterial);
    valorOrcadoBase += valorPortas[0];
    valorOrcadoDesconto += valorPortas[1];
  }
  valorMaoObraDesconto = valorOrcadoDesconto - valorOrcadoMaterial;
  valoresOrcados = [valorOrcadoBase,valorOrcadoDesconto,valorOrcadoMaterial,valorMaoObra,valorMaoObraDesconto];
  atualizaValorEstimado(valoresOrcados);
  return valoresOrcados
}
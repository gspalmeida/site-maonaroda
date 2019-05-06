//Input - e +
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
  armazenaDados('tipoImovel','Casa');
  armazenaDados('tipoPintura','Interna');
  armazenaDados('tipoMaterial','0');
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
    armazenaDados('tipoPintura','Undefined');
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
    armazenaDados('tipoPintura','Undefined');
    armazenaDados('tamanhoImovel','Undefined');
    armazenaDados('alturaParede','Undefined');
  }
}
function atualizaValorEstimado(valorOrcado) {
  $('.valorEstimado').html('R$ '+Math.ceil(valorOrcado)+',00');
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
      "      <input type=\"number\" onchange=\"salvaComodos();\" class=\"form-control\" id=\""+tipoComodo+linhaTabela+"-qtdPortas\">\n" +
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
    if(tamanhoImovel!==1&&tamanhoImovel!==2&&tamanhoImovel!==3&&tamanhoImovel!==4&&tamanhoImovel!==5){
      notificaErro('Você esqueceu um campo obrigatório','Marque uma das opções para o Tamanho do Imóvel');
    }
    else if (alturaParede!==1&&alturaParede!==2&&alturaParede!==3){
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
  var validado = 0
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
    if(geraOrcamento()>450){
      trocaSlide('.view3','.view4');
      progressBarAnimate('90%');
    }else{
      notificaErro('Valor Mínimo não atingido','O valor minimo para orçamentos é 450 Reais, insira mais comodos, ou marque mais opções de pintura(Parede, Teto, Moldura ou Rodapé)');
    }
  }
  else{
    notificaErro('Você esqueceu um campo obrigatório','É necessário marcar ao menos uma opção para área de pintura(Parede, Teto, Moldura ou Rodapé)');
    setTimeout(function () {
      $("tbody#table-body > tr:not(.animated)").removeClass('bg-color-rosa-claro');
      $("tbody#table-body > tr").removeClass('animated pulse');
    },1000);
  }
}
function enviaFormCalculadora() {
  var tamanhoImovel = sessionStorage.getItem('tamanhoImovel');
  var tipoAlturaParede = sessionStorage.getItem('alturaParede');
  var tipoMaterial  = sessionStorage.getItem('tipoMaterial');
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
    var formData = $("#calculadoraForm").serializeArray();
    var dataObj = {};
    $(formData).each(function(i, field){
      dataObj[field.name] = field.value;
    });
    dataObj["tamanhoImovel"] = tamanhoImovel;
    dataObj["alturaParede"] = tipoAlturaParede;
    dataObj["tipoMaterial"] = tipoMaterial;
    dataObj["comodos"] = comodos;
    dataObj["submit"] = 'ok';

    $.ajax({
      type: "POST",
      url: "php/handlerCalculadora.php",
      data: dataObj,
      dataType: "json",
      success: function (data) {
        if(data.tipo==="sucesso"){
          HideLoader();
          trocaSlide('.view4','.orcamentoEnviado');
          progressBarAnimate('100%');
          toastr.success(data.mensagem,data.titulo);
        }
        else{
          HideLoader();
          toastr.error(data.mensagem,data.titulo);
        }
      }
    });
  }
}
// Calculos
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
  var valorPorMetro = 0;
  arrayValoresComodos.forEach(function (index) {
    if(index.tipoPintura === tipoPintura){
      valorPorMetro = index.maoObra + index.valorMaterial[tipoMaterial];
    }
  });
  return valorPorMetro
}
function calculaValorPortas(qtdPortas,tipoMaterial) {
  var decryptTamanho = JSON.parse(atob(configValor));
  var arrayValorPortas = decryptTamanho.tabelaPreco;
  var valorMaoObra = 0.00;
  var valorMaterial = 0.00;
  var valorPortas = 0.00;
  arrayValorPortas.forEach(function (index) {
    if(index.tipoPintura === 'porta'){
      console.log(index);
      valorMaoObra = index.maoObra;
      valorMaterial = index.valorMaterial;
    }
  });
  if (tipoMaterial==0){
    valorPortas = qtdPortas*valorMaoObra;
  }
  else{
    valorPortas = (qtdPortas*valorMaoObra) + ((Math.ceil(qtdPortas/4)*valorMaterial));
  }
  return valorPortas
}
function geraOrcamento() {
  const descontoDeVao = 0.85;
  var i=0;
  var valorOrcado = 0.00;
  var valorPortas = 0.00;
  var qtdPortas = 0;
  var custoPorMetro = 0;
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
      valorOrcado = valorOrcado+ (custoPorMetro*tamanhoComodo);
    }
    if(comodos[i].teto===true){
      custoPorMetro = capturaValor('teto',tipoMaterial);
      tamanhoComodo = capturaTamanho('teto',comodos[i].tipo,tamanhoImovel);
      valorOrcado = valorOrcado + (custoPorMetro*tamanhoComodo);
    }
    if(comodos[i].moldura===true){
      custoPorMetro = capturaValor('moldura',tipoMaterial);
      tamanhoComodo = capturaTamanho('moldura',comodos[i].tipo,tamanhoImovel);
      valorOrcado = valorOrcado + (custoPorMetro*tamanhoComodo);
    }
    if(comodos[i].rodape===true){
      custoPorMetro = capturaValor('rodape',tipoMaterial);
      tamanhoComodo = capturaTamanho('moldura',comodos[i].tipo,tamanhoImovel);
      valorOrcado = valorOrcado + (custoPorMetro*tamanhoComodo);
    }
  }
  if(qtdPortas>0){
    valorPortas = calculaValorPortas(qtdPortas, tipoMaterial);
    valorOrcado += valorPortas;
  }
  atualizaValorEstimado(valorOrcado);
  return valorOrcado
}
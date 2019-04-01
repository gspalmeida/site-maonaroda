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
        $('.view4').addClass('hide-section');
        $('.orcamentoEnviado').removeClass('hide-section');
    }
}
function mudaTipoPintura() {
    setTimeout(function () {
        if($('#btn-pinturaInterna').hasClass('active')){
            if($('#btn-pinturaExterna').hasClass('active')) {
                $('#calculadora').addClass('hide-section');
                $('#alerta').addClass('hide-section');
                $('.data').addClass('hide-section');
                $('.calculadora-controls').addClass('hide-section');
                $('#tamanhoImovel').addClass('hide-section');
                $('#orcamento-padrao').removeClass('hide-section');
            }
            else{
                $('#alerta').addClass('hide-section');
                $('#orcamento-padrao').addClass('hide-section');
                $('#calculadora').removeClass('hide-section');
                $('.data').removeClass('hide-section');
                $('.calculadora-controls').removeClass('hide-section');
                $('#tamanhoImovel').removeClass('hide-section');
            }
        }
        else{
            if($('#btn-pinturaExterna').hasClass('active')) {
                $('#calculadora').addClass('hide-section');
                $('#alerta').addClass('hide-section');
                $('.data').addClass('hide-section');
                $('.calculadora-controls').addClass('hide-section');
                $('#tamanhoImovel').addClass('hide-section');
                $('#orcamento-padrao').removeClass('hide-section');
            }
            else{
                $('#calculadora').addClass('hide-section');
                $('#orcamento-padrao').addClass('hide-section');
                $('#tamanhoImovel').addClass('hide-section');
                $('#alerta').removeClass('hide-section');
                $('.data').removeClass('hide-section');
                $('.calculadora-controls').removeClass('hide-section');
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
    }
    if(tipoImovel==='casa'){
        $('#tipoPintura').removeClass('hide-section');
        mudaTipoPintura();
    }
    if(tipoImovel==='escritorio'){
        $('#tipoPintura').addClass('hide-section');
        $('#calculadora').addClass('hide-section');
        $('.data').addClass('hide-section');
        $('#tamanhoImovel').addClass('hide-section');
        $('.calculadora-controls').addClass('hide-section');
        $('#orcamento-padrao').removeClass('hide-section');
    }
    if(tipoImovel==='outros'){
        $('#tipoPintura').addClass('hide-section');
        $('#calculadora').addClass('hide-section');
        $('.data').addClass('hide-section');
        $('#tamanhoImovel').addClass('hide-section');
        $('.calculadora-controls').addClass('hide-section');
        $('#orcamento-padrao').removeClass('hide-section');
    }
}
// Armazenamento dos Dados
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    function armazenaDados(keyName, value) {
      sessionStorage.setItem(keyName, value);
    }
  }else{
    alert('Seu Navegador não Suporta WebStorage, solicite o orçamento atravez de um formulário de contato, ou ligação');
  }
// Calculos
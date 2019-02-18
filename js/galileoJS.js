//Ativa as animações em dispositivos de tela grande
var largura = screen.width;
if( largura >= 768 ){
    // Animations init
    new WOW().init();
}
//Faz os includes
$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
        var file = $(this).data('include') + '.html';
        $(this).load(file);
    });

});
//Verifica se os includes foram adicionados
function checkInclude() {
    var checkInclude = document.getElementById('checkInclude');
    if(checkInclude){
        return true
    }
    else{
        return false
    }
}
//ScrolSpy da Navbar
$(document).ready(function scrollSpy() {
    if(checkInclude() === true){
        var pagina = window.location.pathname;
        var start = pagina.lastIndexOf("/");
        var stop = pagina.lastIndexOf(".");
        if(pagina.substr(start+1,stop-start-1)==='') {
            $(document).ready(function () {
                $('#navbar-index').addClass('active');
            });
        }else{
            $(document).ready( function () {
                $('#navbar-' + pagina.substr(start + 1, stop - start - 1)).addClass('active');
            });
        }
    }
    else {
        setTimeout(scrollSpy,1);
    }
});
//ScrollToTop Navbar
function scrollToTop() {
    $('body, html').animate({scrollTop: 0});
}
//Padding Para a Navbar nao Sobrepor o Conteudo
function setPadding() {
    if(checkInclude() === true){
        var navbarHeight = $("#navbar-wrapper").height();
        navbarHeight = navbarHeight + 10;
        $(".1stSection").css("padding-top",navbarHeight);
    }
    else {
        setTimeout(setPadding,1)
    }
}
$(document).ready(setPadding());
$(window).resize(function () {
    setPadding();
});
//Script para fazer o fadeOut e fadeIn dos slides
function trocaSlide(elementoQueSai, elementoQueEntra) {
    $(elementoQueSai).addClass('zoomOut animated');
    $(elementoQueSai).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
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
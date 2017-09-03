$(document).ready(function() {

    // MENU TOGGLE
    $('.menu-toggle__bars').click(function () {
        $(this).hide();
        $('.menu-toggle__exit').toggle();
        $('.menu').fadeToggle(200);
        $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    });

    $('.menu-toggle__exit').click(function () {
        $(this).hide();
        $('.menu-toggle__bars').toggle();
        $('.menu').fadeToggle(200);
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    });

    // CONNECT MENU
    $('.form-switch-create').click(function(){
      $('.form-register').fadeToggle(500);
      $('.form-login').hide();
    });

    $('.form-switch-login').click(function(){
      $('.form-login').fadeToggle(500);
      $('.form-register').hide();
    });

});
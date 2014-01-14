$( document ).ready(function() {

  ($('.nav--index-header-anchors')).click(function(){
    $('.nav--index-header-anchors').removeClass('active');
    $(this).addClass('active');

    $('.nav--index-header-anchors').each(function(){
        var href = $(this).prop('hash');
        $(href).hide();
    });

    var id = $(this).prop('hash');
    $(id).show();
  });

  ($('.ui-panel-inner a')).click(function(){
    var href = $(this).prop('hash');
    if (typeof attr !== 'undefined' && attr !== false) {
        // Just load page normally
    } 
    else {
      $( '#slidemenupanel' ).panel( 'close' );
      $('.nav--index-header-anchors').each(function(){
        var navHref = $(this).prop('hash');
        $(navHref).hide();
      });
      $(href).show();
      var active = $('.nav--index-header-anchors').find('a:contains(' + href + ')');
      $(active).addClass('active');
    }
  });

});
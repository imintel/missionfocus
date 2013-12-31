$( document ).ready(function() {

  ($('.nav--index-header-anchors')).click(function(){
    $('.nav--index-header-anchors').removeClass('active');
    $(this).addClass('active');

    $("[id$='-body']").hide();

    var id = $(this).attr('id') + '-body';
    console.log(id);
    $('#' + id).show();
  });

});
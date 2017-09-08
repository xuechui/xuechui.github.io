$(function(){

  $('#tab').on('click', function(){
    var header = $('#header');
    var margin = (header.css('margin-top') === '0px' ? 0-header.height()+5 : 0);
    header.animate({marginTop: margin}, 300);
  });
});

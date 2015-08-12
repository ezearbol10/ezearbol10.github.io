$(document).ready(function(){

  $('.nav-menu').on('click', function(){
      $(this).toggleClass('open-menu')
      $('.nav-menu-toggle').toggleClass('show-menu');

  });

  $('.arrow-down').on('click', function(){
    $(window).scroll

  });

});

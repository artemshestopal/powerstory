;
jQuery(function($) { 
  
$(document).ready(function () {
  console.log('it works');
  $('.header__burger-button').on('click', function () {
    $('.mobile-menu').toggleClass('menu-opened');
  })
});
  $(document).ready(function () {   
    $('.header__burger-button').on('click', function(){
      $('.header__burger-button').toggleClass('menu-opened');
    })
  });
  $(document).ready(function () {
    $('.header__burger-button').on('click', function(){
      $('body').toggleClass('no-scroll');
    })
  });
});
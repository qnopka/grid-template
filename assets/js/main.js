$(document).ready(function(){
  $('.header-navbar__btn').on('click', function(){
    $(this).toggleClass('header-navbar__btn--active');
    $('.header-navbar__list').stop(true, true).fadeToggle(500);
  });
});

let $window = $(window);

$window.resize(function() {
  if ($window.width() > 768) {
    $('.header-navbar__list').removeAttr('style')
    $('.header-navbar__btn').removeClass('header-navbar__btn--active');
  }
})
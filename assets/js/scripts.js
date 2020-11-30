$(document).ready(function () {
  $(".bars-item-3").click(function () {
    $(this).toggleClass("open");
    $(".menu-area").slideToggle(500);
  });
  // Menu Socail
  $('.social-icon li a').on( "click", function(){
    $('.social').toggleClass('active');
  });
  // Magnafic Popup
  $(".page-zoom").magnificPopup({
    gallery: {
      enabled: true,
    },
    type: "image",
  });
  $(".counter-up").counterUp({
    delay: 10,
    time: 1000,
  });
  $(".test-content").owlCarousel({
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    items: 1,
  });
  // Menu Scroll 
  $('.btn, .arrow a, .main-menu li a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 20 
    }, 1000, 'easeInOutQuart');
    event.preventDefault();
  });
});
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 400) {
    $('#header').addClass("sticky");
  } else {
    $('#header').removeClass("sticky");
  }
});
$(document).ready(function () {

  var navBar = $('#main-navbar').outerHeight();

  $('.slide-section').click(function(event) {

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - navBar

    }, 800);

    event.preventDefault();
  });

  wow = new WOW({
    boxClass: "wow", 
    animateClass: "animated",
    offset: 0, 
    mobile: true, 
    live: true
  });

  new WOW().init();
});
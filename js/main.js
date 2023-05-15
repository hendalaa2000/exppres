$ (function () {

    'use strict';

    // adjust header height 

    $('.logistic-home').height($(window).height());
    $(window).resize(function () {
        $('.logistic-home').height($(window).height());

        $('.logistic-contenr').each(function(){
            $(this).css('paddingTop',($(window).height() - $('.logistic-home').height())/2);
        });
    });

    $('.logistic-home').each(function(){
        $(this).css('paddingTop',($(window).height() - $('.logistic-content').height())/2);
    });
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  // Scroll Up
  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
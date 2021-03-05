$(document).ready(function(){
    $(".carousel-3").owlCarousel({
        items: 4,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        loop: true,
        responsive: {
            250: {
                items: 1
            }, 
            576: {
                items: 2
            }, 
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        loop: true, 
    });



    
});







// Dropdown Slide on click
let screen = window.matchMedia("(min-width: 270px)");

if (screen.matches) {
    // Add slideDown animation to dropdown
$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  
  // Add slideUp animation to dropdown
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
}





// Dropdown Hover


screen = window.matchMedia("(min-width: 992px)");

if (screen.matches) {

    $(".dropdown-menu-1").hide();
    $(".dropdown-menu-2").hide();


    $(".dropdown-1").hover(function(){
        $(".dropdown-menu-1").toggle();
    });

    $(".dropdown-2").hover(function(){
        $(".dropdown-menu-2").toggle();
    });


}
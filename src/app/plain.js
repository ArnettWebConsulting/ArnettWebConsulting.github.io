
$( window ).scroll(function() {    
// get the amount the window has scrolled
var scroll = $(window).scrollTop();
// add the animation class based on a certain amount of scroll
if (scroll >= 200) {
    $("#what-we-do").removeClass("hidden").addClass("animated fadeInUp");
    $("#html").removeClass("hidden").addClass("animated fadeInUp");
    $("#angular").removeClass("hidden").addClass("animated fadeInUp delay-half");
    $("#ionic").removeClass("hidden").addClass("animated fadeInUp delay-one");  
}
    
});

$(function() {
    var slides = $("#macslideshow > li"),
        currentSlide = 0;
        N = 5;//interval in seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        slides.removeClass('active').eq(currentSlide).addClass('active');
    }, N * 1000);
});
   
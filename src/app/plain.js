
    $( window ).scroll(function() {    
    // get the amount the window has scrolled
    var scroll = $(window).scrollTop();
    // add the 'active' class to the correct li based on the scroll amount
    if (scroll >= 200) {
        $("#html").removeClass("hidden").addClass("animated fadeInUp");
        $("#angular").removeClass("hidden").addClass("animated fadeInUp delay-half");
        $("#ionic").removeClass("hidden").addClass("animated fadeInUp delay-one");
        $("#what-we-do").removeClass("hidden").addClass("animated fadeInUp");
    }
    
});
   
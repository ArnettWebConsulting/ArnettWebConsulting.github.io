$(window).scroll(function() {    
    // get the amount the window has scrolled
    var scroll = $(window).scrollTop();
    // add the 'active' class to the correct li based on the scroll amount
    if (scroll <= 500) {
        $("#html").addClass("animated fadeInLeft");
    }
    else if (scroll <= 1000) {
        $("#angular").addClass("animated bounceInDown");
        $("#ionic").addClass("animated fadeInRight");
    }
};
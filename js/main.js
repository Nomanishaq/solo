// Loader effect
$(window).on('load', function () {
    $('#status').fadeOut(1150);
    $('#loader').fadeOut(1350);
});
// Team
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>' ,'<i class="fas fa-chevron-right"></i>']
    });
});

// Progress bar

$(function () {
  $('#progress-element').waypoint(function () {
    $('.progress-bar').each(function () {
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        });
    }); 
    this.destroy();
  },
  {
    offset: 'bottom-in-view'
});
});

//Responsive Tabs
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
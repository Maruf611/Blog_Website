$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollpse = $('.toggle-collapse');

    $toggleCollpse.click(function() {
        $nav.toggleClass('collapse');
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000
    });

})
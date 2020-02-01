/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
$(document).ready(function () {
    new WOW().init();

    $(".select-name").click(function () {
        // $(this).parent().find('.select-list').fadeToggle();
        $(this).parent().find('.select-list').toggleClass('flex');
        $('.select-name').not($(this)).parent().find('.select-list').removeClass('flex');
    });


    $(".select-list ul li").click(function () {
        $('.select-list').removeClass('flex');
    });

    $(".region-group .send-btn").click(function () {
        $('.home .regions').fadeOut(0);
        $('.home .map-outer').fadeIn(0);
    });

    $(".region-select-list .send-btn").click(function () {
        $('.home .regions').fadeIn(0);
        $('.home .map-outer').fadeOut(0);
    });

    $(".search").click(function () {
        $('.search-popup').slideDown();
    });

    $(".close").click(function () {
        $('.search-popup').slideUp();
    });

    $(window).scroll(function () {
        if (this.window.outerWidth > 991 && $('.mt-80').length === 0) {
            var pos = $(this).scrollTop();
            var isFixed = $('.nav-wrapper').hasClass('fix-menu');
            if (isFixed) {
                if (pos <= 200) {
                    $('.nav-wrapper').removeClass('fix-menu');
                }
            } else {
                if (pos > 200) {
                    $('.nav-wrapper').addClass('fix-menu');
                }
            }
        }
    });

    // $( ".arrows .prev" ).click(function() {

    // });
    // $( ".arrows .next" ).click(function() {
    // });

    $('.one-slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<img src="assets/img/slider-prev-arrow.svg">', '<img src="assets/img/slider-next-arrow.svg">'],
        dots: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    })

    $('.service-slide').owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        nav: true,
        navText: ['<img src="assets/img/slider-prev-arrow.svg">', '<img src="assets/img/slider-next-arrow.svg">'],
        dots: false,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true
    })
});
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

    $(".trigger-menu").click(function () {
        $('.trigger-menu img:first-child').toggleClass('active');
        $('.trigger-menu img:last-child').toggleClass('active');
        $('.menu-wrapper-for-mobile').toggleClass('opened');
    });



    $(window).scroll(function () {
        console.log();

        if (this.window.innerWidth > 991 && $('.mt-80').length === 0) {
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

    $('.one-slide').owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        nav: true,
        navText: ['<img src="assets/img/slider-prev-arrow.svg">', '<img src="assets/img/slider-next-arrow.svg">'],
        dots: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    })

    
        // $('.service-slide').owlCarousel({
            // items: 1,
            // loop: true,
            // nav: true,
            // margin: 1,
            // navText: ['<img src="assets/img/slider-prev-arrow.svg">', '<img src="assets/img/slider-next-arrow.svg">'],
            // dots: false,
        // })

        function postsCarousel() {
            var checkWidth = $(window).width();
            var owlPost = $(".service-slide");
            if (checkWidth <= 823) {
                if(typeof owlPost.data('owl.carousel') != 'undefined'){
                    owlPost.data('owl.carousel').destroy(); 
                }
                owlPost.removeClass('owl-carousel');
            } else if (checkWidth > 823) {
                owlPost.addClass('owl-carousel');
                owlPost.owlCarousel({
                    items: 1,
                    loop: true,
                    nav: true,
                    margin: 1,
                    navText: ['<img src="assets/img/slider-prev-arrow.svg">', '<img src="assets/img/slider-next-arrow.svg">'],
                    dots: false,
                });
            }
        }

        postsCarousel();
        // $(window).resize(postsCarousel);

        window.onresize = function (event) {
            $('.menu-for-mobile').addClass('fix-menu');
            // postsCarousel()
        };
});
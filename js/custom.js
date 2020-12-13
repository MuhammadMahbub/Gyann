$(document).ready(function() {

    // banner part slider
    $('#banner').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ('<i class="fas fa-chevron-left prev"></i>'),
        nextArrow: ('<i class="fas fa-chevron-right next"></i>'),
    });

    // about part slider
    $('.bottom_bar').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });

    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // scrolling
    $(window).scroll(function() {
        let scrl = $(this).scrollTop();
        if (scrl > 100) {
            $("#menu").addClass("menubg");
        } else {
            $("#menu").removeClass("menubg");
        }
    });


    // course part slider
    $('.course_slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: ('<i class="fas fa-chevron-left prev"></i>'),
        nextArrow: ('<i class="fas fa-chevron-right next"></i>'),
        centerMode: true,
        centerPadding: false,

        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    // FAQ part slider

    $('.FAQ_slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ('<i class="fas fa-chevron-left prev"></i>'),
        nextArrow: ('<i class="fas fa-chevron-right next"></i>'),
        centerMode: true,
        centerPadding: false,


    });

    // teacher part slider
    $('.teacher_slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    });


    // back to top part
    $(".backToTop").click(function() {
        $("html").animate({ scrollTop: 0 }, slidesToShow);
    });

    $(window).scroll(function() {
        let scrl = $(this).scrollTop();
        if (scrl > 100) {
            $(".backToTop").fadeIn();
        } else {
            $(".backToTop").fadeOut();
        }
    });
    $(window).on("load", function() {
        $(".backToTop").hide();
    });

});
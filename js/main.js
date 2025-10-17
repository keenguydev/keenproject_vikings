$(function() {

    $('.menu-btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            showinfo: 0
        }
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });

});
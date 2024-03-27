$(document).ready(function () {
    $('.js-nav-toggle').on('click', function () {
        $(this).toggleClass('is-active');

        $(this).closest('.js-nav-header').toggleClass('is-active');
        $('body').toggleClass('overflow-hidden');
    });

    const swiperIntro = new Swiper('#swiperIntro', {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        loop: true,
        speed: 1500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        },
        watchSlidesProgress: true,
    });

    const swiperBusiness = new Swiper('#swiperBusiness', {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        loop: false,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 0,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        },
        watchSlidesProgress: true,
    });

    const swiperStudy = new Swiper('#swiperStudy', {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        loop: false,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 0,
        centeredSlides: false,
        navigation: false,
        pagination: false,
        watchSlidesProgress: true,
    });

    const swiperNews = new Swiper('#swiperNews', {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        loop: false,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 0,
        centeredSlides: false,
        navigation: false,
        pagination: false,
        watchSlidesProgress: true,
    });

    $(document).on('click', 'a[href^="#"]:not(.socials-link)', function (e) {
        e.preventDefault();

        $('.js-nav-toggle').removeClass('is-active');
        $('.js-nav-toggle').closest('.js-nav-header').removeClass('is-active');
        $('body').removeClass('overflow-hidden');

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
});

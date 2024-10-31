$(function () {

    const main_banner_slide = new Swiper('.banner_slide01', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    const sec03_slide = new Swiper('.sec03_slide', {
        loop: true,
        slidesPerView: 4,
        speed: 3000,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
    });
    const main_banner_slide02 = new Swiper('.banner_slide02', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 7.7,
        speed: 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    })
    const sec05_slide = new Swiper('.sec05_slide', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 2.7,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    })
    const sec06_slide = new Swiper('.sec06_slide', {
        loop: true,

        slidesPerView: 1,
        effect: 'fade',
        speed: 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    })
    const sec06_back_slide = new Swiper('.sec06_back_slide', {
        loop: true,

        slidesPerView: 6.5,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    })
    const sec06_txt_slide = new Swiper('.txt_slide', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView: 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    })


})

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
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 3000,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1024: {
                slidesPerView: 3,

            },
        },
    });
    const main_banner_slide02 = new Swiper('.banner_slide02', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 5.7,
        spaceBetween: 10,
        speed: 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 7.7,
            },
        },
    })
    const sec05_slide = new Swiper('.sec05_slide', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 3000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2.7,
            },
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

    $('.sec10 .tab_btn_box button').on('click', function () {
        let idx = $(this).parent().index();
        $('.table_inner table')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')


        $(this).parent().addClass('on').siblings().removeClass('on')
    })


    // $(".agg").click(function () {
    //     $(".agree_pop").css("display", "block");
    // });

    // $(".pop-esc").click(function () {
    //     $(".agree_pop").css("display", "none");
    // });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        var windowWidth = $(this).width();
        if (windowWidth <= 1024) {
            if (sct > 1) {
                $('.sec02_txt_box01').addClass('animate__animated animate__flipInY').css({ opacity: 1 })
            } else {
                $('.sec02_txt_box01').removeClass('animate__animated animate__flipInY').css({ opacity: 0 })
            }
            if (sct > 1000) {
                $('.fixed_bar').addClass('on')
            } else {
                $('.fixed_bar').removeClass('on')
            }
            if (sct > 500) {
                $('.sec03 .sec03_txt_box').addClass('animate__animated animate__flipInX').css({ opacity: 1 })
            } else {
                $('.sec03 .sec03_txt_box').removeClass('animate__animated animate__flipInX').css({ opacity: 0 })
            }
            if (sct > 1500) {
                $('.sec05 .inner').addClass('animate__animated animate__flipInY').css({ opacity: 1 })
            } else {
                $('.sec05 .inner').removeClass('animate__animated animate__flipInY').css({ opacity: 0 })
            }
            if (sct > 1800) {
                $('.sec06 .inner').addClass('animate__animated animate__flipInY').css({ opacity: 1 })
            } else {
                $('.sec06 .inner').removeClass('animate__animated animate__flipInY').css({ opacity: 0 })
            }
            if (sct > 2500) {
                $('.inner_itv .left').addClass('animate__animated animate__flipInY').css({ opacity: 1 })
            } else {
                $('.inner_itv .left').removeClass('animate__animated animate__flipInY').css({ opacity: 0 })
            }
            if (sct > 3700) {
                $('.sec07 .inner .left').addClass('animate__animated animate__lightSpeedInLeft').css({ opacity: 1 })
            } else {
                $('.sec07 .inner .left').removeClass('animate__animated animate__lightSpeedInLeft').css({ opacity: 0 })
            }
            if (sct > 4100) {
                $('.sec08 .top').addClass('animate__animated animate__flipInY').css({ opacity: 1 })
            } else {
                $('.sec08 .top').removeClass('animate__animated animate__flipInY').css({ opacity: 0 })
            }
            if (sct > 4600) {
                $('.sec09 .top').addClass('animate__animated animate__fadeInDown').css({ opacity: 1 })
            } else {
                $('.sec09 .top').removeClass('animate__animated animate__fadeInDown').css({ opacity: 0 })
            }
            if (sct > 4700) {
                $('.sec09 .bottom').addClass('animate__animated animate__flipInY').css({ opacity: 1 })
            } else {
                $('.sec09 .bottom').removeClass('animate__animated animate__flipInY').css({ opacity: 0 })
            }
        }

        else {
            if (sct > 900) {
                $('.sec02_txt_box01').addClass('animate__animated animate__flipInY')
            } else {
                $('.sec02_txt_box01').removeClass('animate__animated animate__flipInY')
            }
            if (sct > 1500) {
                $('.fixed_bar').addClass('on')
            } else {
                $('.fixed_bar').removeClass('on')
            }
            if (sct > 2000) {
                $('.sec03 .sec03_txt_box').addClass('animate__animated animate__flipInX').css({ opacity: 1 })
            } else {
                $('.sec03 .sec03_txt_box').removeClass('animate__animated animate__flipInX').css({ opacity: 0 })
            }
            if (sct > 3300) {
                $('.sec04_img_box').addClass('animate__animated animate__flipInX')
            } else {
                $('.sec04_img_box').removeClass('animate__animated animate__flipInX')
            }
            if (sct > 4300) {
                $('.sec05 .inner').addClass('animate__animated animate__flipInY')
            } else {
                $('.sec05 .inner').removeClass('animate__animated animate__flipInY')
            }
            if (sct > 5800) {
                $('.sec06 .inner').addClass('animate__animated animate__flipInY')
            } else {
                $('.sec06 .inner').removeClass('animate__animated animate__flipInY')
            }
            if (sct > 7300) {
                $('.inner_itv .left').addClass('animate__animated animate__flipInY')
            } else {
                $('.inner_itv .left').removeClass('animate__animated animate__flipInY')
            }
            if (sct > 8100) {
                $('.sec07 .inner .left').addClass('animate__animated animate__lightSpeedInLeft')
            } else {
                $('.sec07 .inner .left').removeClass('animate__animated animate__lightSpeedInLeft')
            }
            if (sct > 9150) {
                $('.sec08 .top').addClass('animate__animated animate__flipInY')
            } else {
                $('.sec08 .top').removeClass('animate__animated animate__flipInY')
            }
            if (sct > 10000) {
                $('.sec09 .top').addClass('animate__animated animate__fadeInDown')
            } else {
                $('.sec09 .top').removeClass('animate__animated animate__fadeInDown')
            }
            if (sct > 10700) {
                $('.sec09 .bottom').addClass('animate__animated animate__flipInY')
            } else {
                $('.sec09 .bottom').removeClass('animate__animated animate__flipInY')
            }
        }


    })

    $('.aniview').AniView({
        animateClass: 'animate__animated'
    });

    AOS.init();
})

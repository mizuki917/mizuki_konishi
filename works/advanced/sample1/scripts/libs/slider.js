const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCursor: true,
    // effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 1.5,
    speed: 1000,
    spaceBetween: 60,
    breakpoints: {
        658: {
            slidesPerView: 3.8,
        },
        768: {
            slidesPerView: 3.8,
        },
        1350: {
            slidesPerView: 3.6,
        }
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    loopAdditionalSlides: 1
  });
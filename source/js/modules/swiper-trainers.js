const initSwiperTrainers = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line no-new
    new Swiper('.trainers__swiper-slides', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      loop: true,

      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
      initialSlide: 0,



      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },

        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40,
          initialSlide: 0,
        },
      },
    });
  }

};

export {initSwiperTrainers};

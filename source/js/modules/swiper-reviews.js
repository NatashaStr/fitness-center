const initSwiperReviews = (swiper) => {
  if (swiper) {

    new Swiper('#swiperReviews', {
      navigation: {
        nextEl: '.reviews__button--next.swiper-button-next',
        prevEl: '.reviews__button--prev.swiper-button-prev',
      },

      loop: false,

      initialSlide: 0,
    });
  }
};

export {initSwiperReviews};

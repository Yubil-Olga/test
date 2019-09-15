var swiper = new Swiper(".reviews .swiper-container", {
      direction: 'horizontal',
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 1000,
    breakpoints: {
      1400: {
      slidesPerView: 2
    },
        1100: {
      slidesPerView: 1
    }
  },
      pagination: {
      el: '.reviews .swiper-pagination',
      clickable: true
    }
    });
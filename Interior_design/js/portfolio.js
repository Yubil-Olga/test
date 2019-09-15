    var swiper = new Swiper(".portfolio .swiper-container", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      breakpoints: {
    // when window width is <= 320px
    1100: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  },
      centeredSlides: true,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: '.portfolio .swiper-button-next',
        prevEl: '.portfolio .swiper-button-prev',
      },
    });
    
    document.querySelector(".portfolio .plus").addEventListener("click", fullWidth);
    document.querySelector(".portfolio .swiper-button-next").addEventListener("click", hideWidth);
    document.querySelector(".portfolio .swiper-button-prev").addEventListener("click", hideWidth);
    function fullWidth(){
      hideWidth();
      document.querySelector(".portfolio .swiper-container").classList.add("full-width");
    }
    function hideWidth() {
      if(document.querySelector(".portfolio .full-width")){
          document.querySelector(".portfolio .full-width").classList.remove("full-width");
      }
    }
    window.onresize = function(){
    hideWidth();
  }

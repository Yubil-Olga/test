var swiper = new Swiper('.gallery-1 .swiper-container', {
   		 	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
   		 });
		var mySwiper = new Swiper('.gallery-2 .swiper-container', {
	  initialSlide: 1,
	  slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      effect: 'coverflow',
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows : true,
      },
      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
      breakpoints: {
      	800: {
      		slidesPerView: 3
      	}
      },
    });
	
    mySwiper.on('doubleTap', function () {
    	this.$el[0].parentNode.classList.add("gallery_modal");
    	document.body.style.overflow = "hidden";
    	mySwiper.activeIndex = mySwiper.clickedIndex;
    	mySwiper.params.slidesPerView = 1;
    	mySwiper.params.breakpoints={};
    	mySwiper.update();
    	
});

    document.querySelector("#close").addEventListener("click", function(){
   	document.querySelector(".gallery_modal").classList.remove("gallery_modal");
   	document.body.style.overflow = "unset";
   	if (document.documentElement.clientWidth>800){
   		mySwiper.params.slidesPerView = 3
   	}
   	else {
   		mySwiper.params.slidesPerView = 1
   	}
   	mySwiper.params.breakpoints={
   		800: {
      		slidesPerView: 3
      	}
   	};
   	mySwiper.update();
   	})
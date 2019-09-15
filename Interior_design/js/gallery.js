var mySwiper = new Swiper ('header .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    //effect: "fade",
    // If we need pagination
    pagination: {
      el: 'header .swiper-pagination',
      clickable: true
    }
  })
/**************************LOGO***************************/
var logoX = document.querySelector(".navigation img").src;
var logoY = document.querySelector(".navigation img").dataset.src;
if(document.body.clientWidth<=768){
    document.querySelector(".navigation img").src = logoY;
  }
window.onresize = function(){
	if(document.body.clientWidth<=768){
		document.querySelector(".navigation img").src = logoY;
	}
	else document.querySelector(".navigation img").src = logoX;
}
document.querySelector("nav h3").addEventListener("click", function(){
			if(document.querySelector(".hide")){
				if(document.documentElement.clientWidth<700){
					showMenuMobile("normal")
				}
    	hamburger("normal");
    	showMenu("normal");
    	document.querySelector(".hide").classList.remove("hide");
  }
  else {
  	if(document.documentElement.clientWidth<700){
					showMenuMobile("reverse")
				}
    hamburger("reverse");
    showMenu("reverse");
    document.querySelector("svg").classList.add("hide");
  }
		})
		function hamburger(direction){
    anime.timeline({
      easing: 'easeInOutQuad',
      duration: 600,
      direction: direction,
    })
    .add({targets: "#top", points: ["0,8 15,8 30,8","5,5 15,15 25,5"]},0)
    .add({targets: "#middle",points: ["0,15 15,15 30,15","15,15 15,15 15,15"]},0)
    .add({targets: "#bottom", points: ["0,22 15,22 30,22","5,25 15,15 25,25"]},0)
 }
 function showMenuMobile(direction){
 	anime({
  	targets: ".navigation",
  	height: [0, 120],
  	duration: 1500,
  	direction: direction,
  	easing: 'easeOutBack'
  })
 }
 function showMenu(direction){
    anime({
      targets: "nav li",
      duration: 1000,
      easing: "linear",
      delay: anime.stagger(300, {from: "last"}),
      translateX: ["-100vw", 0],
      direction: direction
  })
 }
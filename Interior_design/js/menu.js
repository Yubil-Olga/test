(function () {
  var hamburger = {
    navToggle: document.querySelector("nav"),
    nav: document.querySelector("nav ul"),
    
    doToggle: function(e) {
      this.navToggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    }
  };
  
  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e);} )
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e);} )
} ());


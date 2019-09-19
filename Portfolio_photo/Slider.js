// МОДАЛЬНЫЕ ОКНА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var content = document.getElementsByClassName("modal-content");

var wrapper = document.getElementsByClassName("wrapper");
var pictures = wrapper[0].getElementsByTagName("img");
var num=0;
var modal = document.getElementById("myModal");
var photo = content[0].children[1];
var text = content[0].children[2];
var describe = document.getElementById("describe");

for (var i=0; i<pictures.length; i++) {
    pictures[i].addEventListener("click", show);  
}


function show() {
for (var i=0; i<pictures.length; i++) {
    if (this == pictures[i]) {
        num=i;
    }
}    
        modal.style.display="block";
        photo.src = pictures[num].src; 
        photo.style.opacity = "1";
        photo.classList.add("slide-show");
    
        var newDescribe = pictures[num].parentNode.lastChild;
        describe.firstElementChild.textContent = newDescribe.firstElementChild.textContent;
        describe.children[1].textContent = newDescribe.lastChild.textContent;
        describe.style.display = "block";
        
        var counter = num+1;
        describe.lastElementChild.textContent = counter +" из " + pictures.length;

   //console.log(describe.children[2]);
}

function next() {
  num++;
  if ( num >= pictures.length ) {
    num = 0;
  }
  photo.src = pictures[num].src;
  var newDescribe = pictures[num].parentNode.lastChild;
  describe.firstElementChild.textContent = newDescribe.firstElementChild.textContent;
  describe.children[1].textContent = newDescribe.lastChild.textContent;
  var counter = num+1;
  describe.lastElementChild.textContent = counter +" из " + pictures.length;
}

function prev() {
  num--;
  if ( num < 0 ) {
    num = pictures.length-1;
  }
  photo.src = pictures[num].src;
  var newDescribe = pictures[num].parentNode.lastChild;
  describe.firstElementChild.textContent = newDescribe.firstElementChild.textContent;
  describe.children[1].textContent = newDescribe.lastChild.textContent;
  var counter = num+1;
  describe.lastElementChild.textContent = counter +" из " + pictures.length;
}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// SCROLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


var menu = document.getElementsByClassName("menu");
var homeBorder = menu[0].getElementsByTagName("a")[0]; 
homeBorder.classList.add("border");

document.onscroll = function() {

var home = document.getElementById("home");
var homeY = home.getBoundingClientRect().y;    
var service = document.getElementById("services"); 
var serviceY = service.getBoundingClientRect().y;
var features = document.getElementById("features");
var featuresY = features.getBoundingClientRect().y;
var portfolio = document.getElementById("portfolio");
var portfolioY = portfolio.getBoundingClientRect().y;
var contact = document.getElementById("contacts");
var contactY = contact.getBoundingClientRect().y;
     
var serviceBorder = menu[0].getElementsByTagName("a")[1];
var featuresBorder = menu[0].getElementsByTagName("a")[2];
var portfolioBorder = menu[0].getElementsByTagName("a")[3];
var contactBorder = menu[0].getElementsByTagName("a")[4];    
    
function removeAll() {
    homeBorder.classList.remove("border"); 
    serviceBorder.classList.remove("border"); 
    featuresBorder.classList.remove("border");  
    portfolioBorder.classList.remove("border");  
    contactBorder.classList.remove("border"); 
}  
    
if (homeY>-200) {
    removeAll();   
    homeBorder.classList.add("border");
}

if (serviceY>0 && serviceY<350) {
    removeAll();
    serviceBorder.classList.add("border");
}

if (featuresY>0 && featuresY<350) {
    removeAll();
    featuresBorder.classList.add("border");
}

if (portfolioY>0 && portfolioY<300) {
    removeAll();
    portfolioBorder.classList.add("border");
}
if (contactY>0 && contactY<350) {
    removeAll();
    contactBorder.classList.add("border");
}
}















































































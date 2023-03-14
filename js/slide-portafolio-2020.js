// <!-- Script slide portafolio 2020 -->

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("circulos-slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    //dots[i].className = dots[i].className.replace(" w3-white", "");
    dots[i].className = dots[i].className.replace(" activo", "");
  }
  /*x[slideIndex-1].style.display = "block"; */
  x[slideIndex-1].style.display = "flex";  /*Cambio nuevo*/ 
  /*x[slideIndex-1].style.transition= "1s";*/
  dots[slideIndex-1].className += " activo";
}

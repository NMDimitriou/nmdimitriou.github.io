// Open the modal


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* document.querySelector('span#open_menu').addEventListener('click', openNav)*/
/* document.querySelector('.closebtn').addEventListener('click', closeNav) */
/* document.querySelector('#main').addEventListener('click', closeNav) */


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (slides.length == 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides[slideIndex-1]) {
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
  }
}



document.addEventListener("DOMContentLoaded", function() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});

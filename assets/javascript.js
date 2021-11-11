/* -------------------------------------- Home page -------------------------------------- */
// Menu on pc
var elementClick = document.querySelector('.list__link--click');
var submenuClick = document.querySelector('.submenu--click');
var elementHome = document.querySelector('.list__link-home');
var layerOpacity = document.querySelector('.layer-opacity');
elementClick.onclick = function(e) {
    e.preventDefault();
    e.target.classList.toggle('active');
    submenuClick.classList.toggle('rotate3d');
    elementHome.classList.toggle('active');
    elementHome.classList.toggle('unactive');
    layerOpacity.classList.toggle('block');
}

layerOpacity.onclick = function(e) {
    e.target.classList.remove('block');
    submenuClick.classList.toggle('rotate3d');
    elementClick.classList.toggle('active');
    elementHome.classList.toggle('active');
    elementHome.classList.toggle('unactive');
}

// Search Mobile
var btnSearch = document.querySelector('.nav-search');
var formSearch = document.querySelector('.nav-search-control');
var btnCloseSearch = document.querySelector('.nav-search__close');
btnSearch.onclick = function(e) {
    e.target.closest('.nav-search').classList.add('active');
    formSearch.classList.add('rotate3d');
}

btnCloseSearch.onclick = function(e) {
    formSearch.classList.remove('rotate3d');
    btnSearch.classList.remove('active');
}

// Show Menu Mobile
var btnShowMenu = document.querySelector('.nav-btn');
var mobileMenu = document.querySelector('.mobile-menu');
btnShowMenu.onclick = function() {
    mobileMenu.classList.toggle('rotate3d');
    // tro ve dau trang web
    window.scrollTo(0, 0);
}

// Slide Show 
var indexSlide = 0;
const mySlides = document.querySelectorAll('.slide-link');
const dots = document.querySelectorAll('.slide-title__text');
slideShow();


function slideShow() {
    var i;
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none';
    }
    indexSlide++;
    if (indexSlide > mySlides.length) {
        indexSlide = 1;
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active--slide", "");
    }
    mySlides[indexSlide - 1].style.display = 'block';
    dots[indexSlide - 1].className += " active--slide";
    setTimeout(slideShow, 8000);
}

function plusSlide(position) {
    indexSlide += position;
    if (indexSlide > mySlides.length) {
        indexSlide = 1;
    }
    if (indexSlide < 1) {
        indexSlide = mySlides.length;
    }
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active--slide", "");
    }
    mySlides[indexSlide - 1].style.display = 'block';
    dots[indexSlide - 1].className += " active--slide";
}

function currentSlide(position) {
    if (position > mySlides.length) {
        position = 1;
    }
    if (position < 1) {
        position = mySlides.length;
    }
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active--slide", "");
    }
    mySlides[position - 1].style.display = 'block';
    dots[position - 1].className += " active--slide";
}
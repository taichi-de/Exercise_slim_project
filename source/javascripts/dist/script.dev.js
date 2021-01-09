"use strict";

// nav-hamburger open/close
var btn = document.querySelector('.navbar-toggler');
var nav = document.querySelector('nav');
btn.addEventListener('click', function () {
  nav.classList.toggle('open-menu');
});
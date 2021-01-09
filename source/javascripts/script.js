// nav-hamburger open/close
const btn = document.querySelector('.navbar-toggler');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
});


const toggleBtnEl = document.querySelector(".navbar__toogleBtn");
const menuEl = document.querySelector('.navbar__menu');
const navbarEl = document.querySelector('.navbar');

toggleBtnEl.addEventListener('click', () => {
  menuEl.classList.toggle('active')
})
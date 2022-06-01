
const toggleBtnEl = document.querySelector(".navbar__toogleBtn");
const menuEl = document.querySelector('.navbar__menu');
const navbarEl = document.querySelector('.navbar');

toggleBtnEl.addEventListener('click', () => {
  menuEl.classList.toggle('active')
})

new Swiper('.experience .swiper-container', {
  slidesPerView: 1,
  //spaceBetween: 10,
  //centeredSlides: true,
  loop: true,
  autoplay: {
      delay: 3000
  }
})



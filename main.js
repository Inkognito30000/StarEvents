"use strict";

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const buttons = Array.from(document.querySelectorAll('.box-wrapper'));
const contents = document.querySelectorAll('.box-content');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('hidden')
    button.lastElementChild.classList.toggle('active'); 
  })
})


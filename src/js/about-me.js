import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export const accordionAboutMe = new Accordion('.accordion-container_about', {
  duration: 500,
  openOnInit: [0],
  elementClass: 'acc',
  triggerClass: 'acc-trigger',
  panelClass: 'acc-panel',
});
//====================================================================


import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const swiperAboutMe = new Swiper('.swiper_about', {
  // wrapperClass: 'swiper_about-wrapper',
  // slideClass: 'swiper_about-slide',
  // // Optional parameter
  // slidesPerView: 3,
  // // If we need pagination
  // direction: 'horizontal',
  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper_about-next',
  //   prevEl: '.swiper_about-prev',
  // },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  //   pageUpDown: true,
  // },
    // Optional parameters
    speed: 500,
    spaceBetween: 5,
    grabCursor: true,
    allowTouchMove: true,
    direction: 'horizontal',
    watchOverflow: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     },
      keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
});

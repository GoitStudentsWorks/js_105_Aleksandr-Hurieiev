import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export const accordionAboutMe = new Accordion('.accordion-container_about', {
  duration: 500,
  openOnInit: [0],
  elementClass: 'acc',
  triggerClass: 'acc-trigger',
  panelClass: 'acc-panel',
});


import Swiper from 'swiper';
import 'swiper/css/bundle';

import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

export const swiperAboutMe = new Swiper('.swiper_about', {
  wrapperClass: '.swiper_about-wrapper',
  slideClass: '.swiper_about-slide',
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  direction: 'horizontal',
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

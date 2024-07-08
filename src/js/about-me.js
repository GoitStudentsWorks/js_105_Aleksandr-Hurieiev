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
  slidesPerView: 2,
  loop: true,
    navigation: {
      nextEl: '.swiper_about-next',
      prevEl: '.swiper_about-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
});

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
    speed: 400,
    spaceBetween: 0,
    loop: true,
    setWrapperSize: true,
    
  breakpoints: {
    1440: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
  },
  navigation: {
      nextEl: '.swiper_about-next',
      prevEl: '.swiper_about-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  on: {
      init: function () {
        document.querySelector('.swiper_about-slide').style.backgroundColor =
          '#ed3b44';
      },
      slideChange: function () {
        const previousSlide = this.slides[this.previousIndex];
        const activeSlide = this.slides[this.activeIndex];
        previousSlide.style.background = '';
        activeSlide.style.backgroundColor = '#ed3b44';
      },
    },
});


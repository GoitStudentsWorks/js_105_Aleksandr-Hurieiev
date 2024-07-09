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

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.swiper_about-slide');
  const swiperWrapper = document.querySelector('.swiper_about-wrapper');
  
  slides.forEach(slide => swiperWrapper.append(slide.cloneNode(true)));

  const swiperAboutMe = new Swiper('.swiper_about', {
    slidesPerView: 2,
    speed: 400,
    width: 1200,
    loop: true,
    setWrapperSize: true,
    breakpoints: {
      768: { slidesPerView: 3 },
      1440: { slidesPerView: 6 }
    },
    navigation: { nextEl: '.swiper_about-next' },
    keyboard: { enabled: true, onlyInViewport: true },
    on: {
      init: function () {
        this.slides[this.activeIndex].style.backgroundColor = '#ed3b44';
      },
      slideChange: function () {
        this.slides.forEach(slide => slide.style.backgroundColor = '');
        this.slides[this.activeIndex].style.backgroundColor = '#ed3b44';
      }
    }
  });

  const btnNext = document.querySelector('.swiper_about-next');
  btnNext.addEventListener('click', () => swiperAboutMe.slideNext());
});

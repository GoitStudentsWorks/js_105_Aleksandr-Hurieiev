
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export   const swiper = new Swiper('.swiper-projects', {
  
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

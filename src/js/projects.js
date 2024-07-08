
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiperProjects = new Swiper('.swiper-projects', {
  
  // Optional parameters
  speed: 500,
  spaceBetween: 5,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',
  watchOverflow: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
   },
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

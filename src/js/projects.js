
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

   document.addEventListener('DOMContentLoaded', () => {

    const swiperProjects = new Swiper('.swiper-projects', {
      speed: 500,
      spaceBetween: 5,
      grabCursor: true,
      allowTouchMove: true,
      direction: 'horizontal',
      watchOverflow: true,
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      on: {
        slideChange: () => {
          updateHoverEffect();
        },
        init: () => {
          updateHoverEffect();
        }
      }
    });

    function updateHoverEffect() {
  
      const slides = document.querySelectorAll('.swiper-slide');
      
      slides.forEach(slide => {
        const items = slide.querySelectorAll('.item-link');
        if (slide.classList.contains('swiper-slide-active')) {
          let index = 0;
          const intervalTime = 1000; 

          function setHover() {
            items.forEach(item => item.classList.remove('hover'));
            items[index].classList.add('hover');
            index = (index + 1) % items.length;
          }
          setInterval(setHover, intervalTime);
        } else {
          const items = slide.querySelectorAll('.item-link');
          items.forEach(item => item.classList.remove('hover'));
        }
      });
    }
        updateHoverEffect();
  });
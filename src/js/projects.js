
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// Динамическое выделение элементов
document.addEventListener('DOMContentLoaded', () => {
  try {
    const projectsList = document.querySelector('#projects .projects-list');

    if (!projectsList) return; 

    const items = projectsList.querySelectorAll('.item-link');
    let index = 0;
    let observer;
    let timerId;
    let isHovered = false;

    function activateNextItem() {
      try {
        if (index < items.length && !isHovered) {

          if (index > 0) {
            items[index - 1].classList.remove('activ');
          }

          items[index].classList.add('activ');
          index++;
          
          timerId = setTimeout(activateNextItem, 1000);
        } else if (index >= items.length) {

          if (items.length > 0) {
            items[items.length - 1].classList.remove('activ');
          }
          clearTimeout(timerId);
          index = 0; 
          if (observer) {
            observer.unobserve(projectsList); 
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    function handleIntersect(entries) {
      try {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isHovered) {
            activateNextItem();
          }
        });
      } catch (error) {
            console.log(error);
      }
    }

    try {
      observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0 
      });
      observer.observe(projectsList);
    } catch (error) {
      console.log(error);
    }

    projectsList.addEventListener('mouseover', () => {
      try {
        isHovered = true;
        clearTimeout(timerId); 
        items.forEach(item => item.classList.remove('activ')); 
      } catch (error) {
           console.log(error);
      }
    });

    projectsList.addEventListener('mouseout', () => {
      try {
        isHovered = false;
      } catch (error) {
         console.log(error);
      }
    });

  } catch (error) {
    console.log(error);
  }
});
// Свайпер
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


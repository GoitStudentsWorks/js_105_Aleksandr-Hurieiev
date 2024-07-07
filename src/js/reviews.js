import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

let reviews = [];

async function fetchReviews() {
  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Full API response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

function showErrorMessage() {
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'block';
}

function hideErrorMessage() {
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'none';
}

function createReviewCard(review) {
  const div = document.createElement('div');
  div.classList.add('reviews-card', 'swiper-slide');

  const img = document.createElement('img');
  img.classList.add('reviews-list-avatar');
  img.src = review.avatar_url;
  img.alt = `${review.author} avatar`;
  img.width = 48;
  img.height = 48;

  const box = document.createElement('div');
  box.classList.add('reviews-box');

  const h3 = document.createElement('h3');
  h3.classList.add('name-item');
  h3.textContent = review.author;

  const p = document.createElement('p');
  p.classList.add('item-text');
  p.textContent = review.review;

  box.appendChild(h3);
  box.appendChild(p);
  div.appendChild(img);
  div.appendChild(box);

  return div;
}

async function renderReviews() {
  const reviewsList = document.querySelector('.swiper-wrapper');
  reviews = await fetchReviews();
  console.log('Reviews to render:', reviews);
  if (!reviews || reviews.length === 0) {
    showErrorMessage();
  } else {
    reviews.forEach(review => {
      const reviewCard = createReviewCard(review);
      reviewsList.appendChild(reviewCard);
    });

    initSwiper();
  }
}

function initSwiper() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function () {
        const prevButton = document.querySelector('.custom-swiper-button-prev');
        prevButton.disabled = true;
      },
      slideChange: function () {
        const swiperInstance = this;
        const prevButton = document.querySelector('.custom-swiper-button-prev');
        const nextButton = document.querySelector('.custom-swiper-button-next');

        if (swiperInstance.isBeginning) {
          prevButton.disabled = true;
        } else {
          prevButton.disabled = false;
        }

        if (swiperInstance.isEnd) {
          nextButton.disabled = true;
        } else {
          nextButton.disabled = false;
        }
      },
    },
  });

  const nextButton = document.querySelector('.custom-swiper-button-next');
  const prevButton = document.querySelector('.custom-swiper-button-prev');

  function handleNextClick() {
    if (swiper.isEnd) {
      showErrorMessage();
      nextButton.disabled = true;
      prevButton.disabled = false;
    }
  }

  function handlePrevClick() {
    hideErrorMessage();
  }

  nextButton.addEventListener('click', handleNextClick);
  prevButton.addEventListener('click', handlePrevClick);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'Tab') {
      handleNextClick();
    } else if (event.key === 'ArrowLeft') {
      handlePrevClick();
    }
  });

  swiper.on('touchEnd', () => {
    if (swiper.isEnd) {
      handleNextClick();
    } else {
      handlePrevClick();
    }
  });
}

document.addEventListener('DOMContentLoaded', renderReviews);
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
  const li = document.createElement('li');
  li.classList.add('reviews-card', 'swiper-slide');

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
  li.appendChild(img);
  li.appendChild(box);

  return li;
}

async function renderReviews() {
  const reviewsList = document.getElementById('reviews-list');
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
  let endReached = false;

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
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
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
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

        prevButton.disabled = swiperInstance.isBeginning;
        nextButton.disabled = false;

        hideErrorMessage();
        endReached = false;
      },
    },
  });

  const nextButton = document.querySelector('.custom-swiper-button-next');
  const prevButton = document.querySelector('.custom-swiper-button-prev');

  function handlePrevClick() {
    hideErrorMessage();
  }

  function handleNextClick() {
    if (endReached) {
      showErrorMessage();
      nextButton.disabled = true;
    } else if (swiper.isEnd) {
      endReached = true;
    }
  }

  prevButton.addEventListener('click', handlePrevClick);
  nextButton.addEventListener('click', handleNextClick);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevClick();
    } else if (event.key === 'ArrowRight') {
      handleNextClick();
    }
  });

  swiper.on('touchEnd', () => {
    if (swiper.isEnd) {
      if (endReached) {
        showErrorMessage();
        nextButton.disabled = true;
      } else {
        endReached = true;
      }
    } else {
      hideErrorMessage();
    }
  });
}

document.addEventListener('DOMContentLoaded', renderReviews);

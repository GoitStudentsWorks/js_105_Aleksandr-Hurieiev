import Axios from 'axios';
import { comment } from 'postcss';

const formEl = document.querySelector('.footer-form');
const modalBtn = document.querySelector('.footer-modal-close-btn');
const backdrop = document.querySelector('.footer-backdrop');

function escEvent(e) {
    if (e.keyCode === 27) {
        backdrop.classList.remove('is-open');
        document.removeEventListener('keydown', escEvent);
    }
}

formEl.addEventListener('submit', async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const comment = e.target.comment.value;
    try {
        const res = await post(email, comment);

        backdrop.classList.add('is-open');

        document.addEventListener('keydown', escEvent);

        formEl.reset();
    } catch {
        alert('Error! Change your querry, please!');
    }
})

async function post(email, comment) {
  const res = await Axios.post('https://portfolio-js.b.goit.study/api/requests', {
      email: email,
      comment: comment,
  });
  return res.data;
}

modalBtn.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
});

backdrop.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        backdrop.classList.remove('is-open');
    }
});
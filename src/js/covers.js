const observerCallback = entries => {
  const marqueeLines = document.querySelectorAll('.marquee__line');
  entries.forEach(entry => {
    marqueeLines.forEach(line => {
      line.classList.toggle('animate', entry.isIntersecting);
    });
  });
};

const observer = new IntersectionObserver(observerCallback);

const section = document.querySelector('.section-covers');
if (section) {
  observer.observe(section);
}

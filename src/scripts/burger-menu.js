const burger = document.querySelector('.burger-menu');
const rightNav = document.querySelector('.right-nav');
const burgerLines = burger.querySelectorAll('.burger-line');

burger.addEventListener('click', () => {
  rightNav.classList.toggle('opened');
  document.body.classList.toggle('no-scroll');
  burgerLines.forEach((line) => {
    line.classList.toggle('opened');
  });
});

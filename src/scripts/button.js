const btnLang = document.querySelector('.btn-lang');
const textSpan = document.querySelector('span');
let bEnLang = true;

btnLang.addEventListener('click', () => {
  bEnLang = !bEnLang;
  textSpan.textContent = bEnLang ? 'EN' : 'RU';
});


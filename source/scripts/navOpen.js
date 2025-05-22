const header = document.querySelector('.header');
const toggle = header.querySelector('.header__toggle');
const nav = header.querySelector('.header__nav');

toggle.classList.remove('header__toggle--nojs')
nav.classList.remove('header__nav--nojs')

toggle.addEventListener('click', () => {
  nav.classList.toggle('header__nav--opened');
  nav.classList.toggle('header__nav--closed');
  toggle.classList.toggle('header__toggle--opened');
  toggle.classList.toggle('header__toggle--closed');
});

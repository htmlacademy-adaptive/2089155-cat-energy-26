document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  if (body.classList.contains('no-js')) {
    body.classList.remove('no-js')
  }

  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.add('main-nav--closed');
  
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
})

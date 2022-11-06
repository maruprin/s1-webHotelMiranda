const menuBtn = document.querySelector('#menuBtn');

const toggleMenu = (btn) => {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('show');
  btn.classList.toggle('header__menu-btn--close');
};

menuBtn.addEventListener('click', () => toggleMenu(menuBtn));

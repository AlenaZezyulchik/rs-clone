let navList = document.querySelectorAll('.nav__item');
function activeNavLink() {
  navList.forEach((navLink) => navLink.classList.remove('hovered'));
  this.classList.add('hovered');
}

function notActiveNavLink() {
  this.classList.remove('hovered');
}

navList.forEach((navLink) => navLink.addEventListener('mouseover', activeNavLink));
navList.forEach((navLink) => navLink.addEventListener('mouseout', notActiveNavLink));

let burgerButton = document.querySelector('.burger');
let navigation = document.querySelector('.nav__wrapper');
let mainContent = document.querySelector('.container__main');

burgerButton.onclick = function () {
  navigation.classList.toggle('active-burger');
  mainContent.classList.toggle('active-burger');
  burgerButton.classList.toggle('active-burger');
};

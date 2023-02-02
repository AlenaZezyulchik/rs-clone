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

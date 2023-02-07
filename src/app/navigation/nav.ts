import { listenerArea, toggleClassList } from '../variables/dom-elements';

function listenerToNavBtn() {
  const burgerButton = <HTMLElement>document.querySelector('.burger');
  const navigation = <HTMLElement>document.querySelector('.nav__wrapper');
  const mainContent = <HTMLElement>document.querySelector('.container__main');
  const burgerButtonIcon = <HTMLElement>document.querySelector('ion-icon');
  const navList = document.querySelectorAll<HTMLElement>('.nav__item');

  function activeNavLink(this: HTMLElement): void {
    navList.forEach((navLink) => navLink.classList.remove('hovered'));
    this.classList.add('hovered');
  }

  function notActiveNavLink() {
    navList.forEach((navLink) => navLink.classList.remove('hovered'));
  }

  navList.forEach((item) => item.addEventListener('mouseover', activeNavLink));
  navList.forEach((item) => item.addEventListener('mouseout', notActiveNavLink));

  listenerArea('.burger', 'click', (): void => {
    toggleClassList(burgerButton, 'active-burger');
    toggleClassList(navigation, 'active-burger');
    toggleClassList(mainContent, 'active-burger');
    toggleClassList(burgerButtonIcon, 'active-burger');
  });
  return navList;
}

export default listenerToNavBtn;

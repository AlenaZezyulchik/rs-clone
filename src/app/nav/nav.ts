export function navLinkHover() {
  let navList = document.querySelectorAll('.nav__item');
  function activeNavLink(this: HTMLElement, value: Event): void {
    navList.forEach((navLink: Element) => navLink.classList.remove('hovered'));
    this.classList.add('hovered');
  }

  navList.forEach((navLink: Element) => navLink.addEventListener('mouseover', activeNavLink));
}

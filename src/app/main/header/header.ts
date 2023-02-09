import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';

function createHeader() {
  const header: DomElements = <HTMLElement>createHtmlElement('header');
  addClasslist(header, 'header');

  const burger: DomElements = <HTMLDivElement>createHtmlElement('div');
  addClasslist(burger, 'burger');
  appendElement(header, burger);
  burger.innerHTML = `<ion-icon name="grid"></ion-icon>`;

  const headerContainer: DomElements = <HTMLDivElement>createHtmlElement('div');
  addClasslist(headerContainer, 'header__container');
  appendElement(header, headerContainer);

  const timeContainer: DomElements = <HTMLDivElement>createHtmlElement('div');
  addClasslist(timeContainer, 'time__container');
  appendElement(headerContainer, timeContainer);

  const timeElem: DomElements = <HTMLElement>createHtmlElement('time');
  addClasslist(timeElem, 'time');
  appendElement(timeContainer, timeElem);

  const dateElem: DomElements = <HTMLElement>createHtmlElement('date');
  appendElement(timeContainer, dateElem);
  addClasslist(dateElem, 'date');

  const greetContainer: DomElements = <HTMLElement>createHtmlElement('div');
  addClasslist(greetContainer, 'greeting__container');
  appendElement(headerContainer, greetContainer);

  const greetSpanElem: DomElements = <HTMLElement>createHtmlElement('span');
  appendElement(greetContainer, greetSpanElem);
  addClasslist(greetSpanElem, 'greeting');

  const greetInputElem: DomElements = <HTMLInputElement>createHtmlElement('input');
  appendElement(greetContainer, greetInputElem);
  addClasslist(greetInputElem, 'user-name');
  greetInputElem.setAttribute('type', 'text');
  greetInputElem.setAttribute('placeholder', '[Enter name]');

  const date = new Date();
  let hours: any = date.getHours();
  let min;
  let sec;
  let timeOfDay: any;

  //const userName = document.querySelector('.user-name') as HTMLInputElement;

  function showDate() {
    const date = new Date();
    let options: any = { weekday: 'long', month: 'long', day: 'numeric' };
    dateElem.textContent = date.toLocaleString('en', options);
  }

  function showTime() {
    const date = new Date();
    hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    timeElem.textContent = `${hours}:${min}:${sec}`;
    showDate();
  }
  setInterval(showTime, 1000);

  function showGreeting() {
    if (hours >= 6 && hours < 12) {
      timeOfDay = 'morning';
    }
    if (hours >= 12 && hours < 18) {
      timeOfDay = 'afternoon';
    }
    if (hours >= 18 && hours < 24) {
      timeOfDay = 'evening';
    }
    if (hours >= 0 && hours < 6) {
      timeOfDay = 'night';
    }
    greetSpanElem.textContent = `Good ${timeOfDay}, `;
  }

  return header;
}
export default createHeader;

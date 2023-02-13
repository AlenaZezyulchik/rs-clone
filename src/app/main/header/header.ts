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

  const greetInputElem = createHtmlElement('input') as HTMLInputElement;
  appendElement(greetContainer, greetInputElem);
  addClasslist(greetInputElem, 'user-name');
  greetInputElem.setAttribute('type', 'text');
  greetInputElem.setAttribute('placeholder', '[Enter name]');

  const rightContainer: DomElements = <HTMLElement>createHtmlElement('div');
  addClasslist(rightContainer, 'header_right-container');
  appendElement(header, rightContainer);

  const langContainer = document.createElement('select') as HTMLSelectElement;
  addClasslist(langContainer, 'change-lang');
  appendElement(rightContainer, langContainer);

  const optionRu = document.createElement('option') as HTMLOptionElement;
  addClasslist(optionRu, 'lang_ru');
  optionRu.value = "ru";
  optionRu.innerText = "RU";
  appendElement(langContainer, optionRu);

  const optionEn = document.createElement('option') as HTMLOptionElement;
  addClasslist(optionEn, 'lang_en');
  optionEn.value = "en";
  optionEn.innerText = "EN"
  optionEn.setAttribute('selected', 'selected')
  appendElement(langContainer, optionEn);

  const date = new Date();
  let hours: any = date.getHours();
  let min;
  let sec;

  function showDate() {
    const date = new Date();
    let options: any = { weekday: 'long', month: 'long', day: 'numeric' };
    dateElem.textContent = date.toLocaleString('en', options);
  };

  function showTime() {
    const date = new Date();
    hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    timeElem.textContent = `${hours}:${min}:${sec}`;
    showDate();
  };
  setInterval(showTime, 1000);
  showGreeting(greetSpanElem);
  window.addEventListener('beforeunload', () => {setLocalStorage(greetInputElem)});
  window.addEventListener('load', () => {getLocalStorage(greetInputElem)});
 
  langContainer.addEventListener("change", ()=> {
    let selectedLang = langContainer.options[langContainer.selectedIndex].value;
    console.log(selectedLang)
  });

  
  return header;
};

function showGreeting(greetSpanElem: HTMLElement) {
  const date = new Date();
  let hours: any = date.getHours();
  let timeOfDay = (hours >= 6 && hours < 12) ? 'morning' : (hours >= 12 && hours < 18) ? 'afternoon' : (hours >= 18 && hours < 24) ? 'evening' : (hours >= 0 && hours < 6) ? 'night' : "";
  greetSpanElem.textContent = `Good ${timeOfDay}, `;
};

function setLocalStorage(greetInputElem: HTMLInputElement) {
  localStorage.setItem('name', greetInputElem.value);
};

function getLocalStorage(greetInputElem: HTMLInputElement) {
  if (localStorage.getItem('name')) {
    greetInputElem.value = localStorage.getItem('name') as string;
  };
};



export default createHeader;
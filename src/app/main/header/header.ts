import { LanguageType } from '../../router/router';
import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';
import { getQuote, translateDescription } from '../mainBoard/mainBoard';
import { navTranslate } from '../../navigation/translateNav';
import { translateWishBoardPlaceholder } from '../wishBoard/wishBoard';

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
  greetInputElem.innerHTML = getLocalStorName(greetInputElem);

  const rightContainer: DomElements = <HTMLElement>createHtmlElement('div');
  addClasslist(rightContainer, 'header_right-container');
  appendElement(header, rightContainer);

  const langContainer = document.createElement('select') as HTMLSelectElement;
  addClasslist(langContainer, 'change-lang');
  appendElement(rightContainer, langContainer);

  const optionEn = document.createElement('option') as HTMLOptionElement;
  addClasslist(optionEn, 'lang_en');
  optionEn.value = "en";
  optionEn.innerText = "EN";
  if(localStorage.getItem('lang') == 'en') {
    optionEn.setAttribute('selected', '');
  }
  appendElement(langContainer, optionEn);

  const optionRu = document.createElement('option') as HTMLOptionElement;
  addClasslist(optionRu, 'lang_ru');
  optionRu.value = "ru";
  optionRu.innerText = "RU";
  if(localStorage.getItem('lang') == 'ru') {
    optionRu.setAttribute('selected', '');
  }
  appendElement(langContainer, optionRu);

  const date = new Date();
  let hours: any = date.getHours();
  let min;
  let sec;

  function showTime() {
    let lang = localStorage.getItem('lang')  as LanguageType;
    const date = new Date();
    hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    timeElem.textContent = `${hours}:${min}:${sec}`;
    showDate(lang);
  };
  setInterval(showTime, 1000);
  showGreeting(greetSpanElem);
  setPlaceholderUserName(greetInputElem);
  greetInputElem.addEventListener('input', () => {setLocalStorName(greetInputElem)});
 
  langContainer.addEventListener("change", ()=> {
    let selectedLang = langContainer.options[langContainer.selectedIndex].value;
    localStorage.setItem('lang', `${selectedLang}`);
    changeLanguage(selectedLang as LanguageType);
  });
  
  return header;
};

const showGreeting = (greetSpanElem: HTMLSpanElement) => {
  let lang = localStorage.getItem('lang');
  const date = new Date();
  let hours: any = date.getHours();
  if (greetSpanElem) {
    if (lang == "en") {
      let timeOfDay = (hours >= 6 && hours < 12) ? 'morning' : (hours >= 12 && hours < 18) ? 'afternoon' : (hours >= 18 && hours < 24) ? 'evening' : (hours >= 0 && hours < 6) ? 'night' : "";
      greetSpanElem.textContent = `Good ${timeOfDay}, `;
    }
    if (lang == "ru") {
      let timeOfDay = (hours >= 6 && hours < 12) ? 'Доброе утро' : (hours >= 12 && hours < 18) ? 'Добрый день' : (hours >= 18 && hours < 24) ? 'Добрый вечер' : (hours >= 0 && hours < 6) ? 'Доброй ночи' : "";
      greetSpanElem.textContent = `${timeOfDay}, `;
    }
  }
};

const showDate = (lang: LanguageType) => {
  const dateElem = document.querySelector('.date') as HTMLElement;
  const date = new Date();
  let options: any = { weekday: 'long', month: 'long', day: 'numeric' };
  if (dateElem) {
    if (lang === 'en') {
      dateElem.textContent = date.toLocaleString('en', options);
    }
    if (lang === 'ru') {
      dateElem.textContent = date.toLocaleString('ru', options);
    }
  }
};

const setPlaceholderUserName = ( greetInputElem: HTMLInputElement) => {
  let lang = localStorage.getItem('lang');
  if (greetInputElem) {
    if (lang === 'en') {
      greetInputElem.setAttribute('placeholder', '[Enter name]');
    }
    if (lang === 'ru') {
      greetInputElem.setAttribute('placeholder', '[Введите имя]');
    }
  }
};

const setLocalStorName = (greetInputElem: HTMLInputElement) => {
  localStorage.setItem('name', greetInputElem.value);
};

const getLocalStorName = (greetInputElem: HTMLInputElement) => {
  if (greetInputElem) {
    if (localStorage.getItem('name')) {
      greetInputElem.value = localStorage.getItem('name') as string;
    } else {
      greetInputElem.value = '';
    }
  }
  return greetInputElem.value;
};

const changeLanguage = (lang: LanguageType) => {
  lang = localStorage.getItem('lang') as LanguageType;
  const greetSpanElem = document.querySelector('.greeting') as HTMLSpanElement;
  const greetInputElem = document.querySelector('.user-name') as HTMLInputElement;
  setPlaceholderUserName(greetInputElem);
  getQuote(lang);
  showGreeting(greetSpanElem);
  showDate(lang);
  translateDescription(lang);
  navTranslate(lang);
  translateWishBoardPlaceholder(lang);
};

export default createHeader;

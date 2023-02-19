import { LanguageType } from '../../router/router';
import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';
import { getQuote, translateDescription } from '../mainBoard/mainBoard';
import { navTranslate } from '../../navigation/translateNav';
import { translateWishBoardPlaceholder } from '../wishBoard/wishBoard';
import { translateNotes } from '../../my-notes/workplace-notes';
import { changeMainTextColor, changeThemeBoard, changeThemeNav, changeThemeFooter, changeThemeHeader, changeThemeLang, changeThemeNotesContainer, changeThemeSelect, changeThemeWishBoardContainer } from '../../themes/themes';

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
  setInterval(showTime, 1000);
  showGreeting(greetSpanElem);
  setPlaceholderUserName(greetInputElem);
  createLangSelect(rightContainer);
  createThemeSelect(rightContainer);
  changeThemeHeader(header);
  changeMainTextColor(greetInputElem);
  greetInputElem.addEventListener('input', () => {setLocalStorName(greetInputElem)});
  return header;
};

const createLangSelect = (rightContainer: HTMLElement) => {
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

  langContainer.addEventListener("change", ()=> {
    let selectedLang = langContainer.options[langContainer.selectedIndex].value;
    localStorage.setItem('lang', `${selectedLang}`);
    changeLanguage(selectedLang as LanguageType);
  });
  changeThemeLang(langContainer);
};

const createThemeSelect = (rightContainer: HTMLElement) => {
  const themeSelect = document.createElement('select') as HTMLSelectElement;
  themeSelect.classList.add('change_theme');
  rightContainer.append(themeSelect);

  const darkOption = document.createElement('option') as HTMLOptionElement;
  darkOption.classList.add('dark_light')
  darkOption.value = 'dark';
  darkOption.innerHTML = '&#9789;';
  if(localStorage.getItem('theme') == 'dark') {
    darkOption.setAttribute('selected', '');
  }

  const lightOption = document.createElement('option') as HTMLOptionElement;
  lightOption.classList.add("option_light")
  lightOption.value = 'light';
  lightOption.innerHTML = '&#9788;';
  if(localStorage.getItem('theme') == 'light') {
    lightOption.setAttribute('selected', '');
  }

  themeSelect.append(darkOption);
  themeSelect.append(lightOption);

  themeSelect.addEventListener("change", () => {
    let selectedTheme = themeSelect.options[themeSelect.selectedIndex].value;
    localStorage.setItem('theme', `${selectedTheme}`);
    const header = document.querySelector('header') as HTMLElement;
    const boardNote = document.querySelector('.board__note') as HTMLDivElement;
    const boardTodo = document.querySelector('.board__todo') as HTMLDivElement;
    const boardWishBoard = document.querySelector('.board__board') as HTMLDivElement;
    const boardMusic = document.querySelector('.board__music') as HTMLDivElement;
    const footer = document.querySelector('footer') as HTMLElement;
    const langContainer = document.querySelector('.change-lang') as HTMLSelectElement;
    const wishBoardContainer = document.querySelector('.wish-board__container') as HTMLDivElement;
    const wishBoardInput = document.querySelector('.wish-board__input') as HTMLInputElement;
    const myNotesContainer = document.querySelector('.my-notes-container') as HTMLDivElement;
    const creatingNoteBlock = document.querySelector('.creating-note-container') as HTMLDivElement;
    const textNote = document.querySelector('.text-note') as HTMLDivElement;
    const notesList = document.querySelector('.noteslist') as HTMLDivElement;
    const userName = document.querySelector('.user-name') as HTMLInputElement;
    const footerItems = document.querySelectorAll('.developers a') as NodeListOf<HTMLElement>;
    changeThemeNav();
    changeThemeBoard(boardNote, boardTodo, boardWishBoard, boardMusic);
    changeThemeHeader(header);
    changeThemeFooter(footer, footerItems);
    changeThemeLang(langContainer);
    changeThemeSelect(themeSelect);
    changeThemeWishBoardContainer(wishBoardContainer, wishBoardInput);
    changeThemeNotesContainer (myNotesContainer, creatingNoteBlock, textNote, notesList);
    changeMainTextColor(userName);
  })
  changeThemeSelect(themeSelect);
  return themeSelect;
}

const showTime = () => {
  const timeElem = document.querySelector(".time") as HTMLElement;
  const date = new Date();
  let lang = localStorage.getItem('lang')  as LanguageType;
  let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  if (timeElem) {
    timeElem.textContent = `${hours}:${min}:${sec}`;
  }
  showDate(lang);
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
  translateNotes(lang);
};

export default createHeader;

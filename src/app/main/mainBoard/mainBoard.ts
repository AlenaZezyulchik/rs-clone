import { LanguageType } from '../../router/router';
import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';
import pageView from '../../variables/dom-variables';
import { affirmations } from '../mainBoard/quotes';
import { IMainDataType, mainData } from '../mainBoard/mainBoardData';
import { changeThemeBoard } from '../../themes/themes';

export function getRandomNum(min: number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createMainBoard() {
  const main: DomElements = <HTMLElement>createHtmlElement('main');
  appendElement(pageView, main);

  const mainBoard: DomElements = <HTMLDivElement>createHtmlElement('div');
  addClasslist(mainBoard, 'board');

  const boardImageContainer: DomElements = <HTMLDivElement>createHtmlElement('div');
  addClasslist(boardImageContainer, 'board__container');

  const quoteContainer: DomElements = <HTMLDivElement>createHtmlElement('div');
  addClasslist(quoteContainer, 'quote__container');

  setInterval(function() {
    let lang = localStorage.getItem('lang') as LanguageType;
    getQuote(lang);
  }, 5000);

  appendElement(main, mainBoard);
  appendElement(mainBoard, boardImageContainer);
  appendElement(mainBoard, quoteContainer);

  mainData.forEach((item) => {
    const boardItem: DomElements = <HTMLDivElement>createHtmlElement('div');
    addClasslist(boardItem, 'board__item');
    addClasslist(boardItem, `${item.class}`);

    const boardImage: DomElements = <HTMLDivElement>createHtmlElement('div');
    addClasslist(boardImage, 'board__image');
    boardImage.style.background = `url(${item.screen})`;
    boardImage.style.backgroundSize = "cover";
    boardImage.style.backgroundPosition = "center";
  
    const boardDescription: DomElements = <HTMLDivElement>createHtmlElement('div');
    addClasslist(boardDescription, 'board__description');

    appendElement(boardImageContainer, boardItem);
    appendElement(boardItem, boardImage);
    appendElement(boardItem, boardDescription);
    getBoardDescription(boardDescription, item);

  });
    const boardNote = document.querySelector('.board__note') as HTMLDivElement;
    const boardTodo = document.querySelector('.board__todo') as HTMLDivElement;
    const boardWishBoard = document.querySelector('.board__board') as HTMLDivElement;
    const boardMusic = document.querySelector('.board__music') as HTMLDivElement;
    changeThemeBoard(boardNote, boardTodo, boardWishBoard, boardMusic);
  return main;
};

export function getQuote (lang: LanguageType) {
  const quoteContainer = document.querySelector('.quote__container') as HTMLDivElement;
  let bgNum = getRandomNum(0, 9);
  if (quoteContainer) {
    quoteContainer.innerText = (lang === 'en') ? `${affirmations[bgNum].en}` : (lang === 'ru') ? `${affirmations[bgNum].ru}` : "";
  }
};

export function getBoardDescription (boardDescription: HTMLElement, item: IMainDataType) {
  let lang = localStorage.getItem('lang') as LanguageType;
  if (boardDescription) {
    if (lang == 'en') {
      boardDescription.innerText = `${item.descriptionEn}`;
    } 
    if (lang == 'ru') {
      boardDescription.innerText = `${item.descriptionRu}`;
    }
  }
};

export function translateDescription (lang: LanguageType) {
  const board = document.querySelector('.board__container')  as HTMLDivElement;
  const boardDescriptionNote = document.querySelector('.board__note .board__description')  as HTMLDivElement;
  const boardDescriptionTodo = document.querySelector('.board__todo .board__description')  as HTMLDivElement;
  const boardDescriptionBoard = document.querySelector('.board__board .board__description')  as HTMLDivElement;
  const boardDescriptionMusic = document.querySelector('.board__music .board__description')  as HTMLDivElement;
  if (board) {
    boardDescriptionNote.innerText = (lang == 'en') ? `${mainData[0].descriptionEn}` : (lang == 'ru') ? `${mainData[0].descriptionRu}` : '';
    boardDescriptionTodo.innerText = (lang == 'en') ? `${mainData[1].descriptionEn}` : (lang == 'ru') ? `${mainData[1].descriptionRu}` : '';
    boardDescriptionBoard.innerText = (lang == 'en') ? `${mainData[2].descriptionEn}` : (lang == 'ru') ? `${mainData[2].descriptionRu}` : '';
    boardDescriptionMusic.innerText = (lang == 'en') ? `${mainData[3].descriptionEn}` : (lang == 'ru') ? `${mainData[3].descriptionRu}` : '';
  }
};

export default createMainBoard;


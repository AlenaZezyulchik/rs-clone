import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';
import pageView from '../../variables/dom-variables';

function createMainBoard() {
  const main: DomElements = <HTMLElement>createHtmlElement('main');
  //appendElement(pageView, main);

  const mainBoard: DomElements = <HTMLElement>createHtmlElement('div');
  addClasslist(mainBoard, 'board');
  appendElement(main, mainBoard);

  //just for example
  for (let i = 0; i < 8; i++) {
    const boardItem: DomElements = <HTMLDivElement>createHtmlElement('div');
    addClasslist(boardItem, 'board__item');
    appendElement(mainBoard, boardItem);
  }

  return main;
}

export default createMainBoard;

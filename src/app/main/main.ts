import createHeader from './header/header';
import createMainBoard from './mainBoard/mainBoard';
import createFooter from './footer/footer';
import pageView from '../variables/dom-variables';
import { appendElement } from '../variables/dom-elements';

function createMainPage(): HTMLElement {
  appendElement(pageView, createHeader());
  appendElement(pageView, createMainBoard());
  appendElement(pageView, createFooter());
  return pageView;
}

export default createMainPage;

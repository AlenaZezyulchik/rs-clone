import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';
import '../../../assets/icons/github.png';
import { changeThemeFooter } from '../../themes/themes';

function createFooter() {
  const footer: DomElements = <HTMLElement>createHtmlElement('footer');
  addClasslist(footer, 'footer');

  const developers: DomElements = <HTMLElement>createHtmlElement('ul');
  addClasslist(developers, 'developers');
  appendElement(footer, developers);

  developers.innerHTML = `<li>
    <img class="github__icon" src="https://portal.edu.asu.ru/blocks/exaport/item_thumb.php?item_id=3007&access=hash/24570-416d5448" alt="github" />
    <a href="https://github.com/Alextufeng">Alextufeng</a>
  </li>
  <li>
    <img class="github__icon" src="https://portal.edu.asu.ru/blocks/exaport/item_thumb.php?item_id=3007&access=hash/24570-416d5448" alt="github" />
    <a href="https://github.com/staskv">staskv</a>
  </li>
  <li>
    <img class="github__icon" src="https://portal.edu.asu.ru/blocks/exaport/item_thumb.php?item_id=3007&access=hash/24570-416d5448" alt="github" />
    <a href="https://github.com/alenazezyulchik">alenazezyulchik</a>
  </li>`;
  
  const footerItems = developers.querySelectorAll('.developers a') as NodeListOf<HTMLElement>;
  changeThemeFooter(footer, footerItems);
  return footer;
}

export default createFooter;
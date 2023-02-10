import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';
import '../../../assets/icons/github.png';

function createFooter() {
  const footer: DomElements = <HTMLElement>createHtmlElement('footer');
  addClasslist(footer, 'footer');

  const developers: DomElements = <HTMLElement>createHtmlElement('ul');
  addClasslist(developers, 'developers');
  appendElement(footer, developers);

  function gitHubImages() {
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
  }
  gitHubImages();
  return footer;
}

export default createFooter;
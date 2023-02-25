import alertTo from '../notes/notes';
import createMainBoard from '../main/mainBoard/mainBoard';
import createFooter from '../main/footer/footer';
import pageView from '../variables/dom-variables';
import { appendElement } from '../variables/dom-elements';
import createMainPage from '../main/main';
import createWishboardPage from "../main/wishBoard/wishBoard";
import { createMyNotesPage } from '../my-notes/my-notes-page'
import { createMyToDoListPage } from '../my-to-do-list/my-to-do-list-page'
import { navTranslate } from '../navigation/translateNav';

const DEFAULT_LANGUAGE = "en";
export type LanguageType = "en" | "ru";

function viewBox(): void {
  const routes = {
    main: {
      render() {
        pageView.innerHTML = '';
        return createMainPage();
      },
      title: 'Main',
      description: 'This is the main page',
    },
    mynotes: {
      render() {
        pageView.innerHTML = '';
        return createMyNotesPage();
      },
      title: 'My Notes',
      description: 'This is the note page',
    },
    todolist: {
      render() {
        pageView.innerHTML = '';
        return createMyToDoListPage();
      },
      title: 'To-Do List',
      description: 'This is the to-do list page',
    },
    mywishboard: {
      render() {
        pageView.innerHTML = '';
        createWishboardPage();
      },
      title: 'Wish board',
      description: 'This is the wishboard page',
    },
    mystudy: {
      render() {
        pageView.innerHTML = '';
      },
      title: 'To-Do List',
      description: 'This is the study page',
    },
    mymusic: {
      render() {
        pageView.innerHTML = '';
      },
      title: 'Music List',
      description: 'This is the music list page',
    },
    404: {
      render() {
        pageView.innerHTML = '';
        alert('404');
      },
      title: '404',
      description: 'Page not found',
    },
  };
  let lang: LanguageType;
  if (localStorage.getItem('lang')) {
  lang = localStorage.getItem('lang') as LanguageType;
  } else {
    lang = DEFAULT_LANGUAGE as LanguageType;
  }
  navTranslate(lang);

  const locationHandler = async () => {
    var location = window.location.hash.replace('#', '');

    if (location.length == 0) {
      location = 'main';
    }

    const route = routes[location as keyof typeof routes] || routes['404'];
    route.render();
    document.title = route.title;
    //document.querySelector('meta[name="description"]').setAttribute('content', route.description);
  };

  window.addEventListener('hashchange', locationHandler);
  locationHandler();
}

export default viewBox;

import alertTo from '../notes/notes';
import createMainBoard from '../main/mainBoard/mainBoard';
import createFooter from '../main/footer/footer';
import pageView from '../variables/dom-variables';
import { appendElement } from '../variables/dom-elements';
import createMainPage from '../main/main';
import createWishboardPage from "../main/wishBoard/wishBoard";
import { createMyNotesPage } from '../my-notes/my-notes-page'

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
        //appendElement(pageView, createMyNotesPage() /*createMainBoard()*/);
        //pageView.style.marginTop = '80px';
        createMyNotesPage()
      },
      title: 'My Notes',
      description: 'This is the note page',
    },
    todolist: {
      render() {
        pageView.innerHTML = '';
        appendElement(pageView, createFooter());
      },
      title: 'To-Do List',
      description: 'This is the to-do list page',
    },
    mywishboard: {
      render() {
        pageView.innerHTML = '';
        //appendElement(pageView, createWishboardPage())
        createWishboardPage()
      },
      title: 'To-Do List',
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

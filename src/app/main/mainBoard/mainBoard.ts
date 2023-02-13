import DomElements from '../../types/types';
import { addClasslist, appendElement, createHtmlElement } from '../../variables/dom-elements';
import pageView from '../../variables/dom-variables';

const mainData = [
  {
    screen: "https://img.freepik.com/premium-photo/young-female-student-making-notes-in-copybook-while-looking-through-online-data_274679-38256.jpg",
    title: "Write a note",
    description: "Write notes and save all important information along with a shared app",
  },
  {
    screen: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=960",
    title: "Create a to-do list",
    description: "Create a to-do list, a shopping list and you will never forget about the important",
  },
  {
    screen: "https://zannakeithley.com/wp-content/uploads/2022/03/Vision-Board-2-min-576x1024.png",
    title: "Create my wish board",
    description: "Dream, visualize and create a wish board according to your goals",
  },
  {
    screen: "https://i.pinimg.com/474x/a3/c6/18/a3c6185a9c02b4a5010e16f4b8c4048b.jpg",
    title: "listen to music",
    description: "Choose and listen to your favorite tracks with the Evernote app",
  }
];

const affirmations = [
 {
  en: "I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself (Albert Einstein)",
  ru: "Я благодарен всем, кто сказал мне «нет». Благодаря им я делаю все сам (Альберт Эйнштейн)"
 },
 {
  en: "The best revenge is massive success (Frank Sinatra)",
  ru: "Лучшая месть — это грандиозный успех (Фрэнк Синатра)"
 },
 {
  en: "In order to succeed, we must first believe that we can (Nikos Kazantzakis)",
  ru: "Для того, чтобы преуспеть, мы первым делом должны верить, что мы можем (Никос Казантзакис)"
 },
 {
  en: "Only I can change my life. No one can do it for me (Carol Burnett)",
  ru: "Только я могу изменить свою жизнь. Никто не может сделать это за меня (Кэрол Бернетт)"
 },
 {
  en: "Motivation will almost always beat mere talent (Norman R. Augustine)",
  ru: "Мотивация почти всегда побеждает просто талант (Норман Р. Августин)"
 }, 
 {
  en: "In the middle of difficulty lies opportunity (Albert Einstein)",
  ru: "В центре проблемы находится возможность (Альберт Эйнштейн)"
 }, 
 {
  en: "Success doesn't come to you. You go to it (Marva Collins)",
  ru: "Успех не приходит к вам. Это вы идете к нему (Марва Коллинз)"
 }, 
 {
  en: "Genius is one percent inspiration, and ninety-nine percent perspiration (Thomas Edison)",
  ru: "Гений — это 1% вдохновения и 99% пота (Томас Эдисон)"
 }, 
 {
  en: "A pessimist sees the difficulty in every opportunity. An optimist sees the opportunity in every difficulty (Winston Churchill)",
  ru: "Пессимист видит трудность в каждой возможности. Оптимист видит возможность в каждой трудности (Уинстон Черчилль)"
 }, 
 {
  en: "The people who are crazy enough to think they can change the world are the ones who do (Steve Jobs)",
  ru: "Люди, которым хватает безрассудства думать, что они могут изменить мир — и есть те, кто его меняют (Стив Джобс)"
 }

];

function getRandomNum(min: number, max:number) {
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
    let bgNum = getRandomNum(0, 9);
    quoteContainer.innerText = `${affirmations[bgNum].en}`;
  }, 5000);

  appendElement(main, mainBoard);
  appendElement(mainBoard, boardImageContainer);
  appendElement(mainBoard, quoteContainer);

  mainData.forEach((item) => {
    const boardItem: DomElements = <HTMLDivElement>createHtmlElement('div');
    addClasslist(boardItem, 'board__item');

    const boardImage: DomElements = <HTMLDivElement>createHtmlElement('div');
    addClasslist(boardImage, 'board__image');
    boardImage.style.background = `url(${item.screen})`;
    boardImage.style.backgroundSize = "cover";
    boardImage.style.backgroundPosition = "center";
  
    const boardDescription: DomElements = <HTMLDivElement>createHtmlElement('div');
    boardDescription.innerText = `${item.description}`;

    appendElement(boardImageContainer, boardItem);
    appendElement(boardItem, boardImage);
    appendElement(boardItem, boardDescription);

  });

  return main;
}

export default createMainBoard;


import { LanguageType } from '../router/router';

export const langArray: any = {
  main: {
    ru: 'Главная',
    en: 'Main',
  },
  notes: {
    ru: 'Мои заметки',
    en: 'My Notes',
  },
  todo: {
    ru: 'Мои списки дел',
    en: 'My To-Do',
  },
  wishboard: {
    ru: 'Моя доска желаний',
    en: 'My Wishboard',
  },
  music: {
    ru: 'Моя музыка',
    en: 'My Music',
  },
};

export const navTranslate = (lang: LanguageType) => {
  const main = document.querySelector('.lang__main') as HTMLSpanElement;
  const notes = document.querySelector('.lang__notes') as HTMLSpanElement;
  const todo = document.querySelector('.lang__todo') as HTMLSpanElement;
  const wishBoard = document.querySelector('.lang__wishboard') as HTMLSpanElement;
  const music = document.querySelector('.lang__music') as HTMLSpanElement;

  main.innerHTML = lang === 'en' ? `${langArray.main.en}` : lang === 'ru' ? `${langArray.main.ru}` : '';
  notes.innerHTML = lang === 'en' ? `${langArray.notes.en}` : lang === 'ru' ? `${langArray.notes.ru}` : '';
  todo.innerHTML = lang === 'en' ? `${langArray.todo.en}` : lang === 'ru' ? `${langArray.todo.ru}` : '';
  wishBoard.innerHTML = lang === 'en' ? `${langArray.wishboard.en}` : lang === 'ru' ? `${langArray.wishboard.ru}` : '';
  music.innerHTML = lang === 'en' ? `${langArray.music.en}` : lang === 'ru' ? `${langArray.music.ru}` : '';
};

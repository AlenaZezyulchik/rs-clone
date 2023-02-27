import { ThemeType } from "../router/router";

export const setLightTheme = (element: HTMLElement) => {
  element.classList.remove('dark');
  element.classList.add('light');
};

export const setDarkTheme = (element: HTMLElement) => {
  element.classList.remove('light');
  element.classList.add('dark');
};

export const changeThemeNav = () => {
  const theme = localStorage.getItem('theme') as ThemeType;
  const body = document.querySelector('body') as HTMLBodyElement;
  const navWrapper = document.querySelector('.nav__wrapper') as HTMLElement;
  const navItems = document.querySelectorAll('.nav__item a') as NodeListOf<HTMLElement>;
  const logoTitle = document.querySelector('.logo__title') as HTMLElement;

  if (theme === "dark") {
    setDarkTheme(body);
    setDarkTheme(navWrapper);
    setDarkTheme(logoTitle);
  }
  if (theme === "light") {
    setLightTheme(body);
    setLightTheme(navWrapper);
    setLightTheme(logoTitle);
  }

  navItems.forEach(elem => {
    if (theme === "dark") setDarkTheme(elem);
    if (theme === "light") setLightTheme(elem);
  })
};

export const changeThemeBoard = (boardItem1: HTMLDivElement, boardItem2: HTMLDivElement, boardItem3: HTMLDivElement, boardItem4: HTMLDivElement) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (boardItem1) { 
    if (theme === "dark"){
      setDarkTheme(boardItem1);
      setDarkTheme(boardItem2);
      setDarkTheme(boardItem3);
      setDarkTheme(boardItem4);
    }
    if (theme === "light") {
      setLightTheme(boardItem1);
      setLightTheme(boardItem2);
      setLightTheme(boardItem3);
      setLightTheme(boardItem4);
    }
  }
};

export const changeThemeHeader = (header: HTMLElement) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (header) { 
    if (theme === "dark") setDarkTheme(header);
    if (theme === "light") setLightTheme(header);
  }
};

export const changeThemeFooter = (footer: HTMLElement, footerItems: NodeListOf<HTMLElement>) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (footer) { 
    if (theme === "dark") setDarkTheme(footer);
    if (theme === "light") setLightTheme(footer);
    footerItems.forEach(elem => {
      if (theme === "dark") setDarkTheme(elem);
      if (theme === "light") setLightTheme(elem);
    })
  };
};

export const changeThemeLang = (langSelect: HTMLElement) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (langSelect) { 
    if (theme === "dark") setDarkTheme(langSelect);
    if (theme === "light") setLightTheme(langSelect);
  };
};

export const changeThemeSelect = (themeSelect: HTMLElement) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (themeSelect) { 
    if (theme === "dark") setDarkTheme(themeSelect);
    if (theme === "light") setLightTheme(themeSelect);
  };
};

export const changeThemeWishBoardContainer = (wishBoardContainer: HTMLDivElement, wishBoardInput: HTMLInputElement) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (wishBoardContainer) {
    if (theme === "dark") {
      setDarkTheme(wishBoardContainer);
      setDarkTheme(wishBoardInput);
    }
    if (theme === "light") {
      setLightTheme(wishBoardContainer);
      setLightTheme(wishBoardInput);
    }
  }
};

export const changeThemeNotesContainer = (myNotesContainer: HTMLDivElement, creatingNoteBlock: HTMLDivElement, textNote: HTMLDivElement, notesList: HTMLDivElement) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (myNotesContainer) {
    if (theme === "dark") {
      setDarkTheme(myNotesContainer);
      setDarkTheme(creatingNoteBlock);
      setDarkTheme(textNote);
      setDarkTheme(notesList);
    }
    if (theme === "light") {
      setLightTheme(myNotesContainer);
      setLightTheme(creatingNoteBlock);
      setLightTheme(textNote);
      setLightTheme(notesList);
    }
  }
};

export const changeMainTextColor = (userName: HTMLInputElement) => {
  const theme = localStorage.getItem('theme') as ThemeType;
  if (userName) {
    if (theme === "dark") setDarkTheme(userName);
    if (theme === "light") setLightTheme(userName);
  }
};



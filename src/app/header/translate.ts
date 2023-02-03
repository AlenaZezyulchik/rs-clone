import { showGreeting } from "./time";
const langArray: any = {
  "main" :  {
      "ru": "Главная",
      "en": "Main",
  }, 
  "mynotes": {
      "ru": "Мои заметки",
      "en": "My Notes",
  },
  "mytodo": {
    "ru": "Мои списки дел",
    "en": "My Notes",
  },
  "mywishboard": {
    "ru": "Моя доска желаний",
    "en": "My Wishboard",
  },
  "mystudy": {
    "ru": "Моё обучение",
    "en": "My study", 
  },
  "mymusic": {
    "ru": "Моя музыка",
    "en": "My Music", 
  },
};
const selectChangeLang = document.querySelector('.change-lang') as HTMLSelectElement;
export let selectedLang = selectChangeLang.options[selectChangeLang.selectedIndex].value;

const changeLanguage = () => {
  const selectedIndex = selectChangeLang.selectedIndex;
  const options = selectChangeLang.options;
  selectedLang = options[selectedIndex].value;
  showGreeting(selectedLang);
  for (let key in langArray) {
    let element = document.querySelector('.lang-' + key) as HTMLElement;
    if (element) {
      element.innerHTML = langArray[key][selectedLang];
    };
  };
};

selectChangeLang.addEventListener("change", changeLanguage);



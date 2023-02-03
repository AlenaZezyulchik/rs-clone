import { selectedLang } from "./translate";

const date = new Date();
const timeBlock = document.querySelector('.time') as HTMLTimeElement;
const dateBlock = document.querySelector('.date') as HTMLDataElement;
let hours: any = date.getHours();
let min;
let sec;

const greeting = document.querySelector('.greeting') as HTMLSpanElement;
const userName = document.querySelector(".user-name") as HTMLInputElement;


const showDate = () => {
  const date = new Date();
  let options:any = { weekday: 'long', month: 'long', day: 'numeric' };
  if (selectedLang === "en") {
    dateBlock.textContent = date.toLocaleString('en', options);
  };
  if (selectedLang === "ru") {
    dateBlock.textContent = date.toLocaleString('ru', options);
  };
};

const showTime = () => {
  const date = new Date();
  hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  timeBlock.textContent = `${hours}:${min}:${sec}`;
  showDate();
};
setInterval(showTime, 1000);

export const showGreeting = (lang: string) => {
  if (lang === "en") {
    let timeOfDay = (hours >= 6 && hours < 12) ? 'morning' : (hours >= 12 && hours < 18) ? 'afternoon' : (hours >= 18 && hours < 24) ? 'evening' : (hours >= 0 && hours < 6) ? 'night' : "";
      greeting.textContent = `Good ${timeOfDay}, `;
  };
  if (lang === "ru") {
    let timeOfDayRu = (hours >= 6 && hours < 12) ? 'Доброе утро' : (hours >= 12 && hours < 18) ? 'Добрый день' : (hours >= 18 && hours < 24) ? 'Добрый вечер' : (hours >= 0 && hours < 6) ? 'Доброй ночи' : "";
      greeting.textContent = timeOfDayRu;
  };
};
showGreeting(selectedLang);

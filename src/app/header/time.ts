
const date = new Date();
const timeBlock = document.querySelector('.time') as HTMLTimeElement;
const dateBlock = document.querySelector('.date') as HTMLDataElement;
let hours: any = date.getHours();
let min;
let sec;
let timeOfDay : any;
const greeting = document.querySelector('.greeting') as HTMLSpanElement;
const greetingContainer = document.querySelector('.greeting__container') as HTMLElement;
const userName = document.querySelector(".user-name") as HTMLInputElement;

function showDate() {
  const date = new Date();
  let options:any = { weekday: 'long', month: 'long', day: 'numeric' };
  dateBlock.textContent = date.toLocaleString('en', options);
}

function showTime() {
  const date = new Date();
  hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  timeBlock.textContent = `${hours}:${min}:${sec}`;
  showDate();
}
setInterval(showTime, 1000);

function showGreeting() {
  if (hours >= 6 && hours < 12) {
    timeOfDay = 'morning'
  }
  if (hours >= 12 && hours < 18) {
    timeOfDay = 'afternoon'
  }
  if (hours >= 18 && hours < 24) {
    timeOfDay = 'evening'
  }
  if (hours >= 0 && hours < 6) {
    timeOfDay = 'night'
  }
  greeting.textContent = `Good ${timeOfDay}, `;
}
showGreeting();
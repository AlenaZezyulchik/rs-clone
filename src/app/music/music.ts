import musicList from './musicList';
import { addClasslist, createHtmlElement } from '../variables/dom-elements';
import DomElements from '../types/types';
import pageView from '../variables/dom-variables';
import createHeader from '../main/header/header';
import createFooter from '../main/footer/footer';
import { IValue } from '../types/types';
import { APIController } from './musicList';
import { LanguageType } from '../router/router';

function createMusicBox() {
  pageView.append(createHeader());
  const musicBox: DomElements = <HTMLDivElement>createHtmlElement('div');
  addClasslist(musicBox, 'music__wrapper');

  const musicPlayer = () => {
    musicBox.innerHTML = `
    <ul class="songs__list">
    <input class="music__input" type="text" placeholder="Searching..." name="key" autofocus="">
    <ion-icon name="search-circle-outline"></ion-icon>
    </ul>
    <div class="music__player player">
      <div class="player__wrapper">
        <div class="player__details">
            <div class="player__now-playing">PLAYING x OF y</div>
            <div class="player__track-art"></div>
            <div class="player__track-name">Track Name</div>
            <div class="player__track-artist">Track Artist</div>
        </div>

        <div class="player__slider_container">
            <div class="player__current-time">00:00</div>
            <input type="range" min="1" max="100" value="0" class="player__seek_slider">
            <div class="player__total-duration">00:00</div>
        </div>

        <div class="player__slider_container">
            <ion-icon name="volume-low"></ion-icon>
            <input type="range" min="1" max="100" value="100" class="player__volume_slider">
            <ion-icon name="volume-high"></ion-icon>
        </div>

        <div class="player__buttons">
            <div class="player__random-track">
              <ion-icon name="shuffle"></ion-icon>
            </div>
            <div class="player__prev-track">
              <ion-icon name="play-skip-back"></ion-icon>
            </div>
            <div class="player__playpause-track">
              <ion-icon name="play-circle"></ion-icon>
            </div>
            <div class="player__next-track">
              <ion-icon name="play-skip-forward"></ion-icon>
            </div>
            <div class="player__repeat-track">
              <ion-icon name="reload"></ion-icon>
            </div>
        </div>

        <div id="player__wave">
            <span class="player__stroke"></span>
            <span class="player__stroke"></span>
            <span class="player__stroke"></span>
            <span class="player__stroke"></span>
            <span class="player__stroke"></span>
            <span class="player__stroke"></span>
            <span class="player__stroke"></span>
        </div>
      </div>
    </div>`;
    return musicBox;
  };

  pageView.append(musicPlayer());
  pageView.append(createFooter());

  let now_playing: HTMLElement | null = document.querySelector('.player__now-playing');
  let track_art: HTMLImageElement | null = document.querySelector('.player__track-art');
  let track_name: HTMLElement | null = document.querySelector('.player__track-name');
  let track_artist: HTMLElement | null = document.querySelector('.player__track-artist');

  let playpause_btn: HTMLElement | null = document.querySelector('.player__playpause-track');
  let next_btn: HTMLElement | null = document.querySelector('.player__next-track');
  let prev_btn: HTMLElement | null = document.querySelector('.player__prev-track');
  let repeat: HTMLElement | null = document.querySelector('.player__repeat-track');

  let seek_slider: IValue | HTMLInputElement | null | Element = document.querySelector('.player__seek_slider');
  let volume_slider: HTMLInputElement | null | IValue | Element = document.querySelector('.player__volume_slider');
  let curr_time: HTMLElement | null = document.querySelector('.player__current-time');
  let total_duration: HTMLElement | null = document.querySelector('.player__total-duration');
  let wave: HTMLElement | null = document.getElementById('player__wave');
  let randomIcon: HTMLElement | null = document.querySelector('.player__random-track');
  let curr_track: HTMLAudioElement = document.createElement('audio');
  let strokes: NodeListOf<Element> = document.querySelectorAll('.player__stroke');

  let track_index: number = Number(localStorage.getItem('track-index'))
    ? Number(localStorage.getItem('track-index'))
    : 0;
  let isPlaying: boolean = false;
  let isRandom: boolean = false;
  let updateTimer: NodeJS.Timeout;

  loadTrack(track_index);

  function loadTrack(track_index: number) {
    clearInterval(updateTimer);
    reset();
    APIController();

    //curr_track.src = require(`${musicList[track_index].music}`);

    curr_track.src = musicList[track_index].music;
    curr_track.load();

    (track_art as HTMLImageElement).style.backgroundImage = 'url(' + `${musicList[track_index].img}` + ')';
    (track_name as HTMLElement).textContent = musicList[track_index].name;
    (track_artist as HTMLElement).textContent = musicList[track_index].artist;
    //(now_playing as HTMLElement).textContent = 'Playing music ' + (track_index + 1) + ' of ' + musicList.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track?.addEventListener('ended', nextTrack);
    random_bg_color();
    localStorage.setItem('track-index', `${track_index}`);
  }

  function random_bg_color() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    //let a: string;

    function populate(a: string) {
      for (let i = 0; i < 6; i++) {
        let x = Math.round(Math.random() * 14);
        let y = hex[x];
        a += y;
      }
      return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to top';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ')';
    strokes.forEach((stroke) => ((stroke as HTMLElement).style.background = gradient));
  }

  function reset() {
    (curr_time as HTMLElement).textContent = '00:00';
    (total_duration as HTMLElement).textContent = '00:00';
    (seek_slider as HTMLInputElement).value = '0'; //!!!!!!!!!!!!!
  }

  function randomTrack() {
    return isRandom ? pauseRandom() : playRandom();
  }
  function playRandom() {
    isRandom = true;
    return randomIcon?.classList.add('randomActive');
  }
  function pauseRandom() {
    isRandom = false;
    return randomIcon?.classList.remove('randomActive');
  }
  function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index);
    return playTrack();
  }
  function playpauseTrack() {
    return isPlaying ? pauseTrack() : playTrack();
  }

  function playTrack() {
    curr_track.play();
    isPlaying = true;
    track_art?.classList.add('rotate');
    wave?.classList.add('loader');
    return ((playpause_btn as HTMLElement).innerHTML = '<ion-icon name="pause-circle"></ion-icon>');
  }
  function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    track_art?.classList.remove('rotate');
    wave?.classList.remove('loader');
    return ((playpause_btn as HTMLElement).innerHTML = '<ion-icon name="play-circle"></ion-icon>');
  }
  function nextTrack() {
    if (track_index < musicList.length - 1 && isRandom === false) {
      track_index += 1;
    } else if (track_index < musicList.length - 1 && isRandom === true) {
      let random_index = Number.parseInt(`${Math.random() * musicList.length}`);
      track_index = random_index;
    } else {
      track_index = 0;
    }
    loadTrack(track_index);
    return playTrack();
  }
  function prevTrack() {
    if (track_index > 0) {
      track_index -= 1;
    } else {
      track_index = musicList.length - 1;
    }
    loadTrack(track_index);
    return playTrack();
  }

  function seekTo() {
    if (seek_slider != null) {
      let seekTo = curr_track.duration * ((seek_slider as IValue).value / 100);
      return (curr_track.currentTime = seekTo);
    }
  }
  function setVolume() {
    return (curr_track.volume = (volume_slider as IValue).value / 200);
  }

  function setUpdate() {
    let seekPosition: number = 0;
    if (!isNaN(curr_track.duration)) {
      seekPosition = curr_track.currentTime * (100 / curr_track.duration);
      if (seek_slider != null) {
        (seek_slider as IValue).value = seekPosition;
      }
      let currentMinutes: string | number = Math.floor(curr_track.currentTime / 60);
      let currentSeconds: string | number = Math.floor(curr_track.currentTime - currentMinutes * 60);
      let durationMinutes: string | number = Math.floor(curr_track.duration / 60);
      let durationSeconds: string | number = Math.floor(curr_track.duration - durationMinutes * 60);

      if (currentSeconds < 10) {
        currentSeconds = '0' + currentSeconds;
      }
      if (durationSeconds < 10) {
        durationSeconds = '0' + durationSeconds;
      }
      if (currentMinutes < 10) {
        currentMinutes = '0' + currentMinutes;
      }
      if (durationMinutes < 10) {
        durationMinutes = '0' + durationMinutes;
      }
      if (curr_time != null) {
        curr_time.textContent = currentMinutes + ':' + currentSeconds;
      }
      if (total_duration != null) {
        total_duration.textContent = durationMinutes + ':' + durationSeconds;
      }
    }
  }
  let list: HTMLElement | null = document.querySelector('.songs__list');

  function listOfSongs() {
    for (let index = 0; index < musicList.length; index++) {
      (list as HTMLElement).innerHTML += `<li class="songs__item" id="${index}"><span class='songs__item_number'>${
        index + 1
      }. </span>
      <span class='songs__item_artist'>${musicList[index].artist}</span>
      <span>-</span>
      <span class='songs__item_name'>${musicList[index].name}</span>
      </li>`;
    }
    return list;
  }
  listOfSongs();

  let listOfItems = document.querySelectorAll('.songs__item');

  function activeLink(this: HTMLElement) {
    listOfItems.forEach((link) => link.classList.remove('song-hover'));
    this.classList.add('song-hover');
  }
  function notActiveLink() {
    listOfItems.forEach((link) => link.classList.remove('song-hover'));
  }

  /* function activeTrack() {
    listOfItems.forEach((link) => link.classList.remove('active-track'));
    document.getElementById(`${track_index}`)?.classList.add('active-track');
  } */

  listOfItems?.forEach((item) => item.addEventListener('mouseover', activeLink));
  listOfItems?.forEach((item) => item.addEventListener('mouseout', notActiveLink));

  //listOfItems?.forEach((item) => item.addEventListener('click', activeTrack));

  listOfItems?.forEach((item) =>
    item.addEventListener('click', function (this: Element, event) {
      track_index = Number(this.id);
      loadTrack(track_index);
      playTrack();
    })
  );

  seek_slider?.addEventListener('click', seekTo, false);
  volume_slider?.addEventListener('click', setVolume, false);
  playpause_btn?.addEventListener('click', playpauseTrack);
  randomIcon?.addEventListener('click', randomTrack);
  prev_btn?.addEventListener('click', prevTrack);
  next_btn?.addEventListener('click', nextTrack);
  repeat?.addEventListener('click', repeatTrack);
  document.querySelector('.nav__list')?.addEventListener('click', pauseTrack);
  let lang = localStorage.getItem('lang') as LanguageType;
  translateMusicInputPlaceholder(lang);
}
export default createMusicBox;

export const translateMusicInputPlaceholder = (lang: LanguageType) => {
  const musicContainer = document.querySelector('.music__wrapper') as HTMLDivElement;
  const musicInput = document.querySelector('.music__input') as HTMLInputElement;
  const musicCounter = document.querySelector('.player__now-playing') as HTMLDivElement;
  let track_index: number = Number(localStorage.getItem('track-index')) ? Number(localStorage.getItem('track-index')) : 0;
  if(musicContainer) {
    if(musicInput) {
      musicInput.placeholder = (lang === 'en') ? 'Searching...' : (lang === 'ru') ? 'Искать...' : '';
    }
    (musicCounter as HTMLElement).textContent = (lang === 'en') ? 'Playing music ' + (track_index + 1) + ' of ' + musicList.length : (lang === 'ru') ? 'Играет трек ' + (track_index + 1) + ' из ' + musicList.length : '';
  }
};

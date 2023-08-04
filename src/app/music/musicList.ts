const musicList = [
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic124%2Fv4%2Fa1%2F29%2F57%2Fa1295725-cfb4-eb3d-adf7-1a96ec019c32%2Fcover.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Родная, пой',
    artist: 'Miyagi feat. KADI',
    music:
      'https://drivemusic.club/dl/Qo6OroVKbJKgEfZ8Mow8hw/1691231994/download_music/2018/11/miyagi-feat.-kadi-rodnaja-pojj.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic125%2Fv4%2F78%2F07%2Fd8%2F7807d880-2bc7-e578-af52-729f3898a8ad%2Fcover.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Ты была права',
    artist: 'Баста',
    music:
      'https://drivemusic.club/dl/ELlur_jU0Qr06Sd38tBZJw/1691231962/download_music/2021/06/basta-ty-byla-prava.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic124%2Fv4%2Fde%2F51%2Ffd%2Fde51fdd3-6647-fd6c-f0f3-34a28322cb6a%2Fcover.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Космос (feat. Charusha)',
    artist: 'Скриптонит',
    music:
      'https://drivemusic.club/dl/VyBsqUGRVALVIFZKfQX9_Q/1691232037/download_music/2015/03/skriptonit-feat.-charusha-kosmos.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic113%2Fv4%2Fda%2F9d%2F4b%2Fda9d4ba7-7efa-f4b5-2a69-70322d33eb3f%2F886447877043.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Old Town Road',
    artist: 'Lil Nas X',
    music:
      'https://drivemusic.club/dl/890ng92EdJ50MLc4KmzE8w/1691232066/download_music/2019/04/lil-nas-x-old-town-road.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis5-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic128%2Fv4%2F95%2Fa4%2F2c%2F95a42c0d-f3c8-c70d-3e3a-93cfa4a516d4%2F00602527394558.rgb.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Love the Way You Lie',
    artist: 'BROHM, PANE',
    music:
      'https://drivemusic.club/dl/GND1J38cSuL4H7vNV8_rCA/1691232096/download_music/2020/10/brohm-pane-love-the-way-you-lie.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic124%2Fv4%2F6a%2F99%2F78%2F6a9978b8-d757-e635-6f8b-cc39fb93256d%2Fcover.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Endorphin',
    artist: 'Andy Panda feat. Miyagi',
    music:
      'https://drivemusic.club/dl/tb2r89eKPcnvAYsGKu6ApA/1691232123/download_music/2019/11/andy-panda-feat.-miyagi-endorphi.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic125%2Fv4%2F84%2F65%2F6d%2F84656d10-e0f7-f652-3678-7cc911c27563%2Fmzi.puknghzb.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'The Magic Key',
    artist: 'T One',
    music:
      'https://drivemusic.club/dl/JvnC4u7sBY0TLcVg9OvcdA/1691232144/download_music/2014/02/one-t-amp-cool-t-the-magic-key.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis5-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic114%2Fv4%2Fe1%2Fc7%2F26%2Fe1c726bc-d3f0-f303-8463-c9c312af58e8%2Fcover.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Femme Like U',
    artist: 'Monaldin feat. Emma Peters',
    music:
      'https://drivemusic.club/dl/C-eaFscmQY9AeS9OWwhg5A/1691232173/download_music/2020/07/monaldin-feat.-emma-peters-femme-like-u.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic114%2Fv4%2Fc8%2Fec%2F54%2Fc8ec5494-fa41-ab70-3fb1-61bff636bc4d%2F195497307548.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Summer Jam',
    artist: 'Kaan Pars',
    music:
      'https://drivemusic.club/dl/BJGCS92tqJcxaVHQUSBzsQ/1691232199/download_music/2020/11/kaan-pars-summer-jam.mp3',
  },
  {
    img: 'https://song.link/_next/image?url=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic116%2Fv4%2Fa7%2F0f%2F1c%2Fa70f1cbe-3fea-ae13-cdf6-4b09a954c5e4%2Fartwork.jpg%2F512x512bb.jpg&w=2048&q=75',
    name: 'Midnight City',
    artist: 'M83',
    music:
      'https://drivemusic.club/dl/_HwqKkrZNhXS2qFwFYTOUA/1691232219/download_music/2013/08/m83-midnight-city-eric-prydz-private-remix.mp3',
  },
];

export default musicList;

export interface IMusic {
  img: string;
  artist: string;
  album: string;
  track: string;
  id: string;
  info: string;
}

export const APIController = function () {
  const clientId = '6666b865ad9b47628d09d29b2a3122a8';
  const clientSecret = '2b53d251911648ed9804f92e3fbea430';

  const _getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await result.json();
    console.log(data.access_token);
    return data.access_token;
  };

  const _getGenres = async (token: string) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    });

    const data = await result.json();
    console.log(data.categories.items);
    return data.categories.items;
  };
};

/* export interface Path {
  img: string;
  artist: string;
  album: string;
  track: string;
  id: string;
  info: string;
} 

export interface IDOMElements {
  selectGenre: string;
  selectPlaylist: string;
  buttonSubmit: string;
  divSongDetail: string;
  hfToken: string;
  divSonglist: string;
}
*/

/* 
import DomElements, { IDOMElements } from '../types/types';

const APIController = (function () {
  const clientId = '6666b865ad9b47628d09d29b2a3122a8';
  const clientSecret = '2b53d251911648ed9804f92e3fbea430';

  const _getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await result.json();
    return data.access_token;
  };

  const _getGenres = async (token: string) => {
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    });

    const data = await result.json();
    return data.categories.items;
  };

  const _getPlaylistByGenre = async (token: string, genreId: string) => {
    const limit = 10;

    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    });

    const data = await result.json();
    return data.playlists.items;
  };

  const _getTracks = async (token: string, tracksEndPoint: string) => {
    const limit = 10;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    });

    const data = await result.json();
    return data.items;
  };

  const _getTrack = async (token: string, trackEndPoint: string) => {
    const result = await fetch(`${trackEndPoint}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    });

    const data = await result.json();
    return data;
  };

  return {
    getToken() {
      return _getToken();
    },
    getGenres(token: string) {
      return _getGenres(token);
    },
    getPlaylistByGenre(token: string, genreId: string) {
      return _getPlaylistByGenre(token, genreId);
    },
    getTracks(token: string, tracksEndPoint: string) {
      return _getTracks(token, tracksEndPoint);
    },
    getTrack(token: string, trackEndPoint: string) {
      return _getTrack(token, trackEndPoint);
    },
  };
})();

const UIController = (function () {
  const DOMElements = {
    selectGenre: '#select_genre',
    selectPlaylist: '#select_playlist',
    buttonSubmit: '#btn_submit',
    divSongDetail: '#song-detail',
    hfToken: '#hidden_token',
    divSonglist: '.song-list',
  };

  return {
    inputField() {
      return {
        genre: document.querySelector(DOMElements.selectGenre),
        playlist: document.querySelector(DOMElements.selectPlaylist),
        tracks: document.querySelector(DOMElements.divSonglist),
        submit: document.querySelector(DOMElements.buttonSubmit),
        songDetail: document.querySelector(DOMElements.divSongDetail),
      };
    },

    createGenre(text: string, value: string) {
      const html = `<option value="${value}">${text}</option>`;
      document.querySelector(DOMElements.selectGenre)?.insertAdjacentHTML('beforeend', html);
    },

    createPlaylist(text: string, value: string) {
      const html = `<option value="${value}">${text}</option>`;
      document.querySelector(DOMElements.selectPlaylist)?.insertAdjacentHTML('beforeend', html);
    },

    createTrack(id: string, name: string) {
      const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
      document.querySelector(DOMElements.divSonglist)?.insertAdjacentHTML('beforeend', html);
    },

    createTrackDetail(img: string, title: string, artist: string) {
      const detailDiv = document.querySelector(DOMElements.divSongDetail);
      (detailDiv as HTMLElement).innerHTML = '';

      const html = `
          <div class="row col-sm-12 px-0">
              <img src="${img}" alt="">        
          </div>
          <div class="row col-sm-12 px-0">
              <label for="Genre" class="form-label col-sm-12">${title}:</label>
          </div>
          <div class="row col-sm-12 px-0">
              <label for="artist" class="form-label col-sm-12">By ${artist}:</label>
          </div> 
          `;

      (detailDiv as HTMLElement).insertAdjacentHTML('beforeend', html);
    },

    resetTrackDetail(this: ) {
      this.inputField().songDetail.innerHTML = '';
    },

    resetTracks(this: ) {
      this.inputField().tracks.innerHTML = '';
      this.resetTrackDetail();
    },

    resetPlaylist() {
      this.inputField().playlist.innerHTML = '';
      this.resetTracks();
    },

    storeToken(value: string) {
      let thisToken: HTMLInputElement | null = document.querySelector(DOMElements.hfToken);
      (thisToken as HTMLInputElement).value = value;
    },

    getStoredToken() {
      let thisToken: HTMLInputElement | null = document.querySelector(DOMElements.hfToken);
      return {
        token: (thisToken as HTMLInputElement).value,
      };
    },
  };
})();

const APPController = (function (UICtrl, APICtrl) {
  const DOMInputs = UICtrl.inputField();

  const loadGenres = async () => {
    const token = await APICtrl.getToken();
    UICtrl.storeToken(token);
    const genres = await APICtrl.getGenres(token);
    genres.forEach((element: any) => UICtrl.createGenre(element.name, element.id));
  };

  DOMInputs.genre?.addEventListener('change', async () => {
    UICtrl.resetPlaylist();
    const token = UICtrl.getStoredToken().token;
    const genreSelect = UICtrl.inputField().genre;
    const genreId = genreSelect.options[genreSelect.selectedIndex].value;
    const playlist = await APICtrl.getPlaylistByGenre(token, genreId);
    playlist.forEach((p: HTMLInputElement) => UICtrl.createPlaylist(p.name, p.tracks.href));
  });

  DOMInputs.submit?.addEventListener('click', async (e) => {
    e.preventDefault();
    UICtrl.resetTracks();
    const token = UICtrl.getStoredToken().token;
    const playlistSelect = UICtrl.inputField().playlist;
    const tracksEndPoint = playlistSelect.options[playlistSelect.selectedIndex].value;
    const tracks = await APICtrl.getTracks(token, tracksEndPoint);
    tracks.forEach((el: HTMLInputElement) => UICtrl.createTrack(el.track.href, el.track.name));
  });

  DOMInputs.tracks?.addEventListener('click', async (e: Event) => {
    e.preventDefault();
    UICtrl.resetTrackDetail();
    const token = UICtrl.getStoredToken().token;
    const trackEndpoint = e.target.id;
    const track = await APICtrl.getTrack(token, trackEndpoint);
    UICtrl.createTrackDetail(track.album.images[2].url, track.name, track.artists[0].name);
  });

  return {
    init() {
      console.log('App is starting');
      loadGenres();
    },
  };
})(UIController, APIController);

APPController.init(); */

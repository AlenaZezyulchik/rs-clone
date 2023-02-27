const musicList = [
  {
    img: 'https://jpg.cofemuzik.pro/img/25c5b10e82301000d0bf61931ea52ded401c5cd4c4687030ba906b53c82145b442d0af77f02d2f4e8359a9229da27fe148a97b0446616c98d312140736ff1790b1dc23972cdc9a6f76eb35d5bbb41bdb75a4af2f955e20794ed8d3fb531a4822b543290b6195cb34480385b55c1b9b2372d099e0e8b44d5c3d0df4acdfd8963ddd977be3e9b46aea4e060cc278abc4e112d19f670b9ba3d19f6d55ede5f507.jpg',
    name: 'Родная, пой',
    artist: 'Miyagi feat. KADI',
    music:
      'https://song.muz-cafe.pro/download/d3353230303432b0b43431893731853000/0d18de1d70a1bf03219d7995518ba273/Miyagi%20feat.%20KADI%20-%20%D0%A0%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BE%D0%B9.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/05c1cd9282200000e0b7f1e62fcacf8169ec22d6ced64cdb854b03892eb92a8414f6f4fb7dcecf240659e29d7a0aa393fb32a57a327dcaec743e7e675f75a3baca9a6abc12c9c5aa71d39e7968dff595edc33bcd4fe516e3e7abe175f230c3cee98fa210078823ebc59f5e374a60e4f430d32c2f14921081a2871d2e89ca11291006b25325a9148cee373f6b7b5bc5404bae99c568fc09c568e37664bf1639c6e5616985cccce382f77da824e06089d6cd282a7ca7977f.jpg',
    name: 'Ты была права',
    artist: 'Баста',
    music:
      'https://song.muz-cafe.pro/download/d335323030343232b4303089b734803000/45634976ba0db23c3c0efc85bfccbc11/%D0%91%D0%B0%D1%81%D1%82%D0%B0%20-%20%D0%A2%D1%8B%20%D0%B1%D1%8B%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/25ccbd0e82301440e1b7619302caa51d1a17ff22ea80c4c48994169aab14abb4a23ebd264e27f98633f89e4de834f443f31016437933048d6d89a469063190e7bfc080c435cb6a45d685b15757ada2721f5eac9e0ff86938d017d0e0ee4587eecd190403ea9e4b9809a85bd5c4d38cd2e47752ea473269a988a48c0259f91eef95139a6fb67e793c19dce54581ba3ba7bb3637a732291ee7851b4756664ae7c908d56119b8b76db8f00a6f5f.jpg',
    name: 'Космос (feat. Charusha)',
    artist: 'Скриптонит',
    music:
      'https://song.muz-cafe.pro/download/3336373437313531338d3731353333323234300400/aedbe16b41906781cc7d8b6c16fa2026/%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%BD%D0%B8%D1%82%20-%20%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%20%28feat.%20Charusha%29.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/25c5b90ec2200000d0bfe9668182140662ea151375a83146a706392ad51e4ad1d6af77f02dcf87864f521e076f5eb273b16a6be0eace02c508470901efff6c8a0152546305c6b5df2e6ef27efdf8b8eaca99775f23281b288b9e413e5c3f0a4e23efca4660a6354c39b71426898506610821225362315588cb4815a171cfa297a5c88be1f0d9f7a7e49c377a5ddf76e92acd9664b3ad16f970b0f36096c70ceaaa8597a81f3b2364d0aefd01.jpg',
    name: 'Old Town Road',
    artist: 'Lil Nas X',
    music:
      'https://song.muz-cafe.pro/download/33313731b1b434b230883731353336353330350500/aedbe16b41906781cc7d8b6c16fa2026/Lil%20Nas%20X%20-%20Old%20Town%20Road.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/25c54dab82401400d07fe32ec7b4997b5b0c5104955041e10bdac47c29b7f22b9d4a7f7d8b7736a7f3d57c02d3d077eea51a0a4d5d322a9b9c19e49c2782bdffe710b198ab994e580660fbfda58511c37b532c3a1a9d14f81518b45e3da91fe45c041d1595d4564c0d4761f3d8592d944e40f19976917179828881b9f98ada5baf0a89f1671badeaf4129fe13c50f6688f6b70f8978e9bebe1043bdaea8c5cb95aa659d00f8d93ca5baa7f.jpg',
    name: 'Love the Way You Lie',
    artist: 'BROHM, PANE',
    music:
      'https://song.muz-cafe.pro/download/d335323030343037b7b0348e3737853000/b34690f6c1716a4c403bf5d6c0aa629c/BROHM%2C%20PANE%20-%20Love%20the%20Way%20You%20Lie.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/0dcc4d6f83201800e07fe36d7ea0a570204bd69abab135714bdbed641090bc7352aa122bbf7ebd3cc767f2963e912cf6931e8583585e870406d7254b1d2c3fd7942f5ffde88e6197969bdcd586571cd11cc9b7bedccb2529c969dffe488bc78ff8d799e709826698dc31896e5efcc1bc328aa3098c652a2538430fe923d8aa4276748b0aa9b16a55d6665d241b6fe1d6ccc2b04b685ecf5c82b87f86eabd1fd2b555f952727e44953be8e2dbecc2c5bd80873a9a57a799f00aaeff.jpg',
    name: 'Endorphin',
    artist: 'Andy Panda feat. Miyagi',
    music:
      'https://song.muz-cafe.pro/download/d33532303034373135b130883735873000/5e45888367cc3e3e44dbb9fc49e87122/Andy%20Panda%20feat.%20Miyagi%20-%20Endorphin.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/25c53b0e82300000d0dbb04129f43b34c6411d849890a8d1c5d47eb02050841af1f40ebee54da1e7719e84c9bca477891a3ae03a6f816288a49083f77f9ea600a2cc2a02be5ea29aea5d5cad93c6d7abc97d8d20ec43583406f974f32238892657f7826412de738d21c7c8e4d462693054d61892a58a6114a95be8dd789b652d28695879b51b5c60da55dba26cd1f1945dcacdfda187ea509c97f77e6ee9a22b16cd8b374206ed861f.jpg',
    name: 'The Magic Key',
    artist: 'T One',
    music:
      'https://song.muz-cafe.pro/download/3336373437313531318a37313533363036b5b00000/7f97e5d2e40a575888f507e7c31e51d0/T%20One%20-%20The%20Magic%20Key.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/25c53b0e83200000d0dbb855140161204d637fbab44387a68b1110433f8a088d7afa0e7dcb9b42cf3610c6616a5d634d2c870f301fab81a418671901dfff84a400628851027ca5b3712fca73b28b9fb6db4e666d39a133a1d1189ab7f10b67249a4cd7f3241724cb95a428a1902aad53c17285a8924c408d6024ebd09bb1f64dc72fb37f3cf4755fa05ab0bbb81d4ec20de5e8942b66fb42e4d0c2e3b72add8abbc82fb6e54d5066f801.jpg',
    name: 'Femme Like U',
    artist: 'Monaldin feat. Emma Peters',
    music:
      'https://song.muz-cafe.pro/download/33313731b1b43432308d3731353331313430340300/eb39d5709a5da6b647cb86cdd1883f19/Monaldin%20feat.%20Emma%20Peters%20-%20Femme%20Like%20U.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/25c5cb4ec4201400d0bfe9ae052f8f5e1664627cc54caad18589ab865286606ccb08cc14bfde8567735259558bbc2bc9fd98183abb2d242cf1442c8a1e00c9e57f868a0015bd43f2361c8fd6eefcf166ebbea23fa4f0ebb4c45d62732ee63be4aa956c52f0ab96bd30d4095082c1cc193f4d0813e316a8a47462d0d8b1ace13c66e3f57e2b76c46ac6bb7ccdcfd10deaa95edbc1cfef2faf9f79bc780f0f4bbbdcd78fd4e41a9d36650edb1f.jpg',
    name: 'Summer Jam',
    artist: 'Kaan Pars',
    music:
      'https://song.muz-cafe.pro/download/d33532303034b2343136368a3737853000/eb39d5709a5da6b647cb86cdd1883f19/Kaan%20Pars%20-%20Summer%20Jam.mp3?x=1',
  },
  {
    img: 'https://jpg.cofemuzik.pro/img/25c5c16ec2201800e0b7e96d059abf3f7020c699c6ecb2ecb018f562286087ad948ea2d6a7f7e077f9520ef203a1ccc9fdebe84b335e89bfc6333102102a4a6eef0522612d37b622308cddb4d9cfbc81f212bb55f24fa7503c501453d6839f1725b148be0b8ad71c50b7ce32e384ac6bc72b5a53291de567a0808539e5e0a7d3ac3b25f7d068f6fbf5677bfbf47d7b089f918de167731cbed376d9f5ebe6716f59164b53cc4b744a67ebc717.jpg',
    name: 'Midnight City',
    artist: 'M83',
    music:
      'https://song.muz-cafe.pro/download/3336373437313531368f37313533313336b0300200/eb39d5709a5da6b647cb86cdd1883f19/M83%20-%20Midnight%20City.mp3?x=1',
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

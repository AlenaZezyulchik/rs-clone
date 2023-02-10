import dragula from "dragula";
const main = document.getElementById("main") as HTMLElement;

const createInput = (): any => {
  return `<input class="wish-board__input" type="text" placeholder="search for..." name="key" autofocus="">
  <svg class="magnifying-glass" xmlns="http://www.w3.org/2000/svg" fill="#8f8f8f" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>`
};

const createWishBoard = () => {
  const wishBoardContainer = document.createElement("div") as HTMLDivElement;
  const wishBoardCanvas = document.createElement("div") as HTMLDivElement;
  const wishBoardDroppable = document.createElement("div") as HTMLDivElement;
  const wishBoardContent = document.createElement("div") as HTMLDivElement;
  const wishBoardImages = document.createElement("div") as HTMLDivElement;
  const wishBoardSearch = document.createElement("div") as HTMLDivElement;

  wishBoardContainer.classList.add("wish-board__container");
  wishBoardCanvas.classList.add("wish-board__canvas");
  wishBoardDroppable.classList.add("wish-board__droppable");
  wishBoardContent.classList.add("wish-board__content");
  wishBoardImages.classList.add("wish-board__images");
  wishBoardSearch.classList.add("wish-board__search");
  wishBoardSearch.innerHTML = createInput();

  main.append(wishBoardContainer);
  wishBoardContainer.append(wishBoardCanvas);
  wishBoardCanvas.append(wishBoardDroppable);
  wishBoardContainer.append(wishBoardContent);
  wishBoardContent.append(wishBoardImages);
  wishBoardContent.append(wishBoardSearch);

return wishBoardContainer;
};
createWishBoard();

const search = document.querySelector(".magnifying-glass") as HTMLIFrameElement;
const inputImage = document.querySelector(".wish-board__input") as HTMLInputElement;

export interface IPhoto {
  id: string;
  urls: {
    small: string
  }
};

let searchText = "nature";

const getPhotos = async(): Promise<{results:Array<IPhoto>}> => {
  const wishBoardImages = document.querySelector(".wish-board__images") as HTMLDivElement;
  wishBoardImages.innerHTML = "";
  if(inputImage.value.length > 0) {
    searchText = inputImage.value;
  } else if(inputImage.value.length == 0) {
    inputImage.value = "nature";
    searchText = inputImage.value;
  }
  const response = await fetch(`https://api.unsplash.com/search/photos/?query=${searchText}&per_page=20&client_id=Msagj66cewX23Jf0SGzKoFG5p75o1HKG5-Nt6b3G21I`);
  const data: {results:Array<IPhoto>}= await response.json();
  return data;
};

const loadImg = async () => {
  const wishBoardImages = document.querySelector(".wish-board__images") as HTMLDivElement;
  const photos = await getPhotos();
  console.log(photos)
  photos.results.forEach(photo => {
    const image = document.createElement("div") as HTMLDivElement;
    image.classList.add("wish-board__image");
    image.style.background = `url(${photo.urls.small})`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center";
    image.style.backgroundRepeat = "no-repeat";
    wishBoardImages.append(image);
  });
  };
loadImg();

search.addEventListener("click", loadImg);

inputImage.addEventListener('keydown', function(event){
  if (event.key === 'Enter')
      loadImg();
});

getPhotos();

window.onload = function() {
  dragula([
    document.querySelector(".wish-board__droppable") as HTMLDivElement,
    document.querySelector(".wish-board__images") as HTMLDivElement,
  ]),
  {
    moves: function () {
      return true;
    },
    accepts: function () {
      return true;
    },
    invalid: function () {
      return false;
    },
    direction: 'vertical',
    copy: false,
    copySortSource: false,
    revertOnSpill: true,
    removeOnSpill: false,
    mirrorContainer: document.body,
    ignoreInputTextSelection: true,
    slideFactorX: 0,
    slideFactorY: 0,
  }
}



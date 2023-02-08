import dragula from "dragula";
const main = document.querySelector("main") as HTMLElement;
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
    //image.draggable = true;
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
    moves: function (el: any, source: any, handle: any, sibling: any) {
      return true;
    },
    accepts: function (el: any, target: any, source: any, sibling: any) {
      return true;
    },
    invalid: function (el: any, handle: any) {
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



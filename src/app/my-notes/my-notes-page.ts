import { setNotesList, getALLNotes, NoteInfo, creatingNotesList, chooseNote, createNewNote, deleteSomeNote, sortNotes, countNotes } from './workplace-notes';

export const createMyNotesPage = () : HTMLElement => {
  const mainContainer = document.querySelector('.container__main') as HTMLElement;
  const myNotesBlock = document.createElement('div') as HTMLElement;
  const allNotesBlock = document.createElement('div') as HTMLElement;
  const creatingNoteBlock = document.createElement('div') as HTMLElement;

  myNotesBlock.classList.add('my-notes-container');
  allNotesBlock.classList.add('all-notes-container');
  creatingNoteBlock.classList.add('creating-note-container');

  myNotesBlock.append(allNotesBlock);
  myNotesBlock.append(creatingNoteBlock);
  allNotesBlock.innerHTML = `<div class="noteslist-descr">
  <div class="noteslist-title">
  <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.798 0h10.5a2 2 0 012 2v10.497h-4a.75.75 0 00-.75.75v4.749h-7.75a2 2 0 01-2-2V2a2 2 0 012-2zm8.445 5.5a.75.75 0 000-1.5H4.757a.75.75 0 100 1.5h6.486zm.75 3.502a.75.75 0 01-.75.75H4.757a.75.75 0 110-1.5h6.486a.75.75 0 01.75.75zm-5.236 4.99a.75.75 0 000-1.5h-2a.75.75 0 000 1.5h2z" fill="currentColor"></path><path d="M12.048 13.997h2.588l-2.528 3.231-.06.073v-3.304z" fill="currentColor"></path></svg> Notes</div>
  <button class="noteslist-add-note button">Add New Note</button>
  <div class="noteslist-info">
    <span class="count-noteslist-container"></span>
    <svg class="noteslist-sort" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zM11.625 12.5a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z" fill="white"></path></svg>
  </div>
  </div>
  <div class="noteslist"></div>`;
  creatingNoteBlock.innerHTML = `<div class="buttons-container">
  <button id="bold" class="click-button button">
    <i class="fa-solid fa-bold"></i>
  </button>
  <button id="italic" class="click-button button">
    <i class="fa-solid fa-italic"></i>
  </button>
  <button id="superscript" class="click-button button">
    <i class="fa-solid fa-superscript"></i>
  </button>
  <button id="subscript" class="click-button button">
    <i class="fa-solid fa-subscript"></i>
  </button>
  <button id="undo" class="click-button button">
    <i class="fa-solid fa-rotate-left"></i>
  </button>
  <button id="redo" class="click-button button">
    <i class="fa-solid fa-rotate-right"></i>
  </button>
  <button id="justifyLeft" class="click-button button">
    <i class="fa-solid fa-align-left"></i>
  </button>
  <button id="justifyCenter" class="click-button button">
    <i class="fa-solid fa-align-center"></i>
  </button>
  <button id="justifyRight" class="click-button button">
    <i class="fa-solid fa-align-right"></i>
  </button>
  <button id="justifyFull" class="click-button button">
    <i class="fa-solid fa-align-justify"></i>
  </button>
  <select id="fontSize" class="change-button select-button">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3" selected="selected">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
  </select>
  <select id="fontName" class="change-button select-button">
    <option value="Times New Roman">Times New Roman</option>
    <option value="Helvetica">Helvetica</option>
    <option value="Garamond">Garamond</option>
    <option value="Arial" selected="selected">Arial</option>
    <option value="Verdana">Verdana</option>
    <option value="Rockwell">Rockwell</option>
  </select>
  <div class="input-container">
    <input type="color" id="foreColor" class="set-text-color color-button" />
    <label for="foreColor">Font Color</label>
  </div>
  <div class="input-container">
    <input type="color" id="backColor" class="change-button color-button" />
    <label for="backColor">Highlight Color</label>
  </div>
  </div>
  <div class="text-note" id="0" contenteditable="true"> Note 1 - ${new Date ().toLocaleString()} </div>
  <button id="justifyFull" class="submit-button">Save</button>`
  mainContainer.append(myNotesBlock);

  creatingNotesList(getALLNotes());
  editingNotes();
  getALLNotes();
  setNotesList();
  chooseNote();
  createNewNote();
  deleteSomeNote();
  sortNotes();
  countNotes();
  return myNotesBlock;
};

function editingNotes () {
  let clickButtons = document.querySelectorAll(".click-button") as NodeListOf<HTMLButtonElement>;
  let changeButtons = document.querySelectorAll(".change-button") as NodeListOf<HTMLButtonElement>;
  let colorButton = document.querySelector(".set-text-color") as HTMLButtonElement;

  const styleText = (commandName: string , showDefaultUI: boolean, valueArgument?: string) => {
    document.execCommand(commandName, showDefaultUI, valueArgument);
  };

  clickButtons.forEach((elem) => {
    elem.addEventListener("click", () => {
      styleText(elem.id, false);
    });
  });

  changeButtons.forEach((elem) => {
    elem.addEventListener("change", () => {
      styleText(elem.id, false, elem.value);
    });
  });

  colorButton.addEventListener("change", () => {
    document.execCommand('styleWithCSS', false);
    styleText(colorButton.id, false, colorButton.value);
  });
};

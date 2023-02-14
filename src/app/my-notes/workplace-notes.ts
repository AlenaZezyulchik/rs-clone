
export interface NoteInfo {
  text: string;
  id: number;
  date: number;
}

export const getALLNotes = ()=> {
  const notesArray: string = localStorage.getItem('note-array') || '[]';
  const notes:Array <NoteInfo> = JSON.parse(notesArray);
  return notes;
}

export const creatingNotesList = (arr: Array<NoteInfo>) => {
  const notesListcontainer = document.querySelector('.noteslist') as HTMLElement;
  notesListcontainer.innerHTML = ''; 
  arr.forEach(elem => {
    const notecontainer = document.createElement('div') as HTMLElement;
    notecontainer.classList.add('note-container')
    notesListcontainer.append(notecontainer)
    notecontainer.innerHTML = `<div class="noteslist-title-delete"><div class="noteslist-notename">${elem.text}</div>
    <div class="noteslist-delete"></div></div>
    <div class="noteslist-date">${new Date(elem.date).toLocaleString()}</div>`
    notecontainer.id = `${elem.id}`
  })
}

const addToAllNotes = (obj: NoteInfo)=> {
  const notesArray: string = localStorage.getItem('note-array') || '[]';
  const notes:Array <NoteInfo> = JSON.parse(notesArray);
  notes.push(obj);
  localStorage.setItem('note-array', JSON.stringify(notes))
}

const deleeteFromNotes = (obj: NoteInfo) => {
  const notesArray: string = localStorage.getItem('note-array') || '[]';
  const notes:Array <NoteInfo> = JSON.parse(notesArray);
  const newNotes = notes.filter(elem => elem.id != obj.id);
  localStorage.setItem('note-array', JSON.stringify(newNotes))
}

export const setNotesList = () => {
  const saveButton = document.querySelector('.submit-button') as HTMLButtonElement;
  const textNoteFeald = document.querySelector('.text-note') as HTMLElement;
  saveButton.addEventListener('click', ()=> {
    const textNoteElem = document.querySelector('.text-note') as HTMLElement;
    const textNoteInnerHTML = textNoteElem !== null ? textNoteElem.innerHTML : ' ';
    const textNoteID = Math.floor(Math.random()*1000000);
    const textNoteDate = new Date().getTime()
    let NoteObj: NoteInfo = {
      text: textNoteInnerHTML,
      id: textNoteID,
      date: textNoteDate,
    }
    if (Number(textNoteFeald.id)) {
      const arr = getALLNotes();
      let newArr = arr.map(elem => {
        if(Number(textNoteFeald.id) === Number(elem.id)) {
          elem.text = textNoteFeald.innerHTML;
          elem.date = new Date().getTime();
        }
        return elem;
      })
      localStorage.setItem('note-array', JSON.stringify(newArr));
    } else {
      addToAllNotes(NoteObj);
    }
    creatingNotesList(getALLNotes());
    chooseNote();
    deleteSomeNote();
    countNotes();
  })
}

export const chooseNote = () => {
  const arr = getALLNotes();
  const notesListcontainers = document.querySelectorAll('.note-container') as NodeListOf<HTMLElement>;
  notesListcontainers.forEach((elem, index) => {
    elem.addEventListener('click', ()=> {
      const textNoteFeald = document.querySelector('.text-note') as HTMLElement;
      textNoteFeald.innerHTML = `${arr[index].text}`;
      textNoteFeald.id = `${arr[index].id}`
    })
  })
}

export const createNewNote = () => {
  const newNoteButton = document.querySelector('.noteslist-add-note') as HTMLButtonElement;
  newNoteButton.addEventListener('click', ()=> {
    const newNoteId = 0;
    const textNoteFeald = document.querySelector('.text-note') as HTMLElement;
    textNoteFeald.id = `${newNoteId}`;
    textNoteFeald.innerHTML = ``;
  })
}

export const deleteSomeNote = () => {
  const deleteNoteButtons = document.querySelectorAll('.noteslist-delete') as NodeListOf<HTMLElement>;
  deleteNoteButtons.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      const arr = getALLNotes();
      arr.splice(index, 1);
      localStorage.setItem('note-array', JSON.stringify(arr));
      creatingNotesList(getALLNotes());
      deleteSomeNote();
      chooseNote();
      countNotes();
      e.stopPropagation();
    })
  })
}

export const sortNotes = () => {
  const sortButton = document.querySelector('.noteslist-sort') as HTMLButtonElement;
  let isSorted = true;
  sortButton.addEventListener('click', () => {
    const arr: Array<NoteInfo> = getALLNotes();
    if (isSorted) {
      arr.sort((a,b) => a.date - b.date);
      isSorted = false;
    } else {
      arr.sort((a,b) => b.date - a.date);
      isSorted = true;
    }
    localStorage.setItem('note-array', JSON.stringify(arr));
      creatingNotesList(getALLNotes());
      deleteSomeNote();
      chooseNote();
  })
}

export const countNotes = () => {
  const countContainer = document.querySelector('.count-noteslist-container') as HTMLButtonElement;
  const arr = getALLNotes();
  if (arr.length > 1) {
    countContainer.innerHTML = `${arr.length} Notes`
  } else {
    countContainer.innerHTML = `${arr.length} Note`
  }
}
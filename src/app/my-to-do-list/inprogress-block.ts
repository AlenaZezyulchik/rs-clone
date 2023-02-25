import { todoItemInfo, creatingTodoItemsList, getALLTodoItems, addTodoAllItems } from './blocks-lists';

export const createNewInProgressNote = () => {
  const inprogressInput= document.querySelector('.inprogress-input') as HTMLInputElement;
  inprogressInput.addEventListener('keyup', (event)=> {
    if (event.key === 'Enter') {
      const itemID = Math.floor(Math.random()*1000000);
      const itemDate = new Date().getTime();
      let NoteObj: todoItemInfo = {
        text: inprogressInput.value,
        id: itemID,
        date: itemDate,
        block: inprogressInput.id
      };
      addTodoAllItems(NoteObj);
      creatingTodoItemsList(getALLTodoItems())
    }
  })
};
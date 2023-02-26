import { todoItemInfo, creatingTodoItemsList, getALLTodoItems, addTodoAllItems, moveToNextBlock, deleteSomeItem } from './blocks-lists';

export const createNewInProgressNote = () => {
  const inprogressInput= document.querySelector('.inprogress-input') as HTMLInputElement;
  const inprogressButton = document.querySelector('.inprogress-button') as HTMLButtonElement;
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
      inprogressButton.classList.toggle('inactive-todo-elem');
      inprogressInput.classList.toggle('active-todo-elem');
      inprogressInput.value = '';
      addTodoAllItems(NoteObj);
      creatingTodoItemsList(getALLTodoItems());
      moveToNextBlock();
      deleteSomeItem();
    }
  })
};
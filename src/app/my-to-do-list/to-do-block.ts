import { todoItemInfo, creatingTodoItemsList, getALLTodoItems, addTodoAllItems, moveToNextBlock, deleteSomeItem } from './blocks-lists';


export const createNewNote = () => {
  const todoInput= document.querySelector('.todo-input') as HTMLInputElement;
  const todoButton = document.querySelector('.todo-button') as HTMLButtonElement;
  todoInput.addEventListener('keyup', (event)=> {
    if (event.key === 'Enter') {
      const itemID = Math.floor(Math.random()*1000000);
      const itemDate = new Date().getTime();
      let NoteObj: todoItemInfo = {
        text: todoInput.value,
        id: itemID,
        date: itemDate,
        block: todoInput.id
      };
      todoButton.classList.toggle('inactive-todo-elem');
      todoInput.classList.toggle('active-todo-elem');
      todoInput.value = '';
      addTodoAllItems(NoteObj);
      creatingTodoItemsList(getALLTodoItems());
      moveToNextBlock();
      deleteSomeItem();
    }
  })
};
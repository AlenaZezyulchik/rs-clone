import { todoItemInfo, creatingTodoItemsList, getALLTodoItems, addTodoAllItems } from './blocks-lists';


export const createNewNote = () => {
  const todoInput= document.querySelector('.todo-input') as HTMLInputElement;
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
      addTodoAllItems(NoteObj);
      creatingTodoItemsList(getALLTodoItems())
    }
  })
};
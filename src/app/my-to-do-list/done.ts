import { todoItemInfo, creatingTodoItemsList, getALLTodoItems, addTodoAllItems } from './blocks-lists';

export const createNewDoneNote = () => {
  const doneInput= document.querySelector('.done-input') as HTMLInputElement;
  doneInput.addEventListener('keyup', (event)=> {
    if (event.key === 'Enter') {
      const itemID = Math.floor(Math.random()*1000000);
      const itemDate = new Date().getTime();
      let NoteObj: todoItemInfo = {
        text: doneInput.value,
        id: itemID,
        date: itemDate,
        block: doneInput.id
      };
      addTodoAllItems(NoteObj);
      creatingTodoItemsList(getALLTodoItems())
    }
  })
};

export const useMoreItemButton = () => {
  const moreItemButtons= document.querySelectorAll('.todo-item-more-button') as NodeListOf<HTMLElement>;
  moreItemButtons.forEach(elem => {
    elem.addEventListener('click', () => {
      console.log(elem)
      const moreListOfButtons= elem.querySelector('.todo-item-more-list') as HTMLElement;
      moreListOfButtons.classList.toggle('active-todo-elem')
    })
  })

}
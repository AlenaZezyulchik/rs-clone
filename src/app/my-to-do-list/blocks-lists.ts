import { LanguageType } from "../router/router";

export interface todoItemInfo {
  text: string;
  id: number;
  date: number;
  block: string
};

export const showToDoInput = () => {
  const todoButton = document.querySelector('.todo-button') as HTMLButtonElement;
  const todoInput = document.querySelector('.todo-input') as HTMLInputElement;
  const inprogressButton = document.querySelector('.inprogress-button') as HTMLButtonElement;
  const inprogressInput = document.querySelector('.inprogress-input') as HTMLInputElement;
  const doneButton = document.querySelector('.done-button') as HTMLButtonElement;
  const doneInput = document.querySelector('.done-input') as HTMLInputElement;
  todoButton.addEventListener('click', ()=> {
    todoButton.classList.toggle('inactive-todo-elem')
    todoInput.classList.toggle('active-todo-elem')
  })
  inprogressButton.addEventListener('click', ()=> {
    inprogressButton.classList.toggle('inactive-todo-elem')
    inprogressInput.classList.toggle('active-todo-elem')
  })
  doneButton.addEventListener('click', ()=> {
    doneButton.classList.toggle('inactive-todo-elem')
    doneInput.classList.toggle('active-todo-elem')
  })
}

export const getALLTodoItems = () => {
  const todoArray: string = localStorage.getItem('todo-array') || '[]';
  const TodoItems:Array <todoItemInfo> = JSON.parse(todoArray);
  return TodoItems;
};

export const addTodoAllItems = (obj: todoItemInfo)=> {
  const itemsArray: string = localStorage.getItem('todo-array') || '[]';
  const items:Array <todoItemInfo> = JSON.parse(itemsArray);
  items.push(obj);
  localStorage.setItem('todo-array', JSON.stringify(items))
};

export const creatingTodoItemsList = (arr: Array<todoItemInfo>) => {
  const todoListcontainer = document.querySelector('.todo-items-list') as HTMLElement;
  const inprogressListcontainer = document.querySelector('.inprogress-items-list') as HTMLElement;
  const doneListcontainer = document.querySelector('.done-items-list') as HTMLElement;
  todoListcontainer.innerHTML = '';
  inprogressListcontainer.innerHTML = '';
  doneListcontainer.innerHTML = ''; 
  arr.forEach(elem => {
    const itemcontainer = document.createElement('div') as HTMLElement;
    itemcontainer.classList.add('item-todolist-container');
    if (elem.block ==='todo') {
      todoListcontainer.append(itemcontainer);
      itemcontainer.innerHTML = `<div class="todolist-title-delete"><div class="todolist-itemname">${elem.text}</div>
      <div class="more-container">
      <svg role="img" class="todo-item-more-button" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
      </svg>
      <div class = "todo-item-more-list"><div class = "todo-item-more-change-in-Progress item-more-button" id = "${elem.id}">Move to in Progress</div>
      <div class = "todo-item-more-change-done item-more-button" id = "${elem.id}">Move to Done</div>
      <div class = "todo-item-more-delete item-more-button" id = "${elem.id}">Delete</div>
      </div></div>
      </div></div>
      <div class="noteslist-date">${new Date(elem.date).toLocaleString()}</div>`;
      itemcontainer.id = `${elem.id}`;
    } else if (elem.block ==='inprogress') {
      inprogressListcontainer.append(itemcontainer);
      itemcontainer.innerHTML = `<div class="todolist-title-delete"><div class="todolist-itemname">${elem.text}</div>
      <div class="more-container">
      <svg role="img" class="todo-item-more-button" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
      </svg>
      <div class = "todo-item-more-list"><div class = "todo-item-more-change-todo item-more-button" id = "${elem.id}">Move to Todo</div>
      <div class = "todo-item-more-change-done item-more-button" id = "${elem.id}">Move to Done</div>
      <div class = "todo-item-more-delete item-more-button" id = "${elem.id}">Delete</div>
      </div></div>
      </div></div>
      <div class="noteslist-date">${new Date(elem.date).toLocaleString()}</div>`;
      itemcontainer.id = `${elem.id}`;
    } else {
      doneListcontainer.append(itemcontainer);
      itemcontainer.innerHTML = `<div class="todolist-title-delete"><div class="todolist-itemname">${elem.text}</div>
      <div class="more-container">
      <svg role="img" class="todo-item-more-button" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
      </svg>
      <div class = "todo-item-more-list"><div class = "todo-item-more-change-todo item-more-button" id = "${elem.id}">Move to Todo</div>
      <div class = "todo-item-more-change-in-Progress item-more-button" id = "${elem.id}">Move to in Progress</div>
      <div class = "todo-item-more-delete item-more-button" id = "${elem.id}">Delete</div>
      </div></div>
      </div></div>
      <div class="noteslist-date">${new Date(elem.date).toLocaleString()}</div>`;
      itemcontainer.id = `${elem.id}`;
    }
  });
};

export const deleteSomeItem = () => {
  const deleteItemButtons = document.querySelectorAll('.todo-item-more-delete') as NodeListOf<HTMLElement>;
  deleteItemButtons.forEach((elem) => {
    elem.addEventListener('click', () => {
      const arr = getALLTodoItems();
      let index = arr.findIndex(item => item.id === +elem.id);
      arr.splice(index, 1);
      localStorage.setItem('todo-array', JSON.stringify(arr));
      creatingTodoItemsList(getALLTodoItems());
      deleteSomeItem();
      moveToNextBlock();
    });
  });
};

export const moveToNextBlock = () => {
  const moveToInprogress = document.querySelectorAll('.todo-item-more-change-in-Progress') as NodeListOf<HTMLElement>;
  moveToInprogress.forEach((elem) => {
    elem.addEventListener('click', () => {
      const arr = getALLTodoItems();
      let index = arr.findIndex(item => item.id === +elem.id);
      arr[index].block = 'inprogress'
      localStorage.setItem('todo-array', JSON.stringify(arr));
      creatingTodoItemsList(getALLTodoItems());
      deleteSomeItem();
      moveToNextBlock();
    });
  });

  const moveToDone = document.querySelectorAll('.todo-item-more-change-done') as NodeListOf<HTMLElement>;
  moveToDone.forEach((elem) => {
    elem.addEventListener('click', () => {
      const arr = getALLTodoItems();
      let index = arr.findIndex(e => e.id === +elem.id);
      arr[index].block = 'done'
      localStorage.setItem('todo-array', JSON.stringify(arr));
      creatingTodoItemsList(getALLTodoItems());
      deleteSomeItem();
      moveToNextBlock()
    });
  });

  const moveTodo = document.querySelectorAll('.todo-item-more-change-todo') as NodeListOf<HTMLElement>;
  moveTodo.forEach((elem) => {
    elem.addEventListener('click', () => {
      const arr = getALLTodoItems();
      let index = arr.findIndex(e => e.id === +elem.id);
      arr[index].block = 'todo'
      localStorage.setItem('todo-array', JSON.stringify(arr));
      creatingTodoItemsList(getALLTodoItems());
      deleteSomeItem();
      moveToNextBlock();
    });
  });
}

export const deleteAllBlockItems = () => {
  const delAllBlockItemsButtons = document.querySelectorAll('.block-delete-button') as NodeListOf<HTMLElement>;
  delAllBlockItemsButtons.forEach((elem) => {
    elem.addEventListener('click', () => {
      const arr = getALLTodoItems();
      let newArr = arr.filter((item) => item.block !== elem.id);
      localStorage.setItem('todo-array', JSON.stringify(newArr));
      creatingTodoItemsList(getALLTodoItems());
      deleteSomeItem();
      moveToNextBlock();
    });
  })
}

export const translateToDoButtons = (lang: LanguageType) => {
  const todoContainer = document.querySelector('.my-todolist-container') as HTMLDivElement;
  if(todoContainer) {
    const toDoListButtons = document.querySelectorAll('.todolist-button') as NodeListOf<HTMLButtonElement>;
    toDoListButtons.forEach(toDoListButton => {
      toDoListButton.innerHTML = (lang === 'en') ? 'Add item' : (lang === 'ru') ? 'Добавить заметку' : '';
    })
  }
};

export const translateToDoListBlockText = (lang: LanguageType) => {
  const todoContainer = document.querySelector('.my-todolist-container') as HTMLDivElement;
  if(todoContainer) {
    const toDoTitleText = document.querySelector('.todo-container .todolist-block-text') as HTMLSpanElement;
    const inProgressTitleText = document.querySelector('.in-progress-container .todolist-block-text') as HTMLSpanElement;
    const doneTitleText = document.querySelector('.done-container .todolist-block-text') as HTMLSpanElement;

    toDoTitleText.innerHTML = (lang === 'en') ? 'This item has not been started' : (lang === 'ru') ? 'Это планируется выполнить' : '';
    inProgressTitleText.innerHTML = (lang === 'en') ? 'This is actively being worked on' : (lang === 'ru') ? 'Над этим активно работают' : '';
    doneTitleText.innerHTML = (lang === 'en') ? 'This has been completed' : (lang === 'ru') ? 'Это было завершено' : '';
  }
};

export const translateToDoListTitleText = (lang: LanguageType) => {
  const todoContainer = document.querySelector('.my-todolist-container') as HTMLDivElement;
  if(todoContainer) {
    const toDoTitle = document.querySelector('.todo-container .noteslist-title-text') as HTMLSpanElement;
    const inProgressTitle = document.querySelector('.in-progress-container .noteslist-title-text') as HTMLSpanElement;
    const doneTitle = document.querySelector('.done-container .noteslist-title-text') as HTMLSpanElement;

    toDoTitle.innerHTML = (lang === 'en') ? 'ToDo' : (lang === 'ru') ? 'Сделать' : '';
    inProgressTitle.innerHTML = (lang === 'en') ? 'In Progress' : (lang === 'ru') ? 'В процессе' : '';
    doneTitle.innerHTML = (lang === 'en') ? 'Done' : (lang === 'ru') ? 'Выполнено' : '';
  }
};

export const translateToDoListMoveToInProgress = (lang: LanguageType) => {
  const todoContainer = document.querySelector('.my-todolist-container') as HTMLDivElement;
  if(todoContainer) {
    const moveToToDo = document.querySelectorAll(".todo-item-more-change-todo") as NodeListOf<HTMLButtonElement>;
    moveToToDo.forEach(elem => {
      elem.innerHTML = (lang === 'en') ? 'Move to ToDo' : (lang === 'ru') ? 'Переместить в "Сделать"' : '';
    })
    const moveToInProgress = document.querySelectorAll(".todo-item-more-change-in-Progress") as NodeListOf<HTMLButtonElement>;
    moveToInProgress.forEach(elem => {
      elem.innerHTML = (lang === 'en') ? 'Move to in Progress' : (lang === 'ru') ? 'Переместить в "В процессе"' : '';
    })
    const moveToInDone = document.querySelectorAll(".todo-item-more-change-done") as NodeListOf<HTMLButtonElement>;
    moveToInDone.forEach(elem => {
      elem.innerHTML = (lang === 'en') ? 'Move to Done' : (lang === 'ru') ? 'Переместить в "Выполненные"' : '';
    })
    const deleteItemInTodoList = document.querySelectorAll(".todo-item-more-delete") as NodeListOf<HTMLButtonElement>;
    deleteItemInTodoList.forEach(elem => {
      elem.innerHTML = (lang === 'en') ? 'Delete' : (lang === 'ru') ? 'Удалить' : '';
    })
  }
};

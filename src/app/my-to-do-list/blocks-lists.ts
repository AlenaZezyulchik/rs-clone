
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
      console.log(arr[index])
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
      console.log(arr[index]);
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
      console.log(arr[index]);
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
      console.log(arr[index]);
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
      console.log(newArr)
      localStorage.setItem('todo-array', JSON.stringify(newArr));
      creatingTodoItemsList(getALLTodoItems());
      deleteSomeItem();
      moveToNextBlock();
    });
  })
}
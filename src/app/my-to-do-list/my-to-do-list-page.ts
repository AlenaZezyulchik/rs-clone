import { createNewNote } from './to-do-block';
import { createNewInProgressNote } from './inprogress-block';
import { createNewDoneNote } from './done';

import { showToDoInput, creatingTodoItemsList, getALLTodoItems, deleteSomeItem, moveToNextBlock, deleteAllBlockItems, translateToDoButtons, translateToDoListBlockText, translateToDoListTitleText, translateToDoListMoveToInProgress } from './blocks-lists';
import { LanguageType } from '../router/router';
import { changeThemeToDoAddInput, changeThemeToDoListBackground } from '../themes/themes';

export const createMyToDoListPage = (): HTMLElement => {
  const mainContainer = document.querySelector('.container__main') as HTMLElement;
  const myToDoListContainer = document.createElement('div') as HTMLDivElement;
  const myToDoBlock = document.createElement('div') as HTMLDivElement;
  const inProgressBlock = document.createElement('div') as HTMLDivElement;
  const doneBlock = document.createElement('div') as HTMLDivElement;

  myToDoListContainer.classList.add('my-todolist-container');
  myToDoBlock.classList.add('todo-container');
  inProgressBlock.classList.add('in-progress-container');
  doneBlock.classList.add('done-container');

  myToDoListContainer.append(myToDoBlock);
  myToDoListContainer.append(inProgressBlock);
  myToDoListContainer.append(doneBlock);
  myToDoBlock.innerHTML = `<div class="todolist-block-descr">
  <div class="noteslist-title">
  <span class="todolist-block-decor"></span> <span class="noteslist-title-text">ToDo</span><div class="more-main-container more-container">
  <svg role="img" class="todo-item-more-button" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
  </svg>
  <div class="todo-item-more-list">
  <div class="todo-block-more-delete block-delete-button" id = "todo">Delete all Todo items</div>
  </div></div> <br>
  <span class="todolist-block-text">This item hasn't been started</span></div>
  </div>
  <div class="todolist-items-list todo-items-list"></div>
  <input class="todo-input" type="text" id="todo" placeholder="Add your item">
  <button class="todolist-button todo-button">Add item</button>`;
  inProgressBlock.innerHTML = `<div class="todolist-block-descr">
  <div class="noteslist-title">
  <span class="todolist-block-decor progeress-decor"></span> <span class="noteslist-title-text">In Progress</span><div class="more-main-container more-container">
  <svg role="img" class="todo-item-more-button" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
  </svg>
  <div class="todo-item-more-list">
  <div class="todo-block-more-delete block-delete-button" id = "inprogress">Delete all In Progress items</div>
  </div></div> <br>
  <span class="todolist-block-text">This is actively being worked on</span></div>
  </div>
  <div class="todolist-items-list inprogress-items-list"></div>
  <input class="inprogress-input" type="text" id="inprogress" placeholder="Add your item">
  <button class="todolist-button inprogress-button">Add item</button>`;
  doneBlock.innerHTML = `<div class="todolist-block-descr">
  <div class="noteslist-title">
  <span class="todolist-block-decor done-decor"></span> <span class="noteslist-title-text">Done</span> <div class="more-main-container more-container">
  <svg role="img" class="todo-item-more-button" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
  </svg>
  <div class="todo-item-more-list">
  <div class="todo-block-more-delete block-delete-button" id = "done">Delete all Done items</div>
  </div></div>  <br>
  <span class="todolist-block-text">This has been completed</span></div>
  </div>
  <div class="todolist-items-list done-items-list"></div>
  <input class="done-input" type="text" id="done" placeholder="Add your item">
  <button class="todolist-button done-button">Add item</button>`;

  const lang = localStorage.getItem('lang') as LanguageType;
  const toDoListInput = myToDoListContainer.querySelector('.todo-input') as HTMLElement;
  const inProgressInput = myToDoListContainer.querySelector('.inprogress-input') as HTMLElement;
  const doneInput = myToDoListContainer.querySelector('.done-input') as HTMLElement; 
  mainContainer.prepend(myToDoListContainer);
  showToDoInput();
  createNewNote();
  createNewInProgressNote();
  createNewDoneNote();
  creatingTodoItemsList(getALLTodoItems());
  moveToNextBlock();
  deleteSomeItem();
  deleteAllBlockItems();
  translateToDoButtons(lang);
  translateToDoListBlockText(lang);
  translateToDoListTitleText(lang);
  translateToDoListMoveToInProgress(lang);
  changeThemeToDoListBackground(myToDoBlock, inProgressBlock, doneBlock);
  changeThemeToDoAddInput(toDoListInput);
  changeThemeToDoAddInput(inProgressInput);
  changeThemeToDoAddInput(doneInput);

  return myToDoListContainer;
};

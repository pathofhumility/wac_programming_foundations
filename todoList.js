"use strict";

var todos = [];

function displayTodos() {
  let todo;
  let completed;
  let todoLi;
  let xButton;
  let todosListUl = document.getElementById('todos-list-ul');

  todosListUl.innerHTML = "";

  for(let i = 0; i < todos.length; i++) {
    todoLi = document.createElement('li');

    xButton = document.createElement('button');
    xButton.innerText = 'x';
    xButton.setAttribute('id', i);
    // alternate way to set id
    // xButton.id = i;
    xButton.addEventListener('click', remove);

    completed = todos[i].completed ? '[x]' : '[ ]';
    // todoLi.innerText = `${completed} ${todos[i].todoText}`;
    todo = document.createTextNode(` ${completed} ${todos[i].todoText}`);
    todoLi.appendChild(xButton);
    todoLi.appendChild(todo);

    todosListUl.appendChild(todoLi);
  }
}

function add() {
  let initialTodoText = addInput.value;
  todos.push({todoText: initialTodoText, completed: false});
  addInput.value = "";
  displayTodos();
}

function edit() {
  let index = editInputIndex.value;
  let editedTodoText = editInput.value;
  todos[index].todoText = editedTodoText;
  editInputIndex.value = "";
  editInput.value = "";
  displayTodos();  
}

function remove(event) {
  let index = event.currentTarget.id;
  todos.splice(index, 1);
  displayTodos();
}

function toggle() {
  let index = toggleInputIndex.value;
  todos[index].completed = !todos[index].completed;
  toggleInputIndex.value = "";
  displayTodos();
}

function toggleAll() {
  let completedTodos = false;

  for(let i = 0; i < todos.length; i++) {
    // logic: if any todo is incomplete(false), all will be toggled to complete(true)
    if(!todos[i].completed) {
      completedTodos = true;
      break;
    }
  }

  for(let i = 0; i < todos.length; i++) {
    todos[i].completed = completedTodos;
  }
  displayTodos();
}

var toggleAllButton    = document.getElementById('toggle-all-button');
toggleAllButton.addEventListener('click', toggleAll);

var addTodoButton      = document.getElementById('add-todo-button');
var addInput           = document.getElementById('add-input');
addTodoButton.addEventListener('click', add);

var editTodoButton     = document.getElementById('edit-todo-button');
var editInputIndex     = document.getElementById('edit-index');
var editInput          = document.getElementById('edit-input');
editTodoButton.addEventListener('click', edit);

// var deleteTodoButton   = document.getElementById('delete-todo-button');
// var deleteInputIndex   = document.getElementById('delete-index');
// deleteTodoButton.addEventListener('click', remove);

var toggleTodoButton   = document.getElementById('toggle-todo-button');
var toggleInputIndex   = document.getElementById('toggle-index');
toggleTodoButton.addEventListener('click', toggle);

// var displayTodosButton = document.getElementById('display-todos-button');
// displayTodosButton.addEventListener('click', displayTodos);
"use strict";

var todos = [{todoText: 'Item 1', completed: false}];

function displayTodos() {
  console.log('My todos:');
  for(let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}.) ${todos[i].todoText} Completed: ${todos[i].completed}`);
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

function remove() {
  let index = deleteInputIndex.value;
  todos.splice(index, 1);
  deleteInputIndex.value = "";
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

var deleteTodoButton   = document.getElementById('delete-todo-button');
var deleteInputIndex   = document.getElementById('delete-index');
deleteTodoButton.addEventListener('click', remove);

var toggleTodoButton   = document.getElementById('toggle-todo-button');
var toggleInputIndex   = document.getElementById('toggle-index');
toggleTodoButton.addEventListener('click', toggle);

var displayTodosButton = document.getElementById('display-todos-button');
displayTodosButton.addEventListener('click', displayTodos);
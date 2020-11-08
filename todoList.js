"use strict";

var todos = [{todoText: 'Item 1', completed: false}];

function displayTodos() {
  console.log('My todos:');
  for(let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}.) ${todos[i].todoText} Completed: ${todos[i].completed}`);
  }
}

function add(initialTodoText) { 
  todos.push({todoText: initialTodoText, completed: false});
  displayTodos();
}

function edit(index, editedTodoText) {
  todos[index].todoText = editedTodoText;
  displayTodos();  
}

function remove(index) {
  todos.splice(index, 1);
  displayTodos();
}

function toggle(index) {
  todos[index].completed = !todos[index].completed;
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
var displayTodosButton = document.getElementById('display-todos-button');

toggleAllButton.addEventListener('click', toggleAll);
displayTodosButton.addEventListener('click', displayTodos);
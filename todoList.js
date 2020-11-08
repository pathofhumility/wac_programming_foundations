"use strict";

var todos = [{todoText: 'Item 1', completed: false}];

displayTodos();

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
  let completed = false;

  for(let i = 0; i < todos.length; i++) {
    if(todos[i].completed === false) {
      completed = true;
      break;
    }
  }

  for(let i = 0; i < todos.length; i++) {
    todos[i].completed = completed;
  }
  displayTodos();
}

function weirdToggleAll() {
  var completedTodos = 0;
  var allCompleted = true;

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed !== false) {
      completedTodos++;
    }

    if (completedTodos !== i + 1) {
      allCompleted = false;
    }
  }

  if (allCompleted === true) {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = false;
    }
  } else {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = true;  
    }
  }

  displayTodos();
}
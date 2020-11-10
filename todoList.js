"use strict";

var todos = [];

function displayTodos() {
  let todo;
  let completed;
  let todoLi;
  let toggleAllButton;
  let xButton;
  let toggleButton;
  let editButton;
  let todosListUl = document.getElementById('todos-list-ul');

  todosListUl.innerHTML = "";

  toggleAllButton = document.createElement('button');
  toggleAllButton.innerText = 'Toggle All';
  toggleAllButton.addEventListener('click', toggleAll);
  var toggleDiv = document.getElementById('toggle-all-div');
  toggleDiv.innerHTML = "";
  if (todos.length !== 0) {
    toggleDiv.appendChild(toggleAllButton);
  }

  for(let i = 0; i < todos.length; i++) {
    todoLi = document.createElement('li');

    xButton = document.createElement('button');
    xButton.innerText = 'x';
    xButton.setAttribute('id', `remove-${i}`);
    // alternate way to set id
    // xButton.id = i;
    xButton.addEventListener('click', remove);

    toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle';
    toggleButton.setAttribute('id', `toggle-${i}`);
    toggleButton.addEventListener('click', toggle);

    editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.setAttribute('id', `edit-${i}`);
    editButton.addEventListener('click', edit);

    completed = todos[i].completed ? '[x]' : '[ ]';
    // todoLi.innerText = `${completed} ${todos[i].todoText}`;
    todo = document.createTextNode(` ${completed} ${todos[i].todoText} `);
    todoLi.appendChild(toggleButton);
    todoLi.appendChild(editButton);
    todoLi.appendChild(todo);
    todoLi.appendChild(xButton);

    todosListUl.appendChild(todoLi);
  }
}

function add() {
  let initialTodoText = addInput.value;
  todos.push({todoText: initialTodoText, completed: false});
  addInput.value = "";
  displayTodos();
}

function edit(event) {
  let index = event.currentTarget.id.split('-').pop(); 
  let editedTodoText = window.prompt('Please edit the todo.'); 
  if (editedTodoText !== null && editedTodoText !== "") {
    todos[index].todoText = editedTodoText;
  }
  displayTodos();  
}

function remove(event) {
  let index = event.currentTarget.id.split('-').pop();
  todos.splice(index, 1);
  displayTodos();
}

function toggle(event) {
  let index = event.currentTarget.id.split('-').pop();
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

// var toggleAllButton    = document.getElementById('toggle-all-button');
// toggleAllButton.addEventListener('click', toggleAll);

var addTodoButton      = document.getElementById('add-todo-button');
var addInput           = document.getElementById('add-input');
addTodoButton.addEventListener('click', add);

// var editTodoButton     = document.getElementById('edit-todo-button');
// var editInputIndex     = document.getElementById('edit-index');
// var editInput          = document.getElementById('edit-input');
// editTodoButton.addEventListener('click', edit);

// var deleteTodoButton   = document.getElementById('delete-todo-button');
// var deleteInputIndex   = document.getElementById('delete-index');
// deleteTodoButton.addEventListener('click', remove);

// var toggleTodoButton   = document.getElementById('toggle-todo-button');
// var toggleInputIndex   = document.getElementById('toggle-index');
// toggleTodoButton.addEventListener('click', toggle);

// var displayTodosButton = document.getElementById('display-todos-button');
// displayTodosButton.addEventListener('click', displayTodos);
"use strict";

var todos = [{todoText: 'Item 1', completed: false}];

console.log('My todos;', todos);

function add(initialTodoText) { 
  todos.push({todoText: initialTodoText, completed: false});
  console.log(todos);
}

function edit(index, editedTodoText) {
  todos[index].todoText = editedTodoText;
  console.log(todos);
}

function remove(index) {
  todos.splice(index, 1);
  console.log(todos);
}

function toggle(index) {
  todos[index].completed = !todos[index].completed;
  console.log(todos);
}
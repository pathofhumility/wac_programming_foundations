/*
* Write a function named "edit", that takes two arguments,
* an integer that represents an array index, and a string.
* The string is to be inserted into the array at the passed
* index.
*/

var todos = ['Item 1', 'Item 2', 'Item 3'];

function edit(index, todo) {
  todos[index] = todo
  console.log(todos);
}

edit(1, 'Item 2 edited');
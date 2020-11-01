/*
* Write a function, "remove", that takes one argument that
*  is an integer representing the position in the array of
*  the element that is to be removed.
*/

todos = ['Item 1', 'Item 2', 'Item 3'];

function remove(index) {
  todos.splice(index, 1);
  console.log(todos);
}

remove(1);
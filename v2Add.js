/* Given the following code, modify it so that data can be passed
 * into the function and added to the todos array.
 */

todos = ["Item 2", "Item 3", "Item 4", "another item"]

// function add() {
function add(todo) { 
  // todos.push('another item');
  todos.push(todo);
  console.log(todos);
}

add('Watch the next video in Practical JavaScript');
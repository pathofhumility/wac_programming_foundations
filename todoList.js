todos = ["Item 2", "Item 3", "Item 4", "another item"]

function add(todo) { 
  todos.push(todo);
  console.log(todos);
}

function edit(index, todo) {
  todos[index] = todo
  console.log(todos);
}

function remove(index) {
  todos.splice(index, 1);
  console.log(todos);
}

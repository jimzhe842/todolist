let Todo = require('./todo');

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
    } else {
      throw new TypeError("can only add Todo objects");
    } 
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);

    return this.todos[index];
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }
  
  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index,1);
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let todos = this.todos.map(todo => todo.toString()).join('\n');
    return `${title}\n${todos}`;
  }

  forEach(callback) {
    for (let idx = 0; idx < this.size(); idx++) {
      callback(this.todos[idx]);
    }
  }

  filter(callback) {
    let filteredTodo = new TodoList("Filtered Todo");
    this.forEach(todo => {
      if (callback(todo)) {
        filteredTodo.add(todo);
      }
    });
    
    return filteredTodo;
  }

  findByTitle(title) {
    return this.todos.find(todo => todo.getTitle() === title);
  }

  allDone() {
    let doneTodos = new TodoList("Done Todos");
    this.forEach(todo => {
      if (todo.isDone()) {
        doneTodos.add(todo);
      }
    })
    return doneTodos;
  }

  allNotDone() {
    let doneTodos = new TodoList("Done Todos");
    this.forEach(todo => {
      if (!todo.isDone()) {
        doneTodos.add(todo);
      }
    })
    return doneTodos;
  }

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo) {
      todo.markDone();
    }
  }

  markAllDone(title) {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone(title) {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}

module.exports = TodoList;
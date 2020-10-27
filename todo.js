// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.
"use strict";

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

module.exports = Todo;

// let todo = new TodoList("Today's Todos");
// todo.add(new Todo("Clean sink"));
// todo.add(new Todo("Sweep floor"));
// todo.add(new Todo("Fix clock"));

// todo.findByTitle("Clean sink");
// todo.findByTitle("Doge");

// todo.markDone("Clean sink");
// todo.markDone("Done");

// console.log(todo.allDone());
// console.log(todo.allNotDone());

// todo.markAllDone();

// console.log(todo);

// todo.markAllUndone();

// console.log(todo);

// console.log(todo.toArray());

//main todos
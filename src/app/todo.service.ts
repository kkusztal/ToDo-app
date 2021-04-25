import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as moment from 'moment';

const storageName1 = 'todos';
const storageName2 = 'done';

interface Todo {
  label: string;
  date: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];
  private done: Todo[] = [];

  constructor() {
  }

  getTodos() {
    this.todos = JSON.parse(localStorage.getItem(storageName1));
    if(this.todos) 
      return of(this.todos);
    else 
      return of(this.todos = []);
  }

  getDone() {
    this.done = JSON.parse(localStorage.getItem(storageName2));
    if(this.done) 
      return of(this.done);
    else 
      return of(this.done = []);
  }

  addTodo(todo: string) {
    let addedTodo = moment.utc().valueOf();
    this.todos.push({label: todo, date: addedTodo});
    this.updateTodos();
  }

  removeAll() {
    this.todos.splice(0, this.todos.length);
    this.done.splice(0, this.done.length);
    this.updateTodos();
  }

  removeTodo(item: Todo) {
    const index: number = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    this.updateTodos();
  }

  doneTodo(item: Todo) {
    this.done.push(item);
    this.removeTodo(item);
    this.updateTodos();
  }

  private updateTodos() {
    localStorage.setItem(storageName1, JSON.stringify(this.todos));
    localStorage.setItem(storageName2, JSON.stringify(this.done));
  }
}

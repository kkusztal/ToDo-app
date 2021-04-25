import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-app';
  
  @ViewChild('in') el : ElementRef;
  todos = [];
  done = [];

  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
    this.todoService.getDone().subscribe((done) => {
      this.done = done;
    });
  }

  onAdd(todo) {
    if (todo === '' || todo === undefined) {
      return;
    }
    this.todoService.addTodo(todo);
    this.el.nativeElement.value = '';
  }

  onClear() {
    this.todoService.removeAll();
  }

  onRemove(item) {
    this.todoService.removeTodo(item);
  }

  onDone(item) {
    this.todoService.doneTodo(item);
  }
}

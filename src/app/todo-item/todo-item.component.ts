import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todos = [];
  @Output()
  emitRemove = new EventEmitter<string>();
  @Output()
  emitDone = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(item: string) {
    this.emitRemove.emit(item);
  }

  onDone(item: string) {
    this.emitDone.emit(item);
  }
}

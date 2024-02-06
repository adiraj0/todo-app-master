import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo-interface';
import { selectDoneItems } from '../stores/todo.state';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']

})

export class DoneListComponent implements OnInit {
  doneItems: Todo[] = [];

  // constructor(public todoService: TodoService) { }
  constructor(public store: Store, public todoService: TodoService) {}
  
  // toggleTodoSelection(todo: Todo) {
  //   this.todoService.toggleTodoSelection(todo);
  // }

  toggleTodoSelection(todo: Todo) {
    this.todoService.toggleTodoSelection(todo);
  }
  ngOnInit(): void {
    // this.doneItems = this.todoService.doneItems;
    this.store.select(selectDoneItems).subscribe((doneItems) => {
      this.doneItems = doneItems;
    });
  }
  
}

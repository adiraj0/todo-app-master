import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo-interface';
import { Store } from '@ngrx/store';
import { selectTodoItems } from '../stores/todo.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  filterQuery: any;
  newTodo: string = '';
  todoItems: Todo[] = [];

  constructor(private store: Store,public todoService : TodoService ) { }

  addTodo(newTodo:string) {
    if (this.newTodo.trim()) {
      const newTodo: Todo = { 
        id: Date.now(),
        text: this.newTodo,
        selected: false,
        style: this.todoService.getGlobalShape()
      };
      this.todoService.addTodoItem(newTodo);
      this.newTodo = ''; // Clear the input field
    }
  }

  toggleTodoSelection(todo: Todo) {
    this.todoService.toggleTodoSelection(todo);
  }

  ngOnInit(): void {
    this.store.select(selectTodoItems).subscribe((todoItems) => {
      this.todoItems = todoItems;
    });
  }
}

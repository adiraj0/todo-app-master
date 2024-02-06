// todo.service.ts
import { Injectable } from '@angular/core';
import { Todo } from './models/todo-interface';
import { Store } from '@ngrx/store';
import { addTodoItem, moveSelectedToDone, moveSelectedToTodo, removeSelectedItems, setSelectedBackgroundColor, toggleTodoSelection } from './stores/todo.action'; 


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  
  todoItems: Todo[] = [];
  doneItems: Todo[] = [];
  selectedItems: Todo[] = [];
  backgroundColor: string = ''; // Store the selected background color  
  
  constructor(private store: Store) {}

  moveSelectedToDone() {
    this.store.dispatch(moveSelectedToDone({ selectedItems: this.selectedItems }));
  }


  moveSelectedToTodo() {
    this.store.dispatch(moveSelectedToTodo({ selectedItems: this.selectedItems }));
  }



  toggleTodoSelection(todo: Todo) {
    this.store.dispatch(toggleTodoSelection({ todo }));
  }



  addTodoItem(item: Todo) {
    this.store.dispatch(addTodoItem({ item }));
  }


  removeSelectedItems() {
    this.store.dispatch(removeSelectedItems({ selectedItems: this.selectedItems }));
  }

  setSelectedBackgroundColor(color: string) {
    this.store.dispatch(setSelectedBackgroundColor({ color }));
  }

}

// todo.service.ts
import { Injectable } from '@angular/core';
import { Todo } from './models/todo-interface';
import { Store } from '@ngrx/store';
import { addTodoItem, moveSelectedToDone, moveSelectedToTodo, removeSelectedItems, setSelectedBackgroundColor, setShape, toggleTodoSelection } from './stores/todo.action'; 
import { selectShape } from './stores/todo.state';


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
  setGlobalShape(shape: 'square' | 'circle') {
    this.store.dispatch(setShape({ shape }));
  }

  getGlobalShape(): 'square' | 'circle' {
    let shape: 'square' | 'circle' = 'square'; // Initialize with a default value

    this.store.select(selectShape).subscribe((globalShape) => {
      shape = globalShape;
    });

    return shape;
  }
}

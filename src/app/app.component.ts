import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public todoService : TodoService ) { }

  title = 'todo-app';
  
  moveSelectedToDone() {
    this.todoService.moveSelectedToDone();
  }

  moveSelectedTodo() {
    this.todoService.moveSelectedToTodo();
  }

  // confirmRemove() {
  //   const selectedCount = this.todoService.selectedItems.length;
  //   if (selectedCount > 0) {
  //     const confirmation = window.confirm(`Are you sure you want to remove ${selectedCount} selected item(s)?`);
  //     if (confirmation) {
  //       this.todoService.removeSelectedItems();
  //     }
  //   } else {
  //     alert('No items selected.');
  //   }
  // }
  confirmRemove() {
   
  
        this.todoService.removeSelectedItems();
      }

}


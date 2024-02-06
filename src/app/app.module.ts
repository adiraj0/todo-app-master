import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { TodoService } from './todo.service';
import { StoreModule } from '@ngrx/store';

// app.module.ts
import { todoReducer } from './stores/todo.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DoneListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ todos: todoReducer }),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

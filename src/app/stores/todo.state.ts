// todo.state.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Todo {
  id: number;
  text: string;
  selected: boolean;
}

export interface TodoState {
  todoItems: Todo[];
  doneItems: Todo[];
  selectedItems: Todo[];
  selectedBackgroundColor: string;
}

export const initialTodoState: TodoState = {
  todoItems: [],
  doneItems: [],
  selectedItems: [],
  selectedBackgroundColor: '',
};

export const selectTodoState = createFeatureSelector<TodoState>('todos');
export const selectTodoItems = createSelector(selectTodoState, (state) => state.todoItems);
export const selectDoneItems = createSelector(selectTodoState, (state) => state.doneItems);
export const selectSelectedItems = createSelector(selectTodoState, (state) => state.selectedItems);
export const selectBackgroundColor = createSelector(selectTodoState, (state) => state.selectedBackgroundColor);

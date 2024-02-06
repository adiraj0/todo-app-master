// todo.state.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Todo {
  id: number;
  text: string;
  selected: boolean;
  style: 'square' | 'circle';
}

export interface TodoState {
  todoItems: Todo[];
  doneItems: Todo[];
  selectedItems: Todo[];
  selectedBackgroundColor: string;
  shape: "square" | "circle";
}

export const initialTodoState: TodoState = {
  todoItems: [],
  doneItems: [],
  selectedItems: [],
  selectedBackgroundColor: '',
  shape: "square"
};

export const selectTodoState = createFeatureSelector<TodoState>('todos');
export const selectTodoItems = createSelector(selectTodoState, (state) => state.todoItems);
export const selectDoneItems = createSelector(selectTodoState, (state) => state.doneItems);
export const selectSelectedItems = createSelector(selectTodoState, (state) => state.selectedItems);
export const selectBackgroundColor = createSelector(selectTodoState, (state) => state.selectedBackgroundColor);
export const selectShape = createSelector(selectTodoState, (state) => state.shape);

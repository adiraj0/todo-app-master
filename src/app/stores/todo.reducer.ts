// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.action';
import { initialTodoState, Todo, TodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  on(TodoActions.moveSelectedToDone, (state) => {
    const updatedSelectedTodoItems = state.selectedTodoItems.map((item) => ({
      ...item,
      selected: false,
    }));
    const updatedDoneItems = [...state.doneItems, ...updatedSelectedTodoItems];
    const updatedTodoItems = state.todoItems.filter(
      (item) => !state.selectedTodoItems.includes(item)
    );

    return {
      ...state,
      doneItems: updatedDoneItems,
      todoItems: updatedTodoItems,
      selectedTodoItems: [],
    };
  }),

  on(TodoActions.moveSelectedToTodo, (state) => {
    const updatedSelectedDoneItems = state.selectedDoneItems.map((item) => ({
      ...item,
      selected: false,
    }));
    const updatedTodoItems = [...state.todoItems, ...updatedSelectedDoneItems];
    const updatedDoneItems = state.doneItems.filter(
      (item) => !state.selectedDoneItems.includes(item)
    );

    return {
      ...state,
      todoItems: updatedTodoItems,
      doneItems: updatedDoneItems,
      selectedDoneItems: [],
    };
  }),

  on(TodoActions.toggleTodoSelection, (state, { todo }) => {
    const updatedItems = state.todoItems.map((item) =>
      item.id === todo.id
        ? { ...item, selected: !item.selected, style: state.shape }
        : item
    );

    const updatedSelectedTodoItems = updatedItems.filter(
      (item) => item.selected
    );

    const updatedDoneItems = state.doneItems.map((item) =>
      item.id === todo.id
        ? { ...item, selected: !item.selected, style: state.shape }
        : item
    );

    const updatedSelectedDoneItems = updatedDoneItems.filter(
      (item) => item.selected
    );

    return {
      ...state,
      todoItems: updatedItems,
      doneItems: updatedDoneItems,
      selectedTodoItems: updatedSelectedTodoItems,
      selectedDoneItems: updatedSelectedDoneItems,
    };
  }),

  on(TodoActions.addTodoItem, (state, { item }) => {
    const updatedTodoItems = [...state.todoItems, item];
    return { ...state, todoItems: updatedTodoItems };
  }),

  on(TodoActions.removeSelectedItems, (state) => {
    const updatedTodoItems = state.todoItems.filter(
      (item) => !state.selectedTodoItems.includes(item)
    );
    const updatedDoneItems = state.doneItems.filter(
      (item) => !state.selectedDoneItems.includes(item)
    );

    return {
      ...state,
      todoItems: updatedTodoItems,
      doneItems: updatedDoneItems,
      selectedTodoItems: [],
      selectedDoneItems: [],
    };
  }),

  on(TodoActions.setSelectedBackgroundColor, (state, { color }) => ({
    ...state,
    selectedBackgroundColor: color,
  })),

  on(TodoActions.setShape, (state, { shape }) => {
    const updatedTodoItems = state.todoItems.map((item) => ({
      ...item,
      style: shape,
    }));
    const updatedDoneItems = state.doneItems.map((item) => ({
      ...item,
      style: shape,
    }));

    return {
      ...state,
      shape,
      todoItems: updatedTodoItems,
      doneItems: updatedDoneItems,
    };
  })
);

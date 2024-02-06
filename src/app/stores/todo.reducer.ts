// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.action';
import { initialTodoState, TodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  // Add other reducer logic for remaining actions
  on(TodoActions.moveSelectedToDone, (state) => {
    const updatedSelectedItems = state.selectedItems.map((item) => {
      let newItem = { ...item, selected: false };
      return newItem;
    });
    const updatedDoneItems = [...state.doneItems, ...updatedSelectedItems];

    const updatedTodoItems = state.todoItems.filter(
      (item) => !state.selectedItems.includes(item)
    );

    return {
      ...state,
      doneItems: updatedDoneItems,
      todoItems: updatedTodoItems,
      selectedItems: [],
    };
  }),

  // Add other reducer logic for remaining actions
  on(TodoActions.moveSelectedToTodo, (state) => {
    const updatedSelectedItems = state.selectedItems.map((item) => {
      let newItem = { ...item, selected: false };
      return newItem;
    });
    const updatedTodoItems = [...state.todoItems, ...updatedSelectedItems];
    const updatedDoneItems = state.doneItems.filter(
      (item) => !state.selectedItems.includes(item)
    );

    return {
      ...state,
      todoItems: updatedTodoItems,
      doneItems: updatedDoneItems,
      selectedItems: [],
    };
  }),
  on(TodoActions.removeSelectedItems, (state, { selectedItems }) => {
    const updatedDoneItems = state.doneItems.filter(
      (item) => !state.selectedItems.includes(item)
    );
    const updatedTodoItems = state.todoItems.filter(
      (item) => !state.selectedItems.includes(item)
    );

    return {
      ...state,
      doneItems: updatedDoneItems,
      todoItems: updatedTodoItems,
      selectedItems: [],
    };
  }),

  on(TodoActions.toggleTodoSelection, (state, { todo }) => {
    const updatedItems = state.todoItems.map((item) =>
      item.id === todo.id ? { ...item, selected: !item.selected, style: state.shape } : item
    );
    const updatedSelectedTodoItems = updatedItems.filter(
      (item) => item.selected
    ); // Update selectedItems
    const updatedDoneItems = state.doneItems.map((item) =>
      item.id === todo.id ? { ...item, selected: !item.selected, style: state.shape } : item
    );
    const updatedSelectedDoneItems = updatedDoneItems.filter(
      (item) => item.selected
    );
    const updatedSelectedItems = [
      ...updatedSelectedTodoItems,
      ...updatedSelectedDoneItems,
    ];
    return {
      ...state,
      todoItems: updatedItems,
      doneItems: updatedDoneItems,
      selectedItems: updatedSelectedItems,
    };
  }),

  on(TodoActions.addTodoItem, (state, { item }) => {
    const updatedTodoItems = [...state.todoItems, item];
    return { ...state, todoItems: updatedTodoItems };
  }),

  on(TodoActions.setSelectedBackgroundColor, (state, { color }) => ({
    ...state,
    selectedBackgroundColor: color,
  })),

  
    on(TodoActions.setShape, (state, { shape }) => {
      const updatedTodoItems = state.todoItems.map((item) => ({ ...item, style: shape }));
      const updatedDoneItems = state.doneItems.map((item) => ({ ...item, style: shape }));
  
      return {
        ...state,
        shape,
        todoItems: updatedTodoItems,
        doneItems: updatedDoneItems,
      };
    }),

  
);

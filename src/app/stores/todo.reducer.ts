// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.action';
import { initialTodoState, Todo, TodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  on(TodoActions.moveSelectedToDone, (state) => {
    // Mark selected Todo items as not selected because when it will go in doneList is should be deselected
    // Here we will use selectedTodoItems
    const updatedSelectedTodoItems = state.selectedTodoItems.map((item) => ({
      ...item,
      selected: false,
    }));
    // Update Done items by adding selected Todo items
    const updatedDoneItems = [...state.doneItems, ...updatedSelectedTodoItems];
    // Remove selected Todo items from Todo list
    const updatedTodoItems = state.todoItems.filter(
      (item) => !state.selectedTodoItems.includes(item)
    );
    // Remove selected Todo items from Todo list
    return {
      ...state,
      doneItems: updatedDoneItems,
      todoItems: updatedTodoItems,
      selectedTodoItems: [],
    };
  }),
  // Same logic here
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
  //this will give current state of selectedTodoItems and selectedDoneItems
  on(TodoActions.toggleTodoSelection, (state, { todo }) => {
    // Map through Todo items and toggle selected state based on the action
    const updatedItems = state.todoItems.map((item) =>
      item.id === todo.id
        ? { ...item, selected: !item.selected, style: state.shape }
        : item
    );
    // Filter selected Todo items
    const updatedSelectedTodoItems = updatedItems.filter(
      (item) => item.selected
    );
    // Map through Done items and toggle selected state based on the action
    const updatedDoneItems = state.doneItems.map((item) =>
      item.id === todo.id
        ? { ...item, selected: !item.selected, style: state.shape }
        : item
    );
    // Filter selected Done items
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
    // Update Todo items by adding a new item
    const updatedTodoItems = [...state.todoItems, item];
    // Return the updated state
    return { ...state, todoItems: updatedTodoItems };
  }),

  on(TodoActions.removeSelectedItems, (state) => {
    // Filter Todo items to exclude selected items
    const updatedTodoItems = state.todoItems.filter(
      (item) => !state.selectedTodoItems.includes(item)
    );
    // Filter Done items to exclude selected items
    const updatedDoneItems = state.doneItems.filter(
      (item) => !state.selectedDoneItems.includes(item)
    );
    // Return the updated state with cleared selected items
    return {
      ...state,
      todoItems: updatedTodoItems,
      doneItems: updatedDoneItems,
      selectedTodoItems: [],
      selectedDoneItems: [],
    };
  }),

  // Define the behavior when 'setSelectedBackgroundColor' action is dispatched
  on(TodoActions.setSelectedBackgroundColor, (state, { color }) => ({
    ...state,
    selectedBackgroundColor: color,
  })),

  // Define the behavior when 'setShape' action is dispatched
  on(TodoActions.setShape, (state, { shape }) => {
    // Map through Todo items and update the style property
    const updatedTodoItems = state.todoItems.map((item) => ({
      ...item,
      style: shape,
    }));
    // Map through Todo items and update the style property
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

// todo.actions.ts
import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo-interface';

export const addTodoItem = createAction(
  '[Todo] Add Item',
  props<{ item: Todo }>()
);
export const moveSelectedToDone = createAction(
  '[Todo] Move Selected To Done',
  props<{ selectedItems: Todo[] }>()
);
export const removeSelectedItems = createAction(
  '[Todo] Remove Selected Items',
  props<{ selectedItems: Todo[] }>()
);
export const toggleTodoSelection = createAction(
  '[Todo] Toggle Selection',
  props<{ todo: Todo }>()
);
export const changeBackgroundColor = createAction(
  '[Todo] Change Background Color',
  props<{ color: string }>()
);
export const moveSelectedToTodo = createAction(
  '[Todo] Move Selected To Todo',
  props<{ selectedItems: Todo[] }>()
);
export const setSelectedBackgroundColor = createAction(
  '[Todo] Set Selected Background Color',
  props<{ color: string }>()
);
export const setShape = createAction(
  '[Todo] Set Shape',
  props<{ shape: 'square' | 'circle' }>()
);

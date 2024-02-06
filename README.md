# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server
npm: '6.14.13',
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Todo Interface
The Todo interface defines the structure of a task item in the Angular Todo application. 

Properties
1. id (Type: number)
Unique identifier for each Todo item.
Assigned automatically based on the creation timestamp.

2. text (Type: string)
Descriptive text representing the content of the Todo item.

3. selected (Type: boolean)
Represents the selection status of the Todo item.

4. style (Type: 'square' | 'circle')
Defines the visual style of the Todo item.


Features
## 1. Select/Deselect Items

Function Used: `toggleTodoSelection(todo: Todo)`

- This function is primarily used to select or deselect a Todo item in the application.
- this function ensures that when a Todo item is selected or deselected, it reflects the changes in the state, updating both the    individual item's properties and the lists of selected items for both Todo and Done items.

## 2. move selected items from Todo to Done and viseversa (using button)
functions Used:  `moveSelectedToDone(), moveSelectedToTodo()`
- These functions are responsible for moving selected items between the Todo and Done lists. They ensure the selected items are marked  as not selected and are appropriately updated in their respective lists. 

## 3. Filter Todo Items
For filtering i have used Pipe and Pipetransform. this file you can find in pipes folder.

## 4. Add Todo Items
functions Used: `addTodoItem(item: Todo)  `
Add new Todo items by typing in the input field and pressing Enter.


## 5. Colorpicker for Background Color
functions Used: ` setSelectedBackgroundColor(color: string) `
Customize the background color of selected items, I was having compatibility issues while installing Ngx color-picker,  and because of time contraint I did it with dropdown for now to give background color as Input.


## 6. Remove Selected Items
functions Used: `removeSelectedItems()`
Remove selected items from both lists., i.e, selectedTodoItems and selectedDoneItems

## 7. Choose Todo Style
functions Used: `setGlobalShape(shape: 'square' | 'circle') and  getGlobalShape(): 'square' | 'circle' `
Click on corresponding style buttons (e.g., square or circle) to apply the chosen style to all items.
when we add new todo item it will check its existing state and will add the same shape of item. This logic is in getGlobalShape(): 'square' | 'circle'


## I have given the comments to the code to explain in todo.reducer file

export interface Todo {
    id : number;
    text : string;
    selected : boolean;
    style: 'square' | 'circle';
}
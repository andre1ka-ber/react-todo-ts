export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
export interface IFetchedTodo extends ITodo {
  userId: number;
}
export interface TodosState {
  todos: ITodo[],
  completed: ITodo[],
}
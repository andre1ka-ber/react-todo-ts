export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: ITodo[],
  completed: ITodo[],
}
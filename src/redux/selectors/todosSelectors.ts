import { RootState } from "../store";

export const todosState = (state: RootState) => state.todos;
export const activeTodoItems = (state: RootState) => todosState(state).todos;
//  prettier-ignore
export const completedTodoItems = (state: RootState) => todosState(state).completed;

export const fetchedTodosState = (state: RootState) => state.fetchedTodos;
//  prettier-ignore
export const fetchedTodosItems = (state: RootState) => fetchedTodosState(state).todos;
//  prettier-ignore
export const fetchingLoading = (state: RootState) => fetchedTodosState(state).loading;

import { createAction } from "@reduxjs/toolkit";
import { IFetchedTodo } from "../../interfaces/todo";
import { IFetchTodoForm } from "../../interfaces/fetchTodo";

export const addTodo = createAction("ADD_TODO", (title: string) => ({
  payload: {
    title,
    id: Date.now(),
    completed: false,
  },
}));
export const completeTodo = createAction("COMPLETE_TODO", (id: number) => ({
  payload: { id },
}));
export const returnCompletedTodo = createAction(
  "RETURN_COMPLETED_TODO",
  (id: number) => ({
    payload: { id },
  }),
);
export const deleteTodo = createAction("DELETE_TODO", (id: number) => ({
  payload: { id },
}));
export const fetchTodos = createAction(
  "FETCH_TODOS",
  (options: IFetchTodoForm) => ({
    payload: options,
  }),
);
export const setFetchedTodos = createAction(
  "SET_FETCHED_TODOS",
  (todos: IFetchedTodo[]) => ({
    payload: todos,
  }),
);
export const showFetchingLoader = createAction("SHOW_FETCHING_LOADER");
export const hideFetchingLoader = createAction("HIDE_FETCHING_LOADER");

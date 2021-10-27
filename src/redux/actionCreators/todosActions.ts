import {ITodo} from "../../interfaces/todo";
import {createAction} from "@reduxjs/toolkit";

export const addTodo = createAction('ADD_TODO', (title: string) => {
  return {
    payload: {
      title,
      id: Date.now(),
      completed: false
    }
  }
})
export const completeTodo = createAction('COMPLETE_TODO', (id: number) => {
  return {
    payload: { id }
  }
});
export const returnCompletedTodo = createAction('RETURN_COMPLETED_TODO', (id: number) => {
  return {
    payload: { id }
  }
})
export const deleteTodo = createAction('DELETE_TODO', (id: number) => {
  return {
    payload: { id }
  }
});

export const fetchTodos = createAction('FETCH_TODOS');
export const setFetchedTodos = createAction('SET_FETCHED_TODOS', (todos: ITodo[]) => {
  return {
    payload: todos
  }
})
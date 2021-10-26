import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, FETCH_TODOS, SET_FETCHED_TODOS} from "../actionTypes";
import {ITodo} from "../../interfaces/todo";

export const createTodo = (title: string) => {
  return {
    type: ADD_TODO,
    payload: {
      title,
      id: Date.now(),
      completed: false
    }
  }
}
export const toggleTodo = (id: number) => {
  return { type: COMPLETE_TODO, payload: { id } }
}
export const deleteTodo = (id: number) => {
  return {type: DELETE_TODO, payload: {id}}
}
export const fetchTodos = () => {
  return { type: FETCH_TODOS }
}
export const setFetchedTodos = (todos: ITodo[]) => {
  return { type: SET_FETCHED_TODOS, payload: todos }
}
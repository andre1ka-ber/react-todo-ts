import {ADD_TODO, DELETE_TODO, COMPLETE_TODO} from "../actionTypes";

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
  return { type: DELETE_TODO, payload: { id } }
}
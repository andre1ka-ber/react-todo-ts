import {TodosState} from "../../interfaces/todo";
import {createReducer} from "@reduxjs/toolkit";
import {addTodo, completeTodo, deleteTodo, returnCompletedTodo} from "../actionCreators/todosActions";
import {toast} from "react-toastify";

const initialState: TodosState = {
  todos: [],
  completed: [],
}

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push(action.payload)
    })
    .addCase(completeTodo, (state, action) => {
      state.todos = state.todos.filter(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = true
          state.completed.push(todo);
          return false
        }
        return true;
      })
      toast("Вы молодец!");
    })
    .addCase(returnCompletedTodo, (state, action) => {
      state.completed = state.completed.filter(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = false
          state.todos.push(todo);
          return false
        }
        return true;
      })
      toast("Бывает! И с этим справитесь!)")
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      state.completed = state.completed.filter(todo => todo.id !== action.payload.id)
    })
})
import {ITodo} from "../../interfaces/todo";
import {createReducer} from "@reduxjs/toolkit";
import {setFetchedTodos} from "../actionCreators/todosActions";

interface FetchedTodosReducer {
  todos: ITodo[]
}

const initialState: FetchedTodosReducer = {
  todos: []
}

export const fetchedTodosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFetchedTodos, (state, action) => {
      state.todos = action.payload
    })
});
import {IFetchedTodo} from "../../interfaces/todo";
import {createReducer} from "@reduxjs/toolkit";
import {hideFetchingLoader, setFetchedTodos, showFetchingLoader} from "../actionCreators/todosActions";

interface FetchedTodosReducer {
  todos: IFetchedTodo[],
  loading: boolean,
}

const initialState: FetchedTodosReducer = {
  todos: [],
  loading: false,
}

export const fetchedTodosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFetchedTodos, (state, action) => {
      state.todos = action.payload
    })
    .addCase(showFetchingLoader, (state, action) => {
      state.loading = true;
    })
    .addCase(hideFetchingLoader, (state, action) => {
      state.loading = false;
    })
});
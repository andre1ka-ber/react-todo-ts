import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { fetchedTodosReducer } from "./fetchedTodosReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  fetchedTodos: fetchedTodosReducer
})
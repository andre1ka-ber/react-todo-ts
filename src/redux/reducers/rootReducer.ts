import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { fetchedTodosReducer } from "./fetchedTodosReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  fetchedTodos: fetchedTodosReducer,
  app: appReducer
})
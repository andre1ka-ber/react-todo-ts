import {ITodo} from "../../interfaces/todo";
import {Reducer} from "redux";
import { SET_FETCHED_TODOS } from "../actionTypes";

interface FetchedTodosReducer {
  todos: ITodo[]
}

const initialState: FetchedTodosReducer = {
  todos: []
}

export const fetchedTodosReducer: Reducer<FetchedTodosReducer> = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHED_TODOS: {
      return { ...state, todos: state.todos.concat(action.payload)}
    }
    default:
      return state;
  }
}
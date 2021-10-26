import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, MOVE_TODO_TO_MAIN} from "../actionTypes";
import {Reducer} from "redux";
import {ITodo} from "../../interfaces/todo";

interface TodosState {
  todos: ITodo[],
  completed: ITodo[],
  trash: ITodo[]
}

const initialState: TodosState = {
  todos: [],
  completed: [],
  trash: []
}

export const todosReducer: Reducer<TodosState> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {...state, todos: [...state.todos, action.payload]}
    }
    case COMPLETE_TODO: {
      const completedTodos = [...state.completed];
      const mainTodos = state.todos.filter(item => {
        if (item.id === action.payload.id) {
          item.completed = true;
          completedTodos.push({...item})
          return false
        }
        return true
      })
      return {...state, todos: mainTodos, completed: completedTodos}
    }
    case MOVE_TODO_TO_MAIN: {
      const mainTodos = [...state.todos];
      const completedTodos = state.completed.filter(item => {
        if (item.id === action.payload.id) {
          item.completed = false;
          mainTodos.push({...item})
          return false
        }
        return true
      })
      return {...state, todos: mainTodos, completed: completedTodos}
    }
    case DELETE_TODO: {
      const updatedTodos = state.todos.filter(item => item.id !== action.payload.id)
      return { ...state, todos: updatedTodos }
    }
    default:
      return state
  }
}
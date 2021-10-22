import React, {useState} from "react"
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {ITodo} from "../interfaces/Todo";

const Main: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todoTitle: string): void => {
    if (!todoTitle) {
      return;
    }

    const newTodo = {
      title: todoTitle,
      completed: false,
      id: Date.now()
    }
    setTodos((prevTodos => [newTodo, ...prevTodos]))
  }

  const toggleTodo = (todoId: number) => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  const deleteTodo = (todoId: number) => {}
  return (
    <React.Fragment>
      <TodoForm add={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </React.Fragment>
  )
}

export default Main;
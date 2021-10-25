import React from "react"
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <TodoForm />
      <TodoList />
    </React.Fragment>
  )
}

export default Main;
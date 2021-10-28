import React from "react"
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";

const Main: React.FC = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default Main;
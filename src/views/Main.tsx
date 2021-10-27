import React from "react"
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Main: React.FC = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default Main;
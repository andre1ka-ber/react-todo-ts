import React from "react";
import { ITodo } from "../interfaces/Todo";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo(id: number): void;
  deleteTodo(id: number): void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    const renderTodos = () => {
      if (todos.length === 0) {
        return <h3 className={"label-md"}>Задач нет</h3>
      } else {
        return (
          todos.map(todo => <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} />)
        )
      }
    }

    return (
      <div className={"todo-list-wrapper"}>
        <h3 className={"label-md"}>Список задач</h3>
        {renderTodos()}
      </div>
    )
}

export default TodoList;
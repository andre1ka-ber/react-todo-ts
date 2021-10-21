import React, { useEffect } from "react";
import {ITodo} from "../interfaces/Todo";

interface ITodoItemProps {
  todo: ITodo;
  toggleTodo(id: number): void;
  deleteTodo(id: number): void;
}

const TodoItem: React.FC<ITodoItemProps> = ({todo, toggleTodo, deleteTodo}) => {
  const classes = (): string => {
    const array = ['todo-list-item'];
    if (todo.completed) {
      array.push('completed')
    }
    return array.join(" ");
  };

  return (
    <div className={classes()}>
      <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
      <h5>{todo.title}</h5>
    </div>
  )
}

export default TodoItem;
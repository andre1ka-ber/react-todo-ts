import React from "react";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../redux/actionCreators/todosActions";
import {ITodo} from "../interfaces/todo";

declare var confirm: (question: string) => boolean;

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
}

interface ITodoItemProps {
  todo: ITodo;
  toggleTodo(id: number): void;
  deleteTodo(id: number): void;
}

const TodoItem: React.FC<ITodoItemProps> = ({todo, toggleTodo, deleteTodo}) => {
  const clickHandler = () => {
    if (confirm("Вы уверены?")) {
      deleteTodo(todo.id)
    }
  }

  return (
    <div className={`todo-list-item ${todo.completed ? "completed" : "" }`}>
      <input type="checkbox"  checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <h5>{todo.title}</h5>
      <button className={"todo-list-item-button"} onClick={clickHandler}>
        <i className={"fas fa-times"}></i>
      </button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(TodoItem);
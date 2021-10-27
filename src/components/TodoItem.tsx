import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, completeTodo} from "../redux/actionCreators/todosActions";
import {ITodo} from "../interfaces/todo";

declare var confirm: (question: string) => boolean;

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  const dispatcher = useDispatch()

  const deleteHandler = () => {
    if (confirm("Вы уверены?")) {
      dispatcher(deleteTodo(todo.id))
    }
  }

  const changeHandler = () => {
    dispatcher(completeTodo(todo.id))
  }

  return (
    <div className={`todo-list-item ${todo.completed ? "completed" : "" }`}>
      <input type="checkbox"  checked={todo.completed} onChange={changeHandler} />
      <h5>{todo.title}</h5>
      <button className={"todo-list-item-button"} onClick={deleteHandler}>
        <i className={"fas fa-times"}></i>
      </button>
    </div>
  )
}

export default TodoItem;
import React from "react";
import { useDispatch } from "react-redux";
import TodoStatus from "./Todo/TodoStatus";
import { IFetchedTodo } from "../interfaces/todo";
import { fetchTodoUser } from "../redux/actionCreators/fetchTodosActions";
import { displayModal } from "../redux/actionCreators/appActions";

interface FetchedTodoItemProps {
  todo: IFetchedTodo;
}

const FetchedTodoItem: React.FC<FetchedTodoItemProps> = ({ todo }) => {
  const dispatcher = useDispatch();

  const clickHandler = () => {
    dispatcher(displayModal());
    dispatcher(fetchTodoUser(todo.userId));
  };

  return (
    <div className="fetched-item" key={todo.id}>
      <div className="fetched-item-content">
        <h4>{todo.title}</h4>
        <TodoStatus status={todo.completed} />
      </div>
      <button type="button" onClick={clickHandler}>
        <span>Подробнее</span>
        <i className="fas fa-address-card" />
      </button>
    </div>
  );
};

export default FetchedTodoItem;

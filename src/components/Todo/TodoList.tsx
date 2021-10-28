import React from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {activeTodoItems} from "../redux/selectors/todosSelectors";

const TodoList: React.FC = () => {
  const todoItems = useSelector(activeTodoItems);

  return (
    <div className={"todo-list-wrapper"}>
      <h3 className={"label-md"}>Список задач</h3>
      <div className={"todo-list"}>
          {todoItems.length === 0
            ? <h4 className={"label-md"}>Задач не добавлено</h4>
            : ""
          }
          {todoItems.map(todo =>
            <TodoItem todo={todo} key={todo.id} />
          )}
      </div>
    </div>
  )
}

export default TodoList;
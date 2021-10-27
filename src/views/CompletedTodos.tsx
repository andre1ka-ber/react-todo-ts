import React from "react";
import {useSelector} from "react-redux";
import TodoItem from "../components/TodoItem";
import {completedTodoItems} from "../redux/selectors/todosSelectors";

const CompletedTodos: React.FC = () => {
  const completedTodos = useSelector(completedTodoItems)

  return (
    <div className={"todo-list-wrapper"}>
      <h3 className={"label-md"}>Список завершённых задач</h3>
      <div className={"todo-list"}>
        {completedTodos.length === 0
          ? <h4 className={"label-md"}>Задач не добавлено</h4>
          : ""}
        {completedTodos.map(todo =>
          <TodoItem todo={todo} key={todo.id} />
        )}
      </div>
    </div>
  )
}

export default CompletedTodos;
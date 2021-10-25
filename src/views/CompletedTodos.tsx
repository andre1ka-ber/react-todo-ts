import React from "react";
import {RootState} from "../redux/store";
import {connect, ConnectedProps} from "react-redux";
import TodoItem from "../components/TodoItem";

const mapStateToProps = (state: RootState) => {
  return { completedTodos: state.todos.completed }
}
const connector = connect(mapStateToProps)

type ReduxProps = ConnectedProps<typeof connector>

const CompletedTodos: React.FC<ReduxProps> = ({ completedTodos }) => {
  return (
    <div className={"todo-list-wrapper"}>
      <h3 className={"label-md"}>Список завершённых задач</h3>
      <div className={"todo-list"}>
        { completedTodos.length === 0
          ? <h4 className={"label-md"}>Задач не добавлено</h4>
          : ""}
        {completedTodos.map(todo =>
          <TodoItem todo={todo} key={todo.id} />
        )}
      </div>
    </div>
  )
}

export default connector(CompletedTodos);
import React, {useEffect} from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../redux/store";
import {fetchTodos} from "../redux/actionCreators/todosActions";

const mapStateToProps = (state: RootState) => {
  return { todos: state.fetchedTodos.todos }
}
const mapDispatchToProps = {
  fetchTodos
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>

const FetchedTodos: React.FC<ReduxProps> = ({ todos, fetchTodos }) => {
  return (
    <div className={"fetched-list-wrapper"}>
      <h1 className={"label-md"}>Тестовые данные</h1>
      <button className={"p-4 rounded-md bg-yellow-500 text-white mb-4"} onClick={() => fetchTodos()}>Загрузить данные</button>
      { todos.length === 0
        ? <h4 className={"label-md"}>Данных нет</h4>
        : ""
      }
      <div className={"fetched-items"}>
        {todos.map(todo =>
          <div className={`fetched-item ${todo.completed ? "bg-green-400" : "bg-red-400"}`}>
            <h4>{todo.title}</h4>
            <small>{todo.completed ? "Завершено!" : "Надо бы сделать)"}</small>
            <button>Подробнее о пользователе</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default connector(FetchedTodos);
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchedTodosItems} from "../redux/selectors";
import {fetchTodos} from "../redux/actionCreators/todosActions";

const FetchedTodos: React.FC = () => {
  const dispatcher = useDispatch();
  const fetchedTodos = useSelector(fetchedTodosItems);

  const submitHandler = () => {
    dispatcher(fetchTodos())
  }

  return (
    <div className={"fetched-list-wrapper"}>
      <h1 className={"label-md"}>Тестовые данные</h1>
      <button className={"p-4 rounded-md bg-yellow-500 text-white mb-4"} onClick={submitHandler}>Загрузить данные</button>
      { fetchedTodos.length === 0
        ? <h4 className={"label-md"}>Данных нет</h4>
        : ""
      }
      <div className={"fetched-items"}>
        {fetchedTodos.map(todo =>
          <div className={`fetched-item ${todo.completed ? "bg-green-400" : "bg-red-400"}`} key={todo.id}>
            <h4>{todo.title}</h4>
            <small>{todo.completed ? "Завершено!" : "Надо бы сделать)"}</small>
            <button>Подробнее о пользователе</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FetchedTodos;
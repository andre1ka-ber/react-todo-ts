import React from "react";
import { useSelector } from "react-redux";
import {
  fetchedTodosItems,
  fetchingLoading,
} from "../redux/selectors/todosSelectors";
import FetchTodoForm from "../components/FetchTodoForm";
import Loader from "../components/Loader";
import FetchedTodoItem from "../components/FetchedTodoItem";

const FetchedTodos: React.FC = () => {
  const fetchedTodos = useSelector(fetchedTodosItems);
  const loading = useSelector(fetchingLoading);

  return (
    <div className="fetched-list-wrapper">
      <h1 className="label-md">Тестовые данные</h1>
      <div className="fetched-list">
        <FetchTodoForm />
        <div className="md:ml-4 md:w-2/3">
          <h4 className="label-md">
            {fetchedTodos.length === 0 ? "Записей нет" : "Записи"}
          </h4>
          <div className="fetched-items">
            {loading ? (
              <Loader />
            ) : (
              fetchedTodos.map((todo) => (
                <FetchedTodoItem todo={todo} key={todo.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchedTodos;

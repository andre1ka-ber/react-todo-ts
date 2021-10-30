import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoStatusEnum } from "../enums/TodoStatusEnum";
import { fetchTodos } from "../redux/actionCreators/todosActions";
import { IFetchTodoForm } from "../interfaces/fetchTodo";

const usersElements: React.ReactNode[] = [];

for (let i = 1; i <= 10; i += 1) {
  usersElements.push(
    <option value={i} key={i}>
      {i}
    </option>,
  );
}

const FetchTodoForm: React.FC = () => {
  const dispatcher = useDispatch();

  const [fetchForm, setFetchForm] = useState<IFetchTodoForm>({
    userId: 0,
    completed: 0,
    count: 100,
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatcher(fetchTodos(fetchForm));
  };

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    setFetchForm((prevState) => ({
      ...prevState,
      [event.target.name]: Number(event.target.value),
    }));
  };

  return (
    <form className="fetch-form" onSubmit={submitHandler}>
      <div className="input-field">
        <label htmlFor="todo-status">Статус</label>
        <select
          name="completed"
          id="todo-status"
          className="input-select"
          value={fetchForm.completed}
          onChange={inputChangeHandler}
        >
          <option value="0">Не важно</option>
          <option value={TodoStatusEnum.COMPLETED}>Завершенные</option>
          <option value={TodoStatusEnum.UNCOMPLETED}>Не завершенные</option>
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="todo-user">Пользователь №</label>
        <select
          name="userId"
          id="todo-user"
          className="input-select"
          onChange={inputChangeHandler}
        >
          <option value="0">Не важно</option>
          {usersElements}
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="todo-count">Количество</label>
        <input
          name="count"
          id="todo-count"
          type="number"
          step={10}
          value={fetchForm.count}
          onChange={inputChangeHandler}
        />
      </div>
      <button
        className="p-4 rounded-md bg-yellow-500 text-white mb-4"
        type="submit"
      >
        Загрузить данные
      </button>
    </form>
  );
};

export default FetchTodoForm;

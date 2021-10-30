import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actionCreators/todosActions";

const TodoForm: React.FC = () => {
  const dispatcher = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  const clickHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!todoTitle) {
      return;
    }
    dispatcher(addTodo(todoTitle.trim()));
    setTodoTitle(() => "");
  };

  return (
    <form className="todo-input-wrapper" onSubmit={clickHandler}>
      <h3 className="label-md">Добавить новую задачу</h3>
      <div className="todo-input-form">
        <input
          type="text"
          placeholder="Название задачи"
          onChange={changeHandler}
          value={todoTitle}
        />
        <button type="submit">Добавить</button>
      </div>
    </form>
  );
};

export default TodoForm;

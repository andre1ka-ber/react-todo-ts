import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actionCreators/todosActions";

const TodoForm: React.FC = () => {
    const dispatcher = useDispatch();
    const [todoTitle, setTodoTitle] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitle(prevTitle => event.target.value)
    }

    const clickHandler = (event: React.MouseEvent) => {
      if (!todoTitle) {
        return;
      }
      dispatcher(addTodo(todoTitle.trim()))
      setTodoTitle(() => "")
    }

    return (
        <div className={"todo-input-wrapper"}>
            <h3 className={"label-md"}>Добавить новую задачу</h3>
            <div className={"todo-input-form"}>
                <input type="text" placeholder={"Название задачи"} onChange={changeHandler} value={todoTitle}/>
                <button onClick={clickHandler}>Добавить</button>
            </div>
        </div>
    )
};

export default TodoForm;
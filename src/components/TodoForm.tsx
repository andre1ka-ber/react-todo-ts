import React, {useState} from "react"
import {connect} from "react-redux";
import {createTodo} from "../redux/actionCreators/todosActions";

interface ITodoFormProps {
  createTodo(title: string): void;
}

const TodoForm: React.FC<ITodoFormProps> = ({createTodo}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitle(prevTitle => event.target.value)
    }

    const clickHandler = (event: React.MouseEvent) => {
      if (!todoTitle) {
        return;
      }
      createTodo(todoTitle)
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

const mapDispatchToProps = {
  createTodo
}

export default connect(null, mapDispatchToProps)(TodoForm);
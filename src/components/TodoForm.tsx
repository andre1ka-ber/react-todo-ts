import React, {useState} from "react"

interface ITodoFormProps {
  add(title: string): void
}

const TodoForm: React.FC<ITodoFormProps> = ({add}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitle(prevTitle => event.target.value)
    }

    const clickHandler = (event: React.MouseEvent) => {
      add(todoTitle)
      setTodoTitle("")
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
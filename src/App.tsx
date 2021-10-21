import React, {useState} from 'react';
import './App.css';
import "./assets/tailwind.css";
import "./assets/scss/app.scss";
import NavigationList from "./components/NavigationList";
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList";
import {ITodo} from "./interfaces/Todo";

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (todoTitle: string): void => {
        if (!todoTitle) {
            return;
        }

        const newTodo = {
            title: todoTitle,
            completed: false,
            id: Date.now()
        }
        setTodos((prevTodos => [newTodo, ...prevTodos]))
    }

    const toggleTodo = (todoId: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        }))
    }

    const deleteTodo = (todoId: number) => {}

    return (
      <div className={"main"}>
        <NavigationList />
        <div className={"flex flex-col px-16"}>
            <TodoForm add={addTodo}/>
        </div>
        <div>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>
      </div>
    );
}

export default App;

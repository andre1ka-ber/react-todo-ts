import React from "react";
import TodoItem from "./TodoItem";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/store";

const mapStateToProps = (state: RootState) => ({todos: state.todos.todos})
const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type TodoListProps = PropsFromRedux

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className={"todo-list-wrapper"}>
      <h3 className={"label-md"}>Список задач</h3>
      <div className={"todo-list"}>
        { todos.length === 0
          ? <h4 className={"label-md"}>Задач не добавлено</h4>
          : ""
        }
        {todos.map(todo =>
          <TodoItem todo={todo} key={todo.id} />
        )}
      </div>
    </div>
  )
}

export default connector(TodoList);
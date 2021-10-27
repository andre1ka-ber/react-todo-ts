import React from "react"

interface TodoStatusProps {
  status: boolean
}

const TodoStatus: React.FC<TodoStatusProps> = ({ status }) => {
  const statusIcon = status ? "fas fa-check-circle" : "fas fa-times-circle";
  const statusColor = status ? "text-green-500" : "text-red-500";
  const statusText = status ? "Завершено!" : "Надо бы сделать :)";

  return (
    <span className={`todo-status ${statusColor}`}>
      <i className={statusIcon}></i>
      {statusText}
    </span>
  )
}

export default TodoStatus;
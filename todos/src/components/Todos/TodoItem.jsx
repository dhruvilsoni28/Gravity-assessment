import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={`flex justify-between p-2 border-b ${
        todo.completed ? "line-through text-gray-500" : ""
      }`}
    >
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button className="text-red-500" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

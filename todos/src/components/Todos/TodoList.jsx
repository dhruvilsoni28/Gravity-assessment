import React, { useMemo } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, filter, toggleComplete, deleteTodo }) => {
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.length ? (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <span>Empty</span>
      )}
    </ul>
  );
};

export default TodoList;

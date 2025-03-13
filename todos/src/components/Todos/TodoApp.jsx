import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import "./../../index.css"; // Import Tailwind CSS

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("all");

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        To-Do List
      </h2>
      <AddTodo addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={todos}
        filter={filter}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;

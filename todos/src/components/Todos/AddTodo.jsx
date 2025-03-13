import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTodo(task);
    setTask("");
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="border p-2 flex-grow"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 ml-2"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;

import React from "react";

const Filter = ({ setFilter, filter }) => {
  return (
    <div className="mb-4">
      <button
        className={`mr-2 ${filter === "all" ? "font-bold" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`mr-2 ${filter === "completed" ? "font-bold" : ""}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`${filter === "pending" ? "font-bold" : ""}`}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;

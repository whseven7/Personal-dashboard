import React, { useState } from "react";
import "./TaskManager.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <div className="row d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input col-xl-8 col-lg-12 col-md-12 col-sm-8 col-xs-12"
          placeholder="New Task"
        />
        <button
          type="submit"
          className="todo-btn col-xl-4 col-lg-12 col-md-12 col-sm-4 col-xs-12"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

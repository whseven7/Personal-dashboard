import React, { useState } from "react";
import "./TaskManager.css";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <div className="row d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input col-lg-8 col-md-12 col-sm-8 col-xs-12"
          placeholder="Update task"
        />
        <button
          type="submit"
          className="todo-btn col-lg-4 col-md-12 col-sm-4 col-xs-12"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;

import React from "react";
import "./TaskManager.css";
import TodoWrapper from "./TodoWrapper";
import { useState, useEffect } from "react";

const TaskManager = () => {
  
  return (
    <div className="container">
      <div className="task-title d-flex justify-content-center">
        Task Manager
      </div>
      <div className="d-flex justify-content-center">
        <TodoWrapper />
      </div>
    </div>
  );
};

export default TaskManager;

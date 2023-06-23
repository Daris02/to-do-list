import React from "react";
import TaskForm from "../components/TaskForm";

export default function Add({ tasks, setTasks}) {
  const handleAdd = (task) => {
    const tasksCopy = [...tasks];
    tasksCopy.push(task);
    setTasks(tasksCopy);
  };

  return (
    <div className="add text-center">
        <h4>Add new task</h4>
        <TaskForm handleAdd={handleAdd} className="position-absolute" />
    </div>
  );
}

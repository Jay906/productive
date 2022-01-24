import React, { useState } from "react";
import uuid from "react-uuid";
import ProgressBar from "./ProgressBar";
import SingleTask from "./SingleTask";
import TaskForm from "./TaskForm";
import { updateTasks } from "../services/services";

function Tasks({ tasks, handleTask }) {
  const [show, setShow] = useState(false);
  const handleShow = (value) => setShow(value);

  const addTask = (input, counter) => {
    if (!input || !counter) {
      window.alert("Fields must not be empty");
      return;
    }
    const newTask = {
      id: uuid(),
      title: input,
      completed: false,
      date: new Date(),
      plannedSessions: counter,
    };
    handleShow(false);
    handleTask([...tasks, newTask]);
    updateTasks([...tasks, newTask]);
  };

  return (
    <div>
      <div className="tasks-header">
        <h3>Tasks</h3>
        <button className="options btn">
          <span className="dot"></span>
        </button>
      </div>
      <div className="tasks-list"></div>
      <ProgressBar color="#ccc" />
      {tasks.map((task) => (
        <SingleTask
          task={task}
          key={task.id}
          tasks={tasks}
          handleTask={handleTask}
        />
      ))}
      {show && (
        <TaskForm
          handleCancel={handleShow}
          handleForm={addTask}
          title=""
          plannedSessions={0}
        />
      )}
      <button
        className={!show ? "btn task-btn" : "hide-task"}
        onClick={() => setShow(true)}
      >
        <span>+</span> Add Task
      </button>
    </div>
  );
}

export default Tasks;

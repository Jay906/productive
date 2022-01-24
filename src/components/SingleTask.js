import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import TaskForm from "./TaskForm";
import { updateTasks } from "../services/services";

const SingleTaskContainer = styled.div`
  margin: 0.3rem 0;

  .single-task {
    width: 100%;
    padding: 0.3rem;
    border-left: 3px solid #000;
    border-radius: 4px;
    font-size: 1.2rem;
    background: #f4f4f4;
    color: #000;
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  .single-task div {
    display: flex;
    align-items: center;
  }

  span {
    display: inline-block;
    margin: 0.4rem;
  }

  .icon,
  .check {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    position: relative;
  }

  .check {
    font-size: 1.8rem;
  }

  .btn-cover {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

function SingleTask({ tasks, task, handleTask }) {
  const [editing, setEditing] = useState(false);

  const startEditing = (id) => {
    setEditing(true);
    return tasks.findIndex((task) => task.id === id);
  };

  const editTask = (title, counter) => {
    const index = startEditing(task.id);
    const tmp = tasks[index];
    tmp.title = title;
    tmp.plannedSessions = counter;
    if (!tmp.title && !title.plannedSessions) {
      return window.alert("Fields must not be empty");
    }
    const tmpArr = [...tasks];
    tmpArr[index] = tmp;
    setEditing(false);
    handleTask(tmpArr);
    updateTasks(tmpArr);
  };

  const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (
      !window.confirm(`Are you sure you want to delete ${tasks[index].title}?`)
    ) {
      return;
    }
    const tmp = tasks;
    tmp.splice(index, 1);
    updateTasks(tmp);
    return handleTask(tmp);
  };

  if (editing) {
    return (
      <TaskForm
        handleForm={editTask}
        handleCancel={() => setEditing(false)}
        title={task.title}
        plannedSessions={task.plannedSessions}
      />
    );
  }

  return (
    <SingleTaskContainer>
      <div className="single-task" key={task.id}>
        <div>
          <span className="check">
            <FaCheckCircle />
          </span>
          <span>{task.title}</span>
        </div>
        <div>
          <span>0/{`${task.plannedSessions}`}</span>
          <span className="icon" onClick={() => startEditing(task.id)}>
            <FaEdit />
            <span className="btn-cover"></span>
          </span>
          <span className="icon" onClick={() => deleteTask(task.id)}>
            <FaTrash />
            <span className="btn-cover"></span>
          </span>
        </div>
      </div>
    </SingleTaskContainer>
  );
}

export default SingleTask;

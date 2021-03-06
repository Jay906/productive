import React, { useEffect, createRef, useState } from "react";

function TaskForm({ handleForm, handleCancel, title, plannedSessions }) {
  const [input, setInput] = useState(title);
  const [counter, setCounter] = useState(plannedSessions);
  let inputRef = createRef(null);

  const handleCounterButtons = (e) => {
    if (counter <= 0 && e.target.name === "subtraction") {
      return;
    } else if (counter >= 20 && e.target.name === "addition") {
      return;
    }
    if (e.target.name === "addition") {
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  const handleCounter = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setCounter(value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="task-form">
      <div className="form show-form">
        <input
          type="text"
          className="task-title"
          name="inputValue"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
          placeholder="What are you working on?"
        />
        <label htmlFor="task-number">Planned sections:</label>
        <br />
        <input
          type="number"
          className="task-number"
          value={counter.toString().replace(/^0+/, "")}
          onChange={handleCounter}
          min="0"
          max="20"
          id="task-number"
        />
        <button
          className="number-counter btn"
          name="addition"
          onClick={handleCounterButtons}
        >
          &#x21E7;
        </button>
        <button
          className="number-counter btn"
          name="subtraction"
          onClick={handleCounterButtons}
        >
          &#x21E9;
        </button>
        <div className="task-footer">
          <button className="btn" onClick={() => handleCancel(false)}>
            Cancel
          </button>
          <button
            className={
              input && counter ? "btn save success" : "btn save active"
            }
            onClick={() => handleForm(input, counter)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;

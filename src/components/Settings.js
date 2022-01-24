import React, { useState } from "react";
import { updateSettings } from "../services/services";

function Settings({ settingsProps }) {
  const { settings, hideSettings, show, onSettingsChanged } = settingsProps;

  const [state, setState] = useState({ ...settings });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: Number(e.target.value) });
  };

  const handleCheckboxes = (e) => {
    setState({ ...state, [e.target.name]: e.target.value.checked });
  };

  const saveAndLeave = () => {
    const tmp = { ...state };
    onSettingsChanged(tmp);
    updateSettings(tmp);
    hideSettings();
  };

  return (
    <div
      className={
        show ? "settings-container show-settings" : "settings-container"
      }
      onClick={(e) =>
        e.target.classList.contains("settings-container") && hideSettings()
      }
    >
      <div className="settings">
        <div className="setting-component">
          <h1 className="off-white">Timer</h1>
          <div className="X btn" onClick={hideSettings}>
            X
          </div>
        </div>
        <div className="timers-container"></div>
        <hr />
        <h2>Time (minutes)</h2>
        <div className="timers">
          <div className="timer">
            <label htmlFor="pomodoro" className="off-white">
              Pomodoro
            </label>
            <input
              type="number"
              className="bg-off-white"
              id="pomodoro"
              name="pomodoro"
              value={state.pomodoro.toString().replace(/^0+/, "")}
              onChange={handleChange}
              min="1"
            />
          </div>
          <div className="timer">
            <label htmlFor="break" className="off-white">
              Break
            </label>
            <input
              type="number"
              className="bg-off-white"
              id="break"
              name="shortBreak"
              value={state.shortBreak.toString().replace(/^0+/, "")}
              onChange={handleChange}
              min="1"
            />
          </div>
          <div className="timer">
            <label htmlFor="long-break" className="off-white">
              Long Break
            </label>
            <input
              type="number"
              className="bg-off-white"
              id="long-break"
              name="longBreak"
              value={state.longBreak.toString().replace(/^0+/, "")}
              onChange={handleChange}
              min="1"
            />
          </div>
        </div>
        <hr />
        <div className="setting-component">
          <p>Auto start Pomodoro?</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={state.autoPomodoro}
              value={state.autoPomodoro}
              onChange={handleCheckboxes}
              name="autoPomodoro"
            />
            <span className="slider round"></span>
          </label>
        </div>
        <hr />
        <div className="setting-component">
          <p>Auto start Breaks?</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={state.autoBreak}
              value={state.autoBreak}
              onChange={handleCheckboxes}
              name="autoBreak"
            />
            <span className="slider round"></span>
          </label>
        </div>
        <hr />
        <div className="setting-component">
          <p>
            <label htmlFor="longBreakAfter">Long Break Intervals</label>
          </p>
          <div>
            <input
              type="number"
              id="longBreakAfter"
              value={state.longBreakAfter.toString().replace(/^0+/, "")}
              className="bg-off-white"
              name="longBreakAfter"
              min="1"
              onChange={handleChange}
            />
          </div>
        </div>
        <hr />
        <div className="setting-component">
          <p>Dark Mode</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={state.nightMode}
              value={state.nightMode}
              onChange={handleCheckboxes}
              name="nightMode"
            />
            <span className="slider round"></span>
          </label>
        </div>
        <button className="btn btn-xxl" onClick={saveAndLeave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Settings;

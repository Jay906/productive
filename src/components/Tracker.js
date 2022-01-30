import React, { useEffect, useState } from "react";

function Tracker({ settings }) {
  const [state, setState] = useState({
    mode: "pomodoro",
    pomodoroCount: 1,
    ticking: false,
  });

  const changeMode = (md) => {
    if (md === state.mode) {
      return;
    }
    if (
      !window.confirm(
        "Your current session will be skipped. Are you sure you want to skip it?"
      )
    ) {
      return;
    }
    const tmp = { ...state };
    if (!settings.autoBreak) {
      tmp.ticking = false;
    }
    if (state.mode === "pomodoro") {
      tmp.pomodoroCount =
        state.pomodoroCount === settings.longBreakAfter
          ? 1
          : state.pomodoroCount + 1;
    }
    tmp.mode = md;
    setState(tmp);
  };

  let { mode } = state;

  const [displayTime, setDisplayTime] = useState({
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const { mins, secs } = displayTime;
    const startTimer = () => {
      if (mins === 0 && secs === 0) {
        let tmp = { ...state };
        if (state.mode === "pomodoro") {
          if (state.pomodoroCount === settings.longBreakAfter) {
            tmp.mode = "longBreak";
          } else {
            tmp.mode = "shortBreak";
          }
          if (!settings.autoBreak) {
            tmp.ticking = false;
          }
          tmp.pomodoroCount =
            state.pomodoroCount === settings.longBreakAfter
              ? 1
              : state.pomodoroCount + 1;

          setState(tmp);
        } else {
          if (!settings.autoPomodoro) {
            tmp.ticking = false;
          }
          tmp.mode = "pomodoro";
          setState(tmp);
        }
      } else if (secs === 0) {
        setDisplayTime({ mins: mins - 1, secs: 59 });
      } else {
        setDisplayTime({ mins, secs: secs - 1 });
      }
    };
    let id;
    if (state.ticking) {
      id = setInterval(startTimer, 1000);
    }
    return () => clearInterval(id);
  }, [settings, displayTime, settings.longBreakAfter, state]);

  useEffect(() => {
    console.log(mode);
    setDisplayTime({ mins: settings[mode], secs: 0 });
  }, [mode, settings]);

  return (
    <div className="tracker">
      <div className="modes">
        <button
          className={mode === "pomodoro" ? "btn mode active" : "btn mode"}
          onClick={() => changeMode("pomodoro")}
        >
          Focus
        </button>
        <button
          className={mode === "shortBreak" ? "btn mode active" : "btn mode"}
          onClick={() => changeMode("shortBreak")}
        >
          Break
        </button>
        <button
          className={mode === "longBreak" ? "btn mode active" : "btn mode"}
          onClick={() => changeMode("longBreak")}
        >
          Long Break
        </button>
      </div>
      <div className="tracker-timer">
        <span>
          {displayTime.mins > 9
            ? `${displayTime.mins}`
            : `0${displayTime.mins}`}
        </span>
        :
        <span>
          {displayTime.secs > 9
            ? `${displayTime.secs}`
            : `0${displayTime.secs}`}
        </span>
      </div>
      <div className="tracker-buttons">
        <button
          className="btn timer-btn"
          onClick={() =>
            setState((prev) => ({ ...prev, ticking: !prev.ticking }))
          }
        >
          {state.ticking ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default Tracker;

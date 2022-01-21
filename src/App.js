import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Estimate from "./components/Estimate";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Settings from "./components/Settings";
import Tasks from "./components/Tasks";
import Tracker from "./components/Tracker";

function App() {
  const [show, setShow] = useState(false);

  const [settings, setSettings] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakAfter: 4,
    autoBreak: true,
    autoPomodoro: true,
    nightMode: false,
  });

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "salam",
      completed: false,
      date: new Date(),
      plannedSessions: 1,
    },
    {
      id: uuid(),
      title: "balam",
      completed: false,
      date: new Date(),
      plannedSessions: 1,
    },
  ]);

  const calculateEstimate = () => {
    const plannedSessions = tasks.reduce(
      (acc, curr) => (acc += Number(curr.plannedSessions)),
      0
    );
    let total = plannedSessions * settings.pomodoro;
    for (let i = 0; i < plannedSessions; i++) {
      if (settings.longBreakAfter % i) {
        total += settings.longBreak;
      } else {
        total += settings.shortBreak;
      }
    }
    return total;
  };

  const handleTask = (val) => {
    setTasks([...val]);
  };

  const onSettingsChanged = (obj) => {
    setSettings({ ...obj });
  };

  const showSettings = () => setShow(true);
  const hideSettings = () => setShow(false);
  return (
    <>
      <Settings
        settingsProps={{
          show,
          hideSettings,
          settings,
          onSettingsChanged,
        }}
      />
      <div className="main-container work">
        <div className="container">
          <Nav showSettings={showSettings} />
          <main>
            <Tracker
              settings={settings}
              onSettingsChanged={onSettingsChanged}
            />
            <Tasks tasks={tasks} handleTask={handleTask} />
            <Estimate
              calculateEstimate={calculateEstimate}
              total={tasks.length}
            />
          </main>
        </div>
      </div>
      <Info />
    </>
  );
}

export default App;

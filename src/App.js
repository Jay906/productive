import { useState, useEffect } from "react";
import "./App.css";
import Estimate from "./components/Estimate";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Settings from "./components/Settings";
import Tasks from "./components/Tasks";
import Theme from "./components/Theme";
import Tracker from "./components/Tracker";
import { getTasks, getSettings } from "./services/services";
import GlobalStyles from "./Styles";

function App() {
  const [show, setShow] = useState(false);

  const [settings, setSettings] = useState();

  const [tasks, setTasks] = useState();

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

  useEffect(() => {
    setSettings(getSettings());
    setTasks(getTasks());
  }, []);
  if (!settings && !tasks) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Theme darkMode={settings.darkMode}>
        <GlobalStyles />
        <Settings
          settingsProps={{
            show,
            hideSettings,
            settings,
            onSettingsChanged,
          }}
        />
        <main className="main-container">
          <div className="container">
            <Nav showSettings={showSettings} />
            <div className="tracker-container">
              <Tracker
                settings={settings}
                onSettingsChanged={onSettingsChanged}
              />
              <Tasks tasks={tasks} handleTask={handleTask} />
              {tasks.length > 0 && (
                <Estimate
                  calculateEstimate={calculateEstimate}
                  total={tasks.length}
                />
              )}
            </div>
          </div>
        </main>
        <Info />
      </Theme>
    </>
  );
}

export default App;

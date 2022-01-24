function getTasks() {
  const posts = localStorage.getItem("pomodoro-tasks");
  if (!posts) {
    return [];
  }
  return JSON.parse(posts);
}

function updateTasks(tasks) {
  localStorage.setItem("pomodoro-tasks", JSON.stringify(tasks));
}

function getSettings() {
  const settings = JSON.parse(localStorage.getItem("pomodoro-settings"));
  if (!settings) {
    updateSettings({
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
      longBreakAfter: 4,
      autoBreak: true,
      autoPomodoro: true,
      nightMode: false,
    });
    return getSettings();
  }
  return settings;
}

function updateSettings(settings) {
  localStorage.setItem("pomodoro-settings", JSON.stringify(settings));
}

export { getTasks, updateTasks, updateSettings, getSettings };

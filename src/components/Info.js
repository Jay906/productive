import React from "react";

function Info() {
  return (
    <div className="info">
      <h1>Online Pomodoro timer to boost your productivity</h1>
      <section>
        <h2>What is Pomodoro Technique?</h2>
        <p>
          The Pomodoro Technique is created by Francesco Cirillo for a more
          productive way to work and study. The technique uses a timer to break
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer
          that Cirillo used as a university student
        </p>
      </section>
      <section>
        <h2>How to use it?</h2>
        <ol>
          <li>Add tasks to work on today</li>
          <li>Set estimate pomdoros for each task</li>
          <li>Select a task that you wanna work on</li>
          <li>
            Start Timer and focus for as many minutes as you have set for focus
          </li>
          <li>Take a break when focus time hits 00:00</li>
          <li>Repeat it until you finish the task</li>
        </ol>
      </section>
    </div>
  );
}

export default Info;

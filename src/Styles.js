import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  body {
    font-size: 1.1rem;
    background: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.mainFg}
  }
  
  .off-white {
    color: #bbb;
  }
  
  .bg-off-white {
    background: #rgba(0, 0, 0, 0.5);
  }
  
  .btn {
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .set-btn {
    font-size: 1.5rem;
    background: ${(props) => props.theme.mainTransparency};
    padding: 0.2rem;
    display: flex;
  }
  
  .btn-xxl {
    display: block;
    width: 100%;
    text-align: center;
  }
  
  .active {
    background: ${(props) => props.theme.focusTransparency} !important;
  }
  
  .text-center {
    text-align: center;
  }
  
  /* Nav section starts */
  
  .settings-container {
    position: fixed;
    overflow: scroll;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    transform: scale(0, 0);
    transform-origin: right top;
    transition: ${(props) => props.theme.mainTransition};
  }
  
  .show-settings {
    transform: scale(1, 1);
  }
  
  .settings {
    width: 80%;
    margin: 2rem auto;
    padding: 0.5rem;
    background: ${(props) => props.theme.mainOverlay};
    color: ${(props) => props.theme.mainFg};  }
  
  .setting-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }
  
  .timers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .timer input {
    width: 80%;
    display: block;
    padding: 0.5rem 0.3rem;
    background: ${(props) => props.theme.mainTransparency};
    color: inherit;
    border: none;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #2196f3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  
  .setting-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .setting-component input {
    width: 4rem;
    height: 1rem;
    padding: 1rem 0.4rem;
    background: ${(props) => props.theme.mainTransparency};
    color: inherit;
    border: none;
  }
  
  .settings button {
    margin: 1rem 0 0;
    padding: 1rem;
    background: green;
    color: #fff;
  }
  
  .main-container {
    width: 100%;
    padding: 0 0.5rem;
    background: ${(props) => props.theme.trackerBg};
    color: ${(props) => props.theme.trackerFg};
    min-height: 100vh;
  }
  
  .break {
    background: ${(props) => props.theme.shortBreak};
  }

  .long-break {
    background: ${(props) => props.theme.longBreak};
  }
  
  .success {
    background: green;
    border-radius: 5px;
    color: #fff !important;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
  }
  
  .tracker-container {
    max-width: 468px;
    margin: auto;
  }
  
  .tracker {
    width: 100%;
    min-height: 30vh;
    padding: 0.5rem;
    margin: 1rem 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.mainTransparency};
  }
  
  .modes {
    width: 80%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
  }
  
  .modes .mode {
    padding: 0.2rem;
    font-size: 1.2rem;
  }
  
  .tracker-timer {
    font-size: 7rem;
    margin: 0.5rem 0;
    font-family: "Varela Round";
  }
  
  .timer-btn {
    font-size: 1.3rem;
    background: ${(props) => props.theme.mainTransparency};
    padding: 1rem;
    width: 100%;
    margin: 0.5rem auto;
  }
  
  .task-form {
    position: relative;
    width: 100%;
    padding: 0.5rem 0;
  }
  
  .task-btn {
    display: block;
    opacity: 0.7;
    font-size: 1.3rem;
    width: 100%;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.overlayFg};
    background: ${(props) => props.theme.mainTransparency};
    padding: 1rem;
    border: 1px dashed ${(props) => props.theme.overlayFg};
    transition: ${(props) => props.theme.mainTransition};
  }
  
  .hide-task {
    display: none;
  }
  
  .task-btn:hover,
  .task-btn:focus {
    opacity: 1;
  }
  
  .task-btn span {
    display: inline-block;
    margin-right: 0.3rem;
    height: 1.5rem;
    width: 1.5rem;
    background: ${(props) => props.theme.mainTransition};
    border-radius: 50%;
  }
  
  .form {
    width: 100%;
    padding: 0.5rem;
    background: #f4f4f4;
    color: #000;
    border-radius: 5px;
    top: 0;
    left: 0;
    z-index: 2;
    transform: scale(0, 0);
    transform-origin: center;
    transition: ${(props) => props.theme.mainTransition};
  }
  
  .show-form {
    transform: scale(1, 1);
  }
  
  .task-title {
    display: block;
    width: 100%;
    font-size: 1.3rem;
    padding: 0.75rem 0;
    outline: none;
  }
  
  .form input {
    margin: 1rem 0;
    border: none;
    background: none;
  }
  
  .form .task-number {
    background: #e4e4e4;
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 5rem;
    height: 3rem;
  }
  
  .number-counter {
    display: inline-block;
    margin: 0 0.2rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
  
  .task-footer {
    text-align: right;
    padding: 0.3rem;
    background: #e4e4e4;
    width: 100%;
  }
  
  .task-footer button {
    padding: 0.75rem;
    margin: 0 1rem;
    color: inherit;
  }
  
  .active {
    background: #000;
    border-radius: 5px;
    color: #fff;
  }
  
  /* Tasks section starts */
  
  .tasks-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
  
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background: ${(props) => props.theme.mainTransparency};
    width: 2rem;
  }
  
  .dot,
  .dot::after,
  .dot::before {
    position: relative;
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #f4f4f4;
  }
  
  .dot::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
  }
  
  .dot::before {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 0;
  }
  
  .options-container {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }

  .options-list {
    background: linear-gradient(${(props) => props.theme.mainTransparency}, ${(
  props
) => props.theme.mainTransparency}), ${(props) => props.theme.mainColor};
    position: absolute;
    top: 120%;
    z-index: 1;
    transform-origin: top right;
    transform: scale(0, 0);
    transition: ${(props) => props.theme.mainTransition};
  }

  .show-options-list {
    transform: scale(1, 1);
  }

  .options-list li {
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.mainFg};
  }

  .info {
    width: 95%;
    margin: 1rem auto;
  }
  
  .info section {
    margin: 1rem 0;
  }
  
  .info section h1,
  .info section h2 {
    position: relative;
    padding: 1rem 0;
    margin: 1rem 0;
  }
  
  .info section h1::after,
  .info section h2::after {
    content: "";
    position: absolute;
    width: 5vw;
    height: 0.3rem;
    bottom: 0;
    left: 0;
    background: ${(props) => props.theme.mainRed};
  }
  
  ol {
    padding: 0 1rem;
  }
  
  @media screen and (min-width: 768px) {
    .container {
      width: 50%;
      margin: auto;
    }
  
    .settings-container {
      transform-origin: center;
    }
  
    .info {
      width: 50%;
      margin: 1rem auto;
    }
  }  
`;

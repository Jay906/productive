import React from "react";
import ProgressBar from "./ProgressBar";
import { AiTwotoneSetting } from "react-icons/ai";

function Nav({ showSettings }) {
  return (
    <>
      <nav>
        <h3 className="brand">Pomodoro</h3>
        <div className="nav-buttons">
          <button className="btn set-btn" onClick={showSettings}>
            <AiTwotoneSetting />
          </button>
        </div>
      </nav>
      <ProgressBar color="#333" />
    </>
  );
}

export default Nav;

import React from "react";
import { ThemeProvider } from "styled-components";

const dark = {
  mainColor: "#121212",
  trackerBg: "#181818",
  mainOverlay: "#222",
  mainFg: "#f4f4f4",
  trackerFg: "#f4f4f4",
  mainTransparency: "rgba(255, 255, 255, 0.1)",
  focusTransparency: "rgba(0, 0, 0, 0.2)",
  shortBreak: "rgba(76, 145, 149)",
  longBreak: "rgb(69, 214, 163)",
  mainTransition: "all .3s",
  mainRed: "#d95550",
};

const light = {
  mainColor: "#fff",
  trackerBg: "#d95550",
  mainOverlay: "#fff",
  mainFg: "#000",
  trackerFg: "#f4f4f4",
  mainTransparency: "rgba(255, 255, 255, 0.1)",
  focusTransparency: "rgba(0, 0, 0, 0.2)",
  shortBreak: "rgba(76, 145, 149)",
  longBreak: "rgb(69, 214, 163)",
  mainTransition: "all .3s",
  mainRed: "#d95550",
};

function Theme({ darkMode, children }) {
  return (
    <ThemeProvider theme={darkMode ? dark : light}>{children}</ThemeProvider>
  );
}

export default Theme;

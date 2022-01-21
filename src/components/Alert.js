import React from "react";
import styled from "styled";

const AlertContainer = styled.div`
  display: block;
  width: 100%;
  padding: 0.3rem;
  margin: 1rem 0;
  background: ${({ state }) =>
    state === "success" ? "rgba(0, 200, 0, 0.8)" : "rgba(200, 0, 0, 0.8)"};
  color: #f4f4f4;
`;

function Alert({ state, text }) {
  return <AlertContainer state={state}>{text}</AlertContainer>;
}

export default Alert;

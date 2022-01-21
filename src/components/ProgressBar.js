import React from "react";
import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${({ color }) => color};
`;

function ProgressBar({ activeProgress, color }) {
  return <Line className="line" color={color}></Line>;
}

export default ProgressBar;

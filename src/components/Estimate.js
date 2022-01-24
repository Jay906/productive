import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  padding: 1rem 0;

  div {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #fff;
  }

  div span {
    display: block;
  }
`;

function Estimate({ total, calculateEstimate }) {
  const [est, setEst] = useState();

  useEffect(() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + calculateEstimate());
    const string = `${
      date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    }:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`;
    setEst(string);
  }, [calculateEstimate]);

  return (
    <Div>
      <div>
        <span>Tasks: {total}</span>
        <span>Task #: {total}</span>
        <span>Finish at: {est}</span>
      </div>
    </Div>
  );
}

export default Estimate;

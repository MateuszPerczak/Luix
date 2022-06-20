import styled from "@emotion/styled";
import Icon from "../Icon/Icon";
import { useState, useEffect } from "react";

const StyledTaskBarClock = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 10px;
  width: 100px;
  height: 100%;
  border-radius: 8px;
  user-select: none;
`;

const StyledTime = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  line-height: 0.8;
  font-size: 18px;
`;

const TaskBarClock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const getTime = () => {
    setTime(
      new Date().toLocaleTimeString("pl-PL", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      })
    );
    setDate(
      new Date().toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
    );
  };
  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return (
    <StyledTaskBarClock>
      <StyledTime>
        <span>{time}</span>
        <span>{date}</span>
      </StyledTime>
      <Icon>&#xE121;</Icon>
    </StyledTaskBarClock>
  );
};

export default TaskBarClock;

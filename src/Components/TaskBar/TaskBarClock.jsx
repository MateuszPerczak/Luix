import styled from "@emotion/styled";
import TaskBarIcon from "./TaskBarIcon";
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
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState("00/00/0000");

  const getTime = () => {
    setTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      })
    );
    setDate(
      new Date().toLocaleDateString("en-US", {
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
      <TaskBarIcon>&#xE121;</TaskBarIcon>
    </StyledTaskBarClock>
  );
};

export default TaskBarClock;

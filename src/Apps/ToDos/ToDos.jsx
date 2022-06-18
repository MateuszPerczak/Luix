import styled from "@emotion/styled";
import { useState } from "react";

const StyledToDos = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 35px;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 100%;
  aspect-ratio: 1;
  font-size: 18px;
  user-select: none;
  font-family: "Segoe Fluent Icons", sans-serif;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  &:active {
    transform: scale(0.95);
  }
`;

const AddressBar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  width: 100%;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const StyledTask = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  width: 100%;
  height: fit-content;
  padding: 5px;
  border-radius: 4px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 100%;
  aspect-ratio: 1;
  font-size: 18px;
  user-select: none;
  font-family: "Segoe Fluent Icons", sans-serif;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const ToDos = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  return (
    <StyledToDos>
      <TopBar>
        <StyledButton
          onClick={() => {
            if (task) {
              setTasks([...tasks, task]);
              setTask("");
            }
          }}
        >
          &#xE109;
        </StyledButton>
        <AddressBar>
          <StyledIcon>&#xE1C8;</StyledIcon>
          <StyledInput
            placeholder="Add task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </AddressBar>
      </TopBar>
      <TaskList>
        {tasks.map((task, index) => {
          return (
            <StyledTask key={index}>
              {task}
              <StyledButton
                onClick={() => {
                  setTasks(tasks.filter((_, i) => i !== index));
                }}
              >
                &#xE10B;
              </StyledButton>
            </StyledTask>
          );
        })}
      </TaskList>
    </StyledToDos>
  );
};

export default ToDos;

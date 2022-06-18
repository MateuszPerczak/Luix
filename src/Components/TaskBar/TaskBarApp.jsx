import styled from "@emotion/styled";
import TaskBarIcon from "./TaskBarIcon";

const StyledTaskBarIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  transition: transform 100ms, background 200ms;
  &:hover {
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
    &:before {
      transform: scale(1);
    }
  }
  &:active {
    transform: scale(0.9);
    &:before {
      transform: scale(0);
    }
  }
  &:before {
    transform: scale(0);
    position: absolute;
    font-family: "Dongle", sans-serif;
    top: -40px;
    content: ${({ tooltip }) => {
      return `"${tooltip}"`;
    }};
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
    width: fit-content;
    padding: 0 8px;
    border-radius: 8px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
    transition: transform 100ms;
    transition-delay: 400ms;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: ${({ isOpen, focusedApp, name }) => {
      return isOpen ? (name === focusedApp ? "20px" : "10px") : "0";
    }};
    height: 3px;
    border-radius: 2px;
    background: ${({ theme: { accentBackground } }) => {
      return accentBackground;
    }};
    transition: width 300ms;
  }
`;

const TaskBarApp = ({ icon, name, ...rest }) => {
  return (
    <StyledTaskBarIcon name={name} {...rest}>
      <TaskBarIcon>{icon}</TaskBarIcon>
    </StyledTaskBarIcon>
  );
};

export default TaskBarApp;

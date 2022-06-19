import styled from "@emotion/styled";
import { animated } from "react-spring";

const TaskBarButton = styled(animated.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1;
  user-select: none;
  border-radius: 8px;
  transition: transform 100ms, background 200ms;
  &:hover {
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
    backdrop-filter: blur(10px) saturate(180%);
    &:before {
      transition-delay: 700ms;
      transform: scale(1);
    }
  }
  &:active {
    transform: scale(0.9);
    &:before {
      transition-delay: 0ms;
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
    padding: 0 10px;
    border-radius: 8px;
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.4);
    transition: transform 100ms;
    backdrop-filter: blur(10px) saturate(180%);
  }
`;

export default TaskBarButton;

// &:before {
//   content: "";
//   position: absolute;
//   bottom: 10%;
//   width: 10px;
//   height: 2px;
//   border-radius: 2px;
//   background: ${({ theme: { color } }) => {
//     return color;
//   }};
// }

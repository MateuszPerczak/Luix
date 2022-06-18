import styled from "@emotion/styled";
import { animated } from "react-spring";

const TaskBarMenu = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
  position: absolute;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px) saturate(180%);
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

export default TaskBarMenu;

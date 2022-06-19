import styled from "@emotion/styled";
import { animated } from "react-spring";

const TaskBarItems = styled(animated.div)`
  display: flex;
  gap: 5px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default TaskBarItems;

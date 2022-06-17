import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";

const StyledMenu = styled(animated.div)`
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, -20%);
  width: 400px;
  height: 400px;
  border-radius: 8px;
  z-index: 2;
  backdrop-filter: blur(10px) saturate(180%);
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const TaskBarMenu = ({ isOpen = false }) => {
  const animatedMenu = useSpring({
    transform: `translate(-50%, ${isOpen ? "-30%" : "100%"})`,
  });

  return <StyledMenu style={animatedMenu}></StyledMenu>;
};

export default TaskBarMenu;

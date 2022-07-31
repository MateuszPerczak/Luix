import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbar = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 5px;
  backdrop-filter: blur(20px) saturate(180%);
  background-color: ${({ theme: { taskbar } }) => taskbar};
`;

export const StyledTaskbarLeft = styled.div`
  width: ${({ width }) => `${width}px`};
`;

export const StyledTaskbarRight = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledTaskbarCenter = styled(motion.div)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export default StyledTaskbar;

import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbar = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 50px;
  width: 100%;
  padding: 5px;
  backdrop-filter: blur(20px) saturate(180%);
  background-color: ${({ theme: { taskbar } }) => taskbar};
`;

export default StyledTaskbar;

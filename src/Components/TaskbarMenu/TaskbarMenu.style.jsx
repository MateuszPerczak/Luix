import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbarMenu = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme: { taskbarMenu } }) => taskbarMenu};
  backdrop-filter: blur(20px) saturate(180%);
`;

export const StyledTaskbarApps = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  padding: 5px;
  height: 50px;
`;

export default StyledTaskbarMenu;

import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbarMenu = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: 60px;
  transform: translateX(-50%);
  width: 640px;
  height: 725px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme: { taskbarMenu } }) => taskbarMenu};
  backdrop-filter: blur(20px) saturate(180%);
`;

export const StyledTaskbarMenuTop = styled.div`
  width: 100%;
  height: 90%;
`;
export const StyledTaskbarMenuBottom = styled.div`
  width: 100%;
  height: 10%;
  backdrop-filter: blur(10px) saturate(180%);
`;

export default StyledTaskbarMenu;

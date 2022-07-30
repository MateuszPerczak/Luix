import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbarApp = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  user-select: none;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { taskbarApp } }) => taskbarApp};
  }
  &:active {
    background-color: ${({ theme: { taskbarAppActive } }) => taskbarAppActive};
  }
`;

export default StyledTaskbarApp;

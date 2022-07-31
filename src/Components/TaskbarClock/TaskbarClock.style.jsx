import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbarClock = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  height: 100%;
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

export const StyledTaskbarClockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  line-height: 0.9;
  height: 100%;
`;

export default StyledTaskbarClock;

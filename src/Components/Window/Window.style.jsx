import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledWindow = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  width: 500px;
  transition: backdrop-filter 500ms;
  background-color: ${({ theme: { appContent } }) => appContent};
  backdrop-filter: ${({ isfocused }) =>
    isfocused === "true"
      ? "saturate(360%) blur(10px)"
      : "saturate(10%) blur(20px)"};
  box-shadow: 0 0 20px ${({ theme: { taskbarMenu } }) => taskbarMenu};
  border: 1px solid ${({ theme: { border } }) => border};
  resize: both;
`;

export const StyledWindowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-left: 5px;
`;

export const StyledWindowTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  height: 40px;
  padding: 5px;
`;

export const StyledWindowContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  backdrop-filter: blur(20px) saturate(180%);
  height: 100%;
  overflow: auto;
`;

export const StyledWindowClose = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  border-radius: 8px;
  user-select: none;
  aspect-ratio: 1;
  &:hover {
    background-color: ${({ theme: { taskbarApp } }) => taskbarApp};
  }
  &:active {
    background-color: ${({ theme: { taskbarAppActive } }) => taskbarAppActive};
  }
`;

export default StyledWindow;

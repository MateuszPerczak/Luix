import styled from "@emotion/styled";

const TaskBarMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 8px;
  user-select: none;
  transition: transform 100ms, background 200ms;
  &:hover {
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default TaskBarMenuItem;

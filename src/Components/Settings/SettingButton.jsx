import styled from "@emotion/styled";

const SettingButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  user-select: none;
  transition: background-color 200ms, transform 200ms;
  &:hover {
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default SettingButton;

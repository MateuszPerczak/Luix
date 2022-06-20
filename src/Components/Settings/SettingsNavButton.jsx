import styled from "@emotion/styled";

const SettingsNavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  aspect-ratio: 1;
  border-radius: 6px;
  user-select: none;
  transition: background-color 200ms;
  &:hover {
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
  }
`;

export default SettingsNavButton;

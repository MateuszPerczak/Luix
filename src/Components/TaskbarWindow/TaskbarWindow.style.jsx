import styled from "@emotion/styled";

const StyledTaskbarWindow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
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

export default StyledTaskbarWindow;

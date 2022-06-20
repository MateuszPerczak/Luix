import styled from "@emotion/styled";

const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
  border-radius: 6px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

export default SettingContainer;

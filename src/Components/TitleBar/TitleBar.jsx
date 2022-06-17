import styled from "@emotion/styled";

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  height: 40px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  backdrop-filter: blur(10px) saturate(180%);
`;

export default TitleBar;

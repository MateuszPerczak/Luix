import styled from "@emotion/styled";

const StyledWindowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  padding: 0 10px;
  font-size: 20px;
  user-select: none;
  width: 100%;
  height: 40px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  backdrop-filter: blur(10px) saturate(180%);
`;

const WindowIcon = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 20px;
`;

const WindowTitle = ({ icon, name }) => {
  return (
    <StyledWindowTitle className={`app-${name}`}>
      <WindowIcon>{icon}</WindowIcon>
      <span>{name}</span>
    </StyledWindowTitle>
  );
};

export default WindowTitle;

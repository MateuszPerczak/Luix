import styled from "@emotion/styled";

const StyledWindowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 30px;
  aspect-ratio: 1;
  transition: background 200ms, transform 200ms;
  &:hover {
    background: #e74c3caa;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const WindowTitle = ({ icon, name, id, setOpenApps }) => {
  return (
    <StyledWindowTitle className={`app-${id}`}>
      <TitleWrapper>
        <WindowIcon>{icon}</WindowIcon>
        <span>{name}</span>
      </TitleWrapper>
      <CloseButton
        onClick={() => {
          setOpenApps((apps) => {
            return apps.filter((app) => app.name !== name);
          });
        }}
      >
        <WindowIcon>&#xE711;</WindowIcon>
      </CloseButton>
    </StyledWindowTitle>
  );
};

export default WindowTitle;

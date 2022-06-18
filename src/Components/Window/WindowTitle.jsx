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
  transition: background 200ms;
  &:hover {
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
  }
`;

const WindowTitle = ({ icon, name, setApps }) => {
  return (
    <StyledWindowTitle className={`app-${name}`}>
      <TitleWrapper>
        <WindowIcon>{icon}</WindowIcon>
        <span>{name}</span>
      </TitleWrapper>
      <CloseButton>
        <WindowIcon
          onClick={() => {
            setApps((apps) => {
              const newApps = [...apps];
              const thisApp = newApps.filter((app) => app.name === name)[0];
              thisApp.isOpen = false;
              return newApps;
            });
          }}
        >
          &#xE711;
        </WindowIcon>
      </CloseButton>
    </StyledWindowTitle>
  );
};

export default WindowTitle;

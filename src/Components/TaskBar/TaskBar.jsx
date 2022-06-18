import styled from "@emotion/styled";
import TaskBarApp from "./TaskBarApp";
import TaskBarClock from "./TaskBarClock";

const StyledTaskBar = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  backdrop-filter: blur(10px) saturate(180%);
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const TaskBar = ({ apps, setApps, focusedApp, setFocusedApp }) => {
  const openApp = (app) => {
    const oldApps = [...apps];
    const targetApp = oldApps.find((lol) => lol === app);
    if (!targetApp.isOpen) {
      targetApp.isOpen = true;
    }
    setFocusedApp(targetApp.name);
    setApps(oldApps);
  };

  return (
    <StyledTaskBar>
      {apps.map((app, index) => {
        return (
          <TaskBarApp
            key={index}
            focusedApp={focusedApp}
            {...app}
            onClick={() => openApp(app)}
          />
        );
      })}

      <TaskBarClock />
    </StyledTaskBar>
  );
};

export default TaskBar;

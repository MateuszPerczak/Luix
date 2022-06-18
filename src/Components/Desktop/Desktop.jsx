import styled from "@emotion/styled";
import { useState } from "react";
import localApps from "../../Apps/apps";
import TaskBar from "../TaskBar/TaskBar";
import WindowProvider from "../WindowProwider/WindowProvider";
import Window from "../Window/Window";

const StyledLoader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Desktop = () => {
  const [apps, setApps] = useState(localApps);
  const [focusedApp, setFocusedApp] = useState(null);

  return (
    <StyledLoader>
      <WindowProvider>
        {apps.map((app, index) => {
          return app.isOpen ? (
            <Window
              key={index}
              focusedApp={focusedApp}
              setFocusedApp={setFocusedApp}
              {...app}
            />
          ) : null;
        })}
      </WindowProvider>
      <TaskBar
        apps={apps}
        setApps={setApps}
        focusedApp={focusedApp}
        setFocusedApp={setFocusedApp}
      />
    </StyledLoader>
  );
};

export default Desktop;

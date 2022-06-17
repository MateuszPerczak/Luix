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

  return (
    <StyledLoader>
      <WindowProvider>
        {apps.map((app, index) => {
          return <Window key={index} {...app} />;
        })}
      </WindowProvider>
      <TaskBar apps={apps} />
    </StyledLoader>
  );
};

export default Desktop;

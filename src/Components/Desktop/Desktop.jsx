import styled from "@emotion/styled";
import { useState } from "react";
import localApps from "../../Apps/apps";
import TaskBar from "../TaskBar/TaskBar";
import WindowProvider from "../WindowProwider/WindowProvider";
import Window from "../Window/Window";
import Properties from "../../Contexts/Properties";

const StyledLoader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Desktop = () => {
  const [apps, setApps] = useState(localApps);
  const [openApps, setOpenApps] = useState([]);
  const [properties, setProperties] = useState({ iconPosition: "center" });

  return (
    <StyledLoader>
      <Properties.Provider value={{ properties, setProperties }}>
        <WindowProvider>
          {openApps.map((app) => {
            return <Window key={app.id} {...app} setOpenApps={setOpenApps} />;
          })}
        </WindowProvider>
        <TaskBar apps={apps} openApps={openApps} setOpenApps={setOpenApps} />
      </Properties.Provider>
    </StyledLoader>
  );
};

export default Desktop;

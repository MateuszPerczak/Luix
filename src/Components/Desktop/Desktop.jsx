import styled from "@emotion/styled";
import { useState } from "react";
import localApps from "../../Apps/apps";
import TaskBar from "../TaskBar/TaskBar";
import WindowProvider from "../WindowProwider/WindowProvider";
import Window from "../Window/Window";
import Properties from "../../Contexts/Properties";

const StyledDesktop = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${({ background: { image } }) => {
    return image;
  }});
  background-repeat: ${({ background: { repeat } }) => {
    return repeat ? "repeat" : "no-repeat";
  }};

  background-size: ${({ background: { cover } }) => {
    return cover ? "cover" : "no-repeat";
  }};
`;

const Desktop = () => {
  const [apps, setApps] = useState(localApps);
  const [openApps, setOpenApps] = useState([]);
  const [properties, setProperties] = useState({
    iconPosition: "center",
    apps: apps,
    background: {
      image: "/images/background.png",
      repeat: true,
      cover: false,
    },
  });

  return (
    <StyledDesktop background={properties.background}>
      <Properties.Provider value={{ properties, setProperties }}>
        <WindowProvider>
          {openApps.map((app) => {
            return <Window key={app.id} {...app} setOpenApps={setOpenApps} />;
          })}
        </WindowProvider>
        <TaskBar apps={apps} openApps={openApps} setOpenApps={setOpenApps} />
      </Properties.Provider>
    </StyledDesktop>
  );
};

export default Desktop;

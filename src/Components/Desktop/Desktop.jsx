import StyledDesktop from "./Desktop.style";
import Taskbar from "../Taskbar/Taskbar";
import { useState } from "react";

const Desktop = () => {
  const [apps, setApps] = useState([
    {
      name: "Calculator",
      icon: "\uE1D0",
    },
    {
      name: "Settings",
      icon: "\uE713",
    },
    {
      name: "Clippy",
      icon: "\uE723",
    },
    {
      name: "Files",
      icon: "\uE7B8",
    },
    {
      name: "Clock",
      icon: "\uE121",
    },
  ]);
  const [openApps, setOpenApps] = useState([]);

  return (
    <StyledDesktop
      initial={{ opacity: 0, scale: 0.8, borderRadius: "10px" }}
      animate={{ opacity: 1, scale: 1, borderRadius: "0px" }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", mass: 0.6, stiffness: 200, damping: 20 }}
    >
      <Taskbar apps={apps} openApps={openApps} setOpenApps={setOpenApps} />
    </StyledDesktop>
  );
};

export default Desktop;

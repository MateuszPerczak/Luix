import StyledDesktop from "./Desktop.style";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import { useApps } from "../../Hooks/useApps";

const Desktop = () => {
  const appsMenager = useApps();

  return (
    <StyledDesktop
      initial={{ opacity: 0, scale: 0.8, borderRadius: "10px" }}
      animate={{ opacity: 1, scale: 1, borderRadius: "0px" }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", mass: 0.6, stiffness: 200, damping: 20 }}
    >
      {appsMenager.openWindows.map((app) => {
        return <Window key={app.name} {...app} appsMenager={appsMenager} />;
      })}

      <Taskbar appsMenager={appsMenager} />
    </StyledDesktop>
  );
};

export default Desktop;

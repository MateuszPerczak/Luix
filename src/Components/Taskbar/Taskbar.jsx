import StyledTaskbar, {
  StyledTaskbarRight,
  StyledTaskbarLeft,
  StyledTaskbarCenter,
} from "./Taskbar.style";
import useMeasure from "react-use-measure";
import TaskbarApp from "../TaskbarApp/TaskbarApp";
import TaskbarMenu from "../TaskbarMenu/TaskbarMenu";
import TaskbarClock from "../TaskbarClock/TaskbarClock";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Taskbar = ({ appsMenager }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [ref, bounds] = useMeasure();

  const openClock = () => {
    const clockApp = appsMenager.systemApps.find((app) => app.name === "Clock");
    appsMenager.openApp(clockApp);
  };

  return (
    <>
      <TaskbarMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        appsMenager={appsMenager}
        onMouseLeave={() => setIsOpen(false)}
      />
      <StyledTaskbar layout="position">
        <StyledTaskbarLeft width={bounds.width} />
        <StyledTaskbarCenter>
          <AnimatePresence>
            <TaskbarApp
              icon="&#xE154;"
              onClick={() => setIsOpen(!isOpen)}
              key="Menu"
            />
            {appsMenager.openApps.map((app) => {
              return (
                <TaskbarApp
                  key={app.name}
                  {...app}
                  onClick={() => appsMenager.focusApp(app)}
                  isfocused={`${app.name === appsMenager.focusedApp?.name}`}
                />
              );
            })}
          </AnimatePresence>
        </StyledTaskbarCenter>
        <StyledTaskbarRight ref={ref}>
          <TaskbarClock onClick={openClock} />
        </StyledTaskbarRight>
      </StyledTaskbar>
    </>
  );
};

export default Taskbar;

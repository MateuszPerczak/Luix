import StyledTaskbar, {
  StyledTaskbarRight,
  StyledTaskbarLeft,
  StyledTaskbarCenter,
} from "./Taskbar.style";
import useMeasure from "react-use-measure";
import TaskbarApp from "../TaskbarApp/TaskbarApp";
import TaskbarMenu from "../TaskbarMenu/TaskbarMenu";
import TaskbarClock from "../TaskbarClock/TaskbarClock";
import TaskbarWindow from "../TaskbarWindow/TaskbarWindow";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Taskbar = ({ appsManager }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [ref, bounds] = useMeasure();

  const openClock = () => {
    const clockApp = appsManager.systemApps.find((app) => app.name === "Clock");
    appsManager.openApp(clockApp);
  };

  return (
    <>
      <TaskbarMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        appsManager={appsManager}
        onMouseLeave={() => setIsOpen(false)}
      />
      <StyledTaskbar layout="position">
        <StyledTaskbarLeft width={bounds.width} />
        <StyledTaskbarCenter
          layout
          transition={{ type: "spring", mass: 0.2, stiffness: 200 }}
        >
          <AnimatePresence>
            <TaskbarApp
              icon="&#xE154;"
              onClick={() => setIsOpen(!isOpen)}
              key="Menu"
            />
            {appsManager.openApps.map((app) => {
              return (
                <TaskbarApp
                  key={app.name}
                  {...app}
                  onClick={() => appsManager.focusApp(app)}
                  isfocused={`${app.name === appsManager.focusedApp?.name}`}
                />
              );
            })}
          </AnimatePresence>
        </StyledTaskbarCenter>
        <StyledTaskbarRight ref={ref}>
          <TaskbarClock onClick={openClock} />
          <TaskbarWindow onClick={appsManager.centerWindows} />
        </StyledTaskbarRight>
      </StyledTaskbar>
    </>
  );
};

export default Taskbar;

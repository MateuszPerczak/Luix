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

const Taskbar = ({ apps, openApps, setOpenApps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [ref, bounds] = useMeasure();

  const openApp = (app) => {
    setOpenApps((appsList) => {
      return [...appsList, app];
    });
  };

  const openClock = () => {
    const clock = apps.find((app) => app.name === "Clock");
    openApp(clock);
  };

  return (
    <>
      <TaskbarMenu
        isOpen={isOpen}
        apps={apps}
        setOpenApps={setOpenApps}
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
            {openApps.map((app) => {
              return <TaskbarApp key={app.name} {...app} />;
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

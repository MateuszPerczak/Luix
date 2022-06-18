import styled from "@emotion/styled";
import { useState } from "react";
import { useSpring } from "react-spring";
import TaskBarMenu from "../TaskBarMenu/TaskBarMenu";
import TaskBarMenuItem from "../TaskBarMenu/TaskBarMenuItem";
import TaskBarIcon from "./TaskBarIcon";
import TaskBarButton from "./TaskBarButton";
import TaskBarClock from "./TaskBarClock";
import TaskBarItems from "./TaskBarItems";
import TaskBarMenuSeperator from "../TaskBarMenu/TaskBarMenuSeperator";

const StyledTaskBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 5px;
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
  border-top: 1px solid
    ${({ theme: { background } }) => {
      return background;
    }};
`;

const TaskBar = ({ apps, openApps, setOpenApps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedMenu = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(-110%)" : "translateY(100%)",
    config: {
      mass: 1,
      tension: 500,
      friction: 30,
    },
  });

  const toggleMenu = () => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  const openApp = (app) => {
    setOpenApps((wasOpen) => {
      if (wasOpen.includes(app)) {
        return wasOpen;
      } else {
        return [...wasOpen, app];
      }
    });
  };

  return (
    <StyledTaskBar>
      <TaskBarMenu
        style={animatedMenu}
        onClick={() => setIsOpen(false)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {apps.map((app) => {
          return (
            <TaskBarMenuItem key={app.id} onClick={() => openApp(app)}>
              <TaskBarIcon>{app.icon}</TaskBarIcon>
            </TaskBarMenuItem>
          );
        })}
        <TaskBarMenuSeperator>
          <TaskBarMenuItem>
            <TaskBarIcon>&#xE115;</TaskBarIcon>
          </TaskBarMenuItem>
        </TaskBarMenuSeperator>
      </TaskBarMenu>
      <TaskBarItems>
        {openApps.map((app) => {
          return (
            <TaskBarButton
              key={app.id}
              tooltip={app.name}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            >
              <TaskBarIcon>{app.icon}</TaskBarIcon>
            </TaskBarButton>
          );
        })}
      </TaskBarItems>
      <TaskBarButton onClick={toggleMenu} tooltip="Menu">
        <TaskBarIcon>&#xE138;</TaskBarIcon>
      </TaskBarButton>
      <TaskBarClock />
    </StyledTaskBar>
  );
};

export default TaskBar;

import styled from "@emotion/styled";
import { useState } from "react";
import { useSpring, useTransition } from "react-spring";
import TaskBarMenu from "../TaskBarMenu/TaskBarMenu";
import TaskBarMenuItem from "../TaskBarMenu/TaskBarMenuItem";
import TaskBarIcon from "./TaskBarIcon";
import TaskBarButton from "./TaskBarButton";
import TaskBarClock from "./TaskBarClock";
import TaskBarItems from "./TaskBarItems";
import TaskBarMenuSeperator from "../TaskBarMenu/TaskBarMenuSeperator";
import Settings from "../Settings/Settings";

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

  const animatedItems = useSpring({
    width: `${openApps.length * 43}px`,
    from: {
      width: "0px",
    },
  });

  const animatedApps = useTransition(openApps, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
    trail: 100,
    config: {
      mass: 2,
      tension: 420,
      friction: 30,
    },
    keys: (item) => item.id,
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
          <TaskBarMenuItem
            onClick={() =>
              openApp({
                id: 0,
                icon: "\uE115",
                name: "Settings",
                component: Settings,
                tooltip: "Settings",
                resizable: true,
              })
            }
          >
            <TaskBarIcon>&#xE115;</TaskBarIcon>
          </TaskBarMenuItem>
        </TaskBarMenuSeperator>
      </TaskBarMenu>
      <TaskBarItems style={animatedItems}>
        {animatedApps((style, app) => {
          return (
            <TaskBarButton
              key={app.id}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
              style={style}
              tooltip={app.tooltip}
            >
              <TaskBarIcon>{app.icon}</TaskBarIcon>
            </TaskBarButton>
          );
        })}
        {/* {openApps.map((app) => {
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
        })} */}
      </TaskBarItems>
      <TaskBarButton onClick={toggleMenu} tooltip="Menu">
        <TaskBarIcon>&#xE138;</TaskBarIcon>
      </TaskBarButton>
      <TaskBarClock />
    </StyledTaskBar>
  );
};

export default TaskBar;

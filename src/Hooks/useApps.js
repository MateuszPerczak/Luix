import { useState, useMemo } from "react";
import Clock from "../Apps/Clock/Clock";
import Calculator from "../Apps/Calculator/Calculator";
const apps = [
  {
    name: "Calculator",
    icon: "\uE1D0",
    width: 350,
    height: 500,
    app: Calculator,
  },
  // {
  //   name: "Clippy",
  //   icon: "\uE723",
  //   width: 200,
  //   height: 800,
  // },
  // {
  //   name: "Files",
  //   icon: "\uE7B8",
  //   width: 200,
  //   height: 800,
  // },
  // {
  //   name: "Web",
  //   icon: "\uE12B",
  // },
  // {
  //   name: "Paint",
  //   icon: "\uE2B1",
  // },
  // {
  //   name: "Camera",
  //   icon: "\uE722",
  // },
  // {
  //   name: "Music",
  //   icon: "\uE768",
  // },
  // {
  //   name: "Calendar",
  //   icon: "\uE1DC",
  //   width: 200,
  //   height: 800,
  // },
];

export const useApps = () => {
  const [openApps, setOpenApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);
  const [installedApps] = useState(apps);
  const [windowPos, setWindowPos] = useState({});
  const systemApps = useMemo(
    () => [
      {
        name: "Clock",
        icon: "\uE121",
        width: 450,
        height: 250,
        app: Clock,
      },
      {
        name: "Settings",
        icon: "\uE713",
        width: 700,
        height: 500,
      },
    ],
    []
  );

  const openApp = (app) => {
    if (openApps.find((openApp) => openApp.name === app.name)) {
      focusApp(app);
      return;
    }
    setOpenApps((appsList) => {
      return [...appsList, app];
    });
    setOpenWindows((windowsList) => {
      const zIndex = windowsList.length + 1;
      return [...windowsList, { ...app, zIndex }];
    });
    setFocusedApp(app);
  };

  const focusApp = (app) => {
    if (openWindows.length > 1 && focusedApp?.name !== app.name) {
      setFocusedApp(app);
      const newWindows = [...openWindows];
      newWindows.forEach((win) => {
        if (win.name === app.name) {
          win.zIndex = newWindows.length + 1;
        } else if (win.zIndex > 1) {
          win.zIndex -= 1;
        }
      });
    }
  };

  const closeApp = (app) => {
    setOpenApps((appsList) => {
      return appsList.filter((openApp) => openApp.name !== app.name);
    });
    setOpenWindows((windowsList) => {
      const newWindows = windowsList.filter(
        (openWindow) => openWindow.name !== app.name
      );
      if (newWindows.length === 0) {
        return newWindows;
      }
      if (focusedApp?.name === app.name) {
        const newApp = newWindows.find(
          (win) => win.zIndex >= newWindows.length
        );
        setFocusedApp(newApp);
      }
      return newWindows;
    });
  };

  const centerWindows = () => {
    setWindowPos({});
    setTimeout(() => {
      setWindowPos({ x: 0, y: 0 });
    }, 100);
  };

  return {
    focusApp,
    openApps,
    openApp,
    installedApps,
    systemApps,
    openWindows,
    focusedApp,
    closeApp,
    centerWindows,
    windowPos,
  };
};

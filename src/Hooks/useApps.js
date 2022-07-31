import { useState } from "react";

const apps = [
  {
    name: "Calculator",
    icon: "\uE1D0",
  },
  {
    name: "Clippy",
    icon: "\uE723",
  },
  {
    name: "Files",
    icon: "\uE7B8",
  },
];

export const useApps = () => {
  const [openApps, setOpenApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);
  const [installedApps, setInstalledApps] = useState(apps);
  const systemApps = [
    {
      name: "Clock",
      icon: "\uE121",
    },
    {
      name: "Settings",
      icon: "\uE713",
    },
  ];

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

  return {
    focusApp,
    openApps,
    openApp,
    installedApps,
    systemApps,
    openWindows,
    focusedApp,
    closeApp,
  };
};

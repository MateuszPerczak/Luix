import IFrame from "./IFrame/IFrame";
import About from "./About/About";
import Notepad from "./Notepad/Notepad";

const Dummy = () => {};

const apps = [
  {
    id: 0,
    name: "Settings",
    icon: "\uE713",
    tooltip: "Settings",
    component: Dummy,
    resizable: true,
  },
  {
    id: 1,
    name: "Paint",
    icon: "\uE2B1",
    tooltip: "Paint",
    component: Dummy,
    resizable: true,
  },
  {
    id: 2,
    name: "About",
    icon: "\uE946",
    tooltip: "About",
    component: About,
    resizable: false,
  },
  {
    id: 3,
    name: "IFrame",
    icon: "\uE774",
    tooltip: "IFrame",
    component: IFrame,
    resizable: true,
  },
  {
    id: 4,
    name: "Notepad",
    icon: "\uE104",
    tooltip: "Notepad",
    component: Notepad,
    resizable: true,
  },
  {
    id: 5,
    name: "Menu",
    icon: "\uE154",
    tooltip: "Menu",
    component: Dummy,
    resizable: true,
  },
];

export default apps;

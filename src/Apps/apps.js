import IFrame from "./IFrame/IFrame";
import About from "./About/About";

const Dummy = () => {};

const apps = [
  {
    id: 0,
    name: "Settings",
    icon: "\uE713",
    tooltip: "Settings",
    component: Dummy,
  },
  {
    id: 1,
    name: "Paint",
    icon: "\uE2B1",
    tooltip: "Paint",
    component: Dummy,
  },
  {
    id: 2,
    name: "About",
    icon: "\uE946",
    tooltip: "About",
    component: About,
  },
  {
    id: 3,
    name: "IFrame",
    icon: "\uE774",
    tooltip: "IFrame",
    component: IFrame,
  },
  {
    id: 4,
    name: "Menu",
    icon: "\uE154",
    tooltip: "Menu",
    component: Dummy,
  },
];

export default apps;

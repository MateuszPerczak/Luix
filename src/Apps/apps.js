import IFrame from "./IFrame/IFrame";
import Notepad from "./Notepad/Notepad";
import ToDos from "./ToDos/ToDos";

const Dummy = () => {
  return <div>App not ready</div>;
};

const apps = [
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
    name: "IFrame",
    icon: "\uE774",
    tooltip: "IFrame",
    component: IFrame,
    resizable: true,
  },
  {
    id: 3,
    name: "Notepad",
    icon: "\uE104",
    tooltip: "Notepad",
    component: Notepad,
    resizable: true,
  },
  {
    id: 4,
    name: "ToDos",
    icon: "\uE24A",
    tooltip: "ToDos",
    component: ToDos,
    resizable: true,
  },
  {
    id: 5,
    name: "Calculator",
    icon: "\uE1D0",
    tooltip: "Calculator",
    component: Dummy,
    resizable: true,
  },
];

export default apps;

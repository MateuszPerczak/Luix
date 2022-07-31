import StyledTaskbarMenu, { StyledTaskbarApps } from "./TaskbarMenu.style";
import TaskbarApp from "../TaskbarApp/TaskbarApp";

const TaskbarMenu = ({ isOpen, apps, setOpenApps, ...rest }) => {
  const openApp = (app) => {
    setOpenApps((appsList) => {
      return [...appsList, app];
    });
  };

  return (
    <StyledTaskbarMenu
      initial={{ opacity: 0, y: "200px", x: "-50%" }}
      animate={{ opacity: 1, y: isOpen ? "0px" : "200px" }}
      transition={{
        type: "spring",
        mass: 0.3,
        stiffness: 300,
        damping: 20,
      }}
      {...rest}
    >
      <StyledTaskbarApps>
        {apps.map((app, index) => {
          return (
            <TaskbarApp key={index} {...app} onClick={() => openApp(app)} />
          );
        })}
      </StyledTaskbarApps>
    </StyledTaskbarMenu>
  );
};

export default TaskbarMenu;

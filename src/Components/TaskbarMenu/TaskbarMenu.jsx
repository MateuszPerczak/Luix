import StyledTaskbarMenu, {
  StyledTaskbarSystemApps,
  StyledTaskbarApps,
} from "./TaskbarMenu.style";
import TaskbarApp from "../TaskbarApp/TaskbarApp";

const TaskbarMenu = ({ isOpen, setIsOpen, appsMenager, ...rest }) => {
  const openApp = (app) => {
    appsMenager.openApp(app);
    setIsOpen(false);
  };

  return (
    <StyledTaskbarMenu
      initial={{ opacity: 0, y: "200px", x: "-50%" }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0px" : "200px" }}
      transition={{
        type: "spring",
        mass: 0.3,
        stiffness: 300,
        damping: 20,
      }}
      {...rest}
    >
      <StyledTaskbarApps>
        {appsMenager.installedApps.map((app, index) => {
          return (
            <TaskbarApp key={index} {...app} onClick={() => openApp(app)} />
          );
        })}
      </StyledTaskbarApps>

      <StyledTaskbarSystemApps>
        {appsMenager.systemApps.map((app, index) => {
          return (
            <TaskbarApp key={index} {...app} onClick={() => openApp(app)} />
          );
        })}
      </StyledTaskbarSystemApps>
    </StyledTaskbarMenu>
  );
};

export default TaskbarMenu;

import { AnimatePresence } from "framer-motion";
import StyledTaskbarMenu, { StyledTaskbarApps } from "./TaskbarMenu.style";
import TaskbarApp from "../TaskbarApp/TaskbarApp";

const TaskbarMenu = ({ isOpen, apps, ...rest }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledTaskbarMenu
          initial={{ opacity: 0, y: "200px", x: "-50%" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0, y: "200px" }}
          transition={{
            type: "spring",
            mass: 0.3,
            stiffness: 300,
            damping: 20,
          }}
          {...rest}
        >
          <StyledTaskbarApps>
            {apps.map((app) => {
              return <TaskbarApp key={app.name} {...app} />;
            })}
          </StyledTaskbarApps>
        </StyledTaskbarMenu>
      )}
    </AnimatePresence>
  );
};

export default TaskbarMenu;

import { AnimatePresence } from "framer-motion";
import StyledTaskbarMenu, {
  StyledTaskbarMenuBottom,
  StyledTaskbarMenuTop,
} from "./TaskbarMenu.style";

const TaskbarMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledTaskbarMenu
          initial={{ opacity: 0, y: "800px", x: "-50%" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0, y: "800px" }}
          transition={{
            type: "spring",
            mass: 0.3,
            stiffness: 300,
            damping: 20,
          }}
        >
          <StyledTaskbarMenuTop></StyledTaskbarMenuTop>
          <StyledTaskbarMenuBottom></StyledTaskbarMenuBottom>
        </StyledTaskbarMenu>
      )}
    </AnimatePresence>
  );
};

export default TaskbarMenu;

import StyledTaskbar from "./Taskbar.style";
import TaskbarApp from "../TaskbarApp/TaskbarApp";
import TaskbarMenu from "../TaskbarMenu/TaskbarMenu";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Taskbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TaskbarMenu isOpen={isOpen} />
      <StyledTaskbar layout>
        <AnimatePresence>
          <TaskbarApp icon="&#xE154;" onClick={() => setIsOpen(!isOpen)} />
          {/* <TaskbarApp icon="&#xE115;" />
          <TaskbarApp icon="&#xE1D3;" />
          <TaskbarApp icon="&#xE25C;" />
          <TaskbarApp icon="&#xE2B1;" /> */}
        </AnimatePresence>
      </StyledTaskbar>
    </>
  );
};

export default Taskbar;

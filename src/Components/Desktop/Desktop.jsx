import styled from "@emotion/styled";
import apps from "../../Apps/apps";
import TaskBar from "../TaskBar/TaskBar";
import WindowProvider from "../WindowProwider/WindowProvider";
import Window from "../Window/Window";

const StyledLoader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Desktop = () => {
  return (
    <StyledLoader>
      <WindowProvider>
        <Window />
      </WindowProvider>
      <TaskBar apps={apps} />
    </StyledLoader>
  );
};

export default Desktop;

import styled from "@emotion/styled";
import Draggable from "react-draggable";
import WindowTitle from "./WindowTitle";
import { createElement } from "react";

const StyledWindow = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  resize: ${({ resizable }) => {
    return resizable ? "both" : "none";
  }};
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  animation: fadeIn 300ms;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const StyledContent = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  background-color: ${({ theme: { background } }) => {
    return background;
  }};
`;

const Window = ({ name, icon, id, component, resizable, setOpenApps }) => {
  return (
    <Draggable handle={`.app-${id}`} bounds="parent">
      <StyledWindow resizable={resizable}>
        <WindowTitle
          name={name}
          icon={icon}
          id={id}
          setOpenApps={setOpenApps}
        />
        <StyledContent>{createElement(component)}</StyledContent>
      </StyledWindow>
    </Draggable>
  );
};

export default Window;

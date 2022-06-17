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
`;

const StyledContent = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  background-color: ${({ theme: { background } }) => {
    return background;
  }};
`;

const Window = ({ name, icon, component, resizable }) => {
  return (
    <Draggable handle={`.app-${name}`} bounds="parent">
      <StyledWindow resizable={resizable}>
        <WindowTitle name={name} icon={icon} />
        <StyledContent>{createElement(component)}</StyledContent>
      </StyledWindow>
    </Draggable>
  );
};

export default Window;

import styled from "@emotion/styled";
import Draggable from "react-draggable";
import TitleBar from "../TitleBar/TitleBar";

const StyledWindow = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;

  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { background } }) => {
    return background;
  }};
`;

const Window = () => {
  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      scale={1}
    >
      <StyledWindow>
        <TitleBar className="handle">
          <span>Settings</span>
        </TitleBar>
        <StyledContent></StyledContent>
      </StyledWindow>
    </Draggable>
  );
};

export default Window;

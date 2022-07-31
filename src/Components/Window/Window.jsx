import Draggable from "react-draggable";
import StyledWindow, {
  StyledWindowTitle,
  StyledWindowTitleWrapper,
  StyledWindowContent,
  StyledWindowClose,
} from "./Window.style";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const Window = ({ icon, name, zIndex, appsMenager }) => {
  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      axis="both"
      onMouseDown={() => appsMenager.focusApp({ name })}
      enableUserSelectHack
    >
      <StyledWindow style={{ zIndex }}>
        <StyledWindowTitleWrapper className="handle">
          <StyledWindowTitle>
            <Icon>{icon}</Icon>
            <Text>{name}</Text>
          </StyledWindowTitle>
          <StyledWindowClose onClick={() => appsMenager.closeApp({ name })}>
            <Icon>&#xE106;</Icon>
          </StyledWindowClose>
        </StyledWindowTitleWrapper>
        <StyledWindowContent>
          <div>App: {name}</div>
          <div>
            Icon: <Icon>{icon}</Icon>
          </div>
          <div>ZIndex: {zIndex}</div>
        </StyledWindowContent>
      </StyledWindow>
    </Draggable>
  );
};
export default Window;

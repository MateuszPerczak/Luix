import StyledWindow, {
  StyledWindowTitle,
  StyledWindowTitleWrapper,
  StyledWindowContent,
  StyledWindowClose,
} from "./Window.style";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { useDragControls } from "framer-motion";

const Window = ({ icon, name, zIndex, appsManager, constraintsRef }) => {
  const controls = useDragControls();

  const winPos = appsManager.windowPos;

  const startDrag = (event) => {
    controls.start(event);
    appsManager.focusApp({ name });
  };

  return (
    <StyledWindow
      drag
      style={{ zIndex }}
      dragControls={controls}
      dragConstraints={constraintsRef}
      dragListener={false}
      dragElastic={0.5}
      dragMomentum={false}
      transition={{ type: "spring", mass: 0.6, stiffness: 200, damping: 20 }}
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        ...winPos,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      isfocused={`${appsManager.focusedApp.name === name}`}
    >
      <StyledWindowTitleWrapper onPointerDown={startDrag}>
        <StyledWindowTitle>
          <Icon>{icon}</Icon>
          <Text>{name}</Text>
        </StyledWindowTitle>
        <StyledWindowClose onClick={() => appsManager.closeApp({ name })}>
          <Icon>&#xE106;</Icon>
        </StyledWindowClose>
      </StyledWindowTitleWrapper>
      <StyledWindowContent>
        <Icon>{icon}</Icon>
      </StyledWindowContent>
    </StyledWindow>
  );
};
export default Window;

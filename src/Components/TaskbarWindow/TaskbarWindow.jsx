import StyledTaskbarWindow from "./TaskbarWindow.style";
import Icon from "../Icon/Icon";

const TaskbarWindow = ({ ...rest }) => {
  return (
    <StyledTaskbarWindow {...rest}>
      <Icon>&#xE148;</Icon>
    </StyledTaskbarWindow>
  );
};

export default TaskbarWindow;

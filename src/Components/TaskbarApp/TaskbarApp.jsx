import StyledTaskbarApp from "./TaskbarApp.style";
import Icon from "../Icon/Icon";

const TaskbarApp = ({ icon, ...rest }) => {
  return (
    <StyledTaskbarApp
      {...rest}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "0%" }}
    >
      <Icon>{icon}</Icon>
    </StyledTaskbarApp>
  );
};

export default TaskbarApp;

import StyledTaskbarClock, {
  StyledTaskbarClockLeft,
} from "./TaskbarClock.style";
import Icon from "../Icon/Icon";

const TaskbarClock = ({ ...rest }) => {
  return (
    <StyledTaskbarClock {...rest}>
      <StyledTaskbarClockLeft>
        <span>10:05</span>
        <span>31.07.2022</span>
      </StyledTaskbarClockLeft>
      <Icon>&#xE121;</Icon>
    </StyledTaskbarClock>
  );
};

export default TaskbarClock;

import StyledTaskbarClock, {
  StyledTaskbarClockLeft,
} from "./TaskbarClock.style";
import Icon from "../Icon/Icon";
import useClock from "../../Hooks/useClock";

const TaskbarClock = ({ ...rest }) => {
  const { time, date } = useClock();

  return (
    <StyledTaskbarClock {...rest}>
      <StyledTaskbarClockLeft>
        <span>{time}</span>
        <span>{date}</span>
      </StyledTaskbarClockLeft>
      <Icon>&#xE121;</Icon>
    </StyledTaskbarClock>
  );
};

export default TaskbarClock;

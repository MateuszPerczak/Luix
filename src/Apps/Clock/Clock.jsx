import StyledClock, {
  StyledClockEntry,
  StyledClockTime,
  StyledClockWrapper,
  StyledClockDate,
  StyledClockText,
} from "./Clock.style";
import Icon from "../../Components/Icon/Icon";
import useClock from "../../Hooks/useClock";

const Clock = () => {
  const { time, date, isDay } = useClock();

  return (
    <StyledClock>
      <StyledClockEntry>
        <Icon>{isDay ? "\uE706" : "\uEC46"}</Icon>
        <StyledClockWrapper>
          <StyledClockTime>{time}</StyledClockTime>
          <StyledClockDate>
            <StyledClockText>Local time</StyledClockText>
            <StyledClockText>{date}</StyledClockText>
          </StyledClockDate>
        </StyledClockWrapper>
      </StyledClockEntry>
    </StyledClock>
  );
};

export default Clock;

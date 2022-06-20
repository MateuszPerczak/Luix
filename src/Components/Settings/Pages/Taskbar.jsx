import styled from "@emotion/styled";
import { useContext } from "react";
import Properties from "../../../Contexts/Properties";
import Icon from "../../Icon/Icon";

const StyledTaskbar = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  overflow-y: scroll;
  height: calc(100% - 54px);
`;

const StyledText = styled.span`
  font-size: 20px;
`;

const StyledSetting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
  border-radius: 6px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  user-select: none;
  transition: background-color 200ms, transform 200ms;
  &:hover {
    background: ${({ theme: { taskBar } }) => {
      return taskBar;
    }};
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Taskbar = () => {
  const { properties, setProperties } = useContext(Properties);

  return (
    <StyledTaskbar>
      <StyledSetting>
        <StyledText>Taskbat icons alignment</StyledText>
        <StyledButton
          onClick={() =>
            setProperties((prevProperties) => {
              return {
                ...prevProperties,
                iconPosition:
                  prevProperties.iconPosition === "center"
                    ? "flex-end"
                    : "center",
              };
            })
          }
        >
          <Icon>
            {properties.iconPosition === "center" ? "\uE1A1" : "\uE1A2"}
          </Icon>
        </StyledButton>
      </StyledSetting>
    </StyledTaskbar>
  );
};

export default Taskbar;

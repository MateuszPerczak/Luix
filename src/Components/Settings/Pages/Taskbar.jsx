import styled from "@emotion/styled";
import { useContext } from "react";
import Properties from "../../../Contexts/Properties";
import Icon from "../../Icon/Icon";
import SettingContainer from "../SettingContainer";
import SettingText from "../SettingText";

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
    <SettingContainer>
      <SettingText>Taskbat icons alignment</SettingText>
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
    </SettingContainer>
  );
};

export default Taskbar;

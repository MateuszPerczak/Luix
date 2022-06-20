import styled from "@emotion/styled";
import { useContext } from "react";
import Propertie from "../../Contexts/Properties";
import Icon from "../Icon/Icon";

const StyledSetting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
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

const StyledText = styled.span`
  font-size: 25px;
  padding-top: 4px;
  line-height: 1;
`;

const IconPosition = () => {
  const { properties, setProperties } = useContext(Propertie);

  const alignment = {
    center: "\uE1A1",
    "flex-end": "\uE1A2",
  };

  const toggleAlignment = () => {
    setProperties((prevProperties) => {
      return {
        ...prevProperties,
        iconPosition:
          prevProperties.iconPosition === "center" ? "flex-end" : "center",
      };
    });
  };

  return (
    <StyledSetting>
      <StyledText>Taskbar icons alignment</StyledText>
      <StyledButton onClick={toggleAlignment}>
        <Icon>{alignment[properties.iconPosition]}</Icon>
      </StyledButton>
    </StyledSetting>
  );
};

export default IconPosition;

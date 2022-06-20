import styled from "@emotion/styled";
import { useContext } from "react";
import Propertie from "../../Contexts/Properties";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 20px;
`;

const StyledDiv = styled.div`
  cursor: pointer;
  background-color: #333;
  &:active {
    background-color: #444;
  }
`;

const SettingsApp = () => {
  const { properties, setProperties } = useContext(Propertie);

  return (
    <StyledSettings>
      <StyledDiv
        onClick={() => {
          setProperties((prevProperties) => {
            return {
              ...prevProperties,
              iconPosition:
                prevProperties.iconPosition === "center"
                  ? "flex-end"
                  : "center",
            };
          });
        }}
      >
        {properties.iconPosition}
      </StyledDiv>
    </StyledSettings>
  );
};

const Settings = {
  id: 0,
  icon: "\uE115",
  name: "Settings",
  component: SettingsApp,
  tooltip: "Settings",
  resizable: true,
};

export default Settings;

import styled from "@emotion/styled";
import { useContext } from "react";
import Properties from "../../../Contexts/Properties";
import Icon from "../../Icon/Icon";
import SettingContainer from "../SettingContainer";
import SettingText from "../SettingText";
import SettingButton from "../SettingButton";

const Taskbar = () => {
  const { properties, setProperties } = useContext(Properties);

  return (
    <SettingContainer>
      <SettingText>Taskbat icons alignment</SettingText>
      <SettingButton
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
      </SettingButton>
    </SettingContainer>
  );
};

export default Taskbar;

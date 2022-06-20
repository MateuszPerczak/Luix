import styled from "@emotion/styled";
import { useContext } from "react";
import Properties from "../../../Contexts/Properties";
import Icon from "../../Icon/Icon";
import SettingContainer from "../SettingContainer";
import SettingText from "../SettingText";
import SettingButton from "../SettingButton";

const StyledApps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
`;

const Apps = () => {
  const { properties, setProperties } = useContext(Properties);

  return (
    <StyledApps>
      {properties.apps.map((app) => {
        return (
          <SettingContainer key={app.id}>
            <StyledApp>
              <Icon>{app.icon}</Icon>
              <SettingText>{app.name}</SettingText>
            </StyledApp>
            <SettingButton>
              <SettingText>ID: {app.id}</SettingText>
            </SettingButton>
          </SettingContainer>
        );
      })}
    </StyledApps>
  );
};

export default Apps;

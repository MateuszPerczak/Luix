import styled from "@emotion/styled";
import SettingsNavButton from "./SettingsNavButton";
import IconPosition from "./IconPosition";
import Icon from "../Icon/Icon";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const SettingsNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 100%;
  width: 50px;
  padding: 10px 0;
`;

const SettingsNavSpacer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SettingsHeader = styled.header`
  display: flex;
  font-size: 30px;
  width: 100%;
  padding: 5px 10px;
`;

const SettingsContent = styled.div`
  displey: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const SettingsApp = () => {
  return (
    <StyledSettings>
      <SettingsNav>
        <SettingsNavButton>
          <Icon>&#xE771;</Icon>
        </SettingsNavButton>
        <SettingsNavButton>
          <Icon>&#xE90E;</Icon>
        </SettingsNavButton>
        <SettingsNavButton>
          <Icon>&#xE74C;</Icon>
        </SettingsNavButton>
        <SettingsNavButton>
          <Icon>&#xEA86;</Icon>
        </SettingsNavButton>
        <SettingsNavSpacer />
        <SettingsNavButton>
          <Icon>&#xE946;</Icon>
        </SettingsNavButton>
      </SettingsNav>
      <SettingsContent>
        <SettingsHeader>Aperance</SettingsHeader>
      </SettingsContent>
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

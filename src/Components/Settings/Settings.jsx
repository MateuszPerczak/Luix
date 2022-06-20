import styled from "@emotion/styled";
import { useState, createElement } from "react";
import { pages } from "./pages";
import SettingsNavButton from "./SettingsNavButton";
import SettingsNav from "./SettingsNav";
import SettingsHeader from "./SettingsHeader";

import Icon from "../Icon/Icon";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const SettingsNavSpacer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SettingsContent = styled.div`
  displey: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const SettingsApp = () => {
  const [page, setPage] = useState(pages[0]);

  return (
    <StyledSettings>
      <SettingsNav>
        {pages.map((page) => {
          return (
            <SettingsNavButton key={page.id} onClick={() => setPage(page)}>
              <Icon>{page.icon}</Icon>
            </SettingsNavButton>
          );
        })}
        <SettingsNavSpacer />
        <SettingsNavButton>
          <Icon>&#xE946;</Icon>
        </SettingsNavButton>
      </SettingsNav>
      <SettingsContent>
        <SettingsHeader>{page.name}</SettingsHeader>
        {createElement(page.content)}
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

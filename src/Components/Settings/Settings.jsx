import styled from "@emotion/styled";
import { useState, createElement } from "react";
import { pages } from "./pages";
import Icon from "../Icon/Icon";
import About from "./Pages/About";

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

const SettingsHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 30px;
  width: 100%;
  height: 54px;
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

const SettingsNavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  aspect-ratio: 1;
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

const SettingsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  overflow-y: scroll;
  height: calc(100% - 54px);
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
        <SettingsNavButton onClick={() => setPage(About)}>
          <Icon>&#xE946;</Icon>
        </SettingsNavButton>
      </SettingsNav>
      <SettingsContent>
        <SettingsHeader>{page.name}</SettingsHeader>
        <SettingsPageWrapper>{createElement(page.content)}</SettingsPageWrapper>
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

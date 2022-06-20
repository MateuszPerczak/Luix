import styled from "@emotion/styled";
import IconPosition from "./IconPosition";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const SettingsApp = () => {
  return (
    <StyledSettings>
      <IconPosition />
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

// eslint-disable-next-line no-lone-blocks
{
  /* <StyledDiv
onClick={() => {}}
>
{properties.iconPosition}
</StyledDiv> */
}

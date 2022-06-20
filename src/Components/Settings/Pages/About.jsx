import styled from "@emotion/styled";
import SettingText from "../SettingText";
import Icon from "../../Icon/Icon";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 0 0 10px;
  border-radius: 6px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const StyledSpace = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AboutApp = () => {
  return (
    <StyledAbout>
      <StyledSpace>
        <Icon>&#xE7F9;</Icon>
        <SettingText>Luix - 0.0.1</SettingText>
      </StyledSpace>
      <SettingText>Author: Mateusz Perczak</SettingText>
    </StyledAbout>
  );
};

const About = {
  id: 0,
  name: "About",
  content: AboutApp,
};

export default About;

import styled from "@emotion/styled";
import SettingText from "../SettingText";
import Icon from "../../Icon/Icon";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  padding: 5px 0 5px 10px;
  border-radius: 6px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const StyledSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledLink = styled.a`
  display: flex;
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;

const AboutApp = () => {
  return (
    <StyledAbout>
      <StyledSpace>
        <Icon>&#xF5A3;</Icon>
        <SettingText>Luix - 0.0.1</SettingText>
      </StyledSpace>
      <StyledSpace>
        <Icon>&#xEB95;</Icon>
        <SettingText>MIT</SettingText>
      </StyledSpace>
      <StyledSpace>
        <Icon>&#xE167;</Icon>
        <StyledLink href="https://github.com/MateuszPerczak" target="_blank">
          <SettingText>Github</SettingText>
        </StyledLink>
        <StyledLink href="https://mateuszperczak.github.io/" target="_blank">
          <SettingText>Website</SettingText>
        </StyledLink>
        <StyledLink
          href="https://github.com/MateuszPerczak/Luix"
          target="_blank"
        >
          <SettingText>Project</SettingText>
        </StyledLink>
      </StyledSpace>
      <StyledSpace>
        <Icon>&#xE77B;</Icon>
        <SettingText>Author: Mateusz Perczak</SettingText>
      </StyledSpace>
    </StyledAbout>
  );
};

const About = {
  id: 0,
  name: "About",
  content: AboutApp,
};

export default About;

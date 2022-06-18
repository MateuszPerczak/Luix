import styled from "@emotion/styled";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const StyledIcon = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 60px;
`;

const StyledText = styled.span`
  font-size: 25px;
`;
const StyledAuthor = styled.span`
  font-size: 20px;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;

const StyledButtonIcon = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 20px;
`;

const StyledSpace = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
`;

const StyledCopy = styled.span`
  padding-top: 4px;
  font-size: 25px;
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledIcon>&#xE727;</StyledIcon>
      <StyledText>LUIX - Alpha 0.1.4</StyledText>
      <StyledAuthor>Author: Mateusz Perczak</StyledAuthor>
      <StyledSpace>
        <StyledButton
          href="https://github.com/MateuszPerczak/LUIX"
          target="_blank"
        >
          <StyledButtonIcon>&#xE167;</StyledButtonIcon>
          <span>This project</span>
        </StyledButton>
        <StyledButton href="https://github.com/MateuszPerczak" target="_blank">
          <StyledButtonIcon>&#xE167;</StyledButtonIcon>
          <span>Github</span>
        </StyledButton>
        <StyledButton href="https://mateuszperczak.github.io/" target="_blank">
          <StyledButtonIcon>&#xE167;</StyledButtonIcon>
          <span>Portfolio</span>
        </StyledButton>
      </StyledSpace>
      <StyledSpace>
        <StyledButtonIcon>&#xEB95;</StyledButtonIcon>
        <StyledCopy>MIT</StyledCopy>
      </StyledSpace>
    </StyledAbout>
  );
};

export default About;

import styled from "@emotion/styled";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledIcon = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 30px;
  animation: pulse 0.5s linear infinite;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledIcon>&#xE006;</StyledIcon>
      <h1>LUIX V0.0.1</h1>
      <h2>Author: Mateusz Perczak</h2>
    </StyledAbout>
  );
};

export default About;

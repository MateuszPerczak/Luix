import styled from "@emotion/styled";

const StyledIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
`;

const IFrame = () => {
  return <StyledIFrame src="https://mateuszperczak.github.io/" />;
};

export default IFrame;

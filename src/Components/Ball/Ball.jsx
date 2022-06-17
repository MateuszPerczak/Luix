import styled from "@emotion/styled";

const Ball = styled.div`
  position: fixed;
  height: 200%;
  aspect-ratio: 1;
  border-radius: 50%;
  top: -50%;
  left: 50%;
  background: radial-gradient(
    circle at 100px 100px,
    ${({ theme: { ball } }) => {
      return ball;
    }},
    #000
  );
  box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
`;

export default Ball;

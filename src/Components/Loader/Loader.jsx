import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";

const StyledLoader = styled(animated.div)`
  font-size: 7vmin;
`;

const Loader = () => {
  const animatedLoader = useSpring({});

  return <StyledLoader style={animatedLoader}>LUIX V0.0.1</StyledLoader>;
};

export default Loader;

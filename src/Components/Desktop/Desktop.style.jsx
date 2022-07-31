import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledDesktop = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  flex: 1;
  //background-color: ${({ theme: { desktop } }) => desktop};
  background-image: url("/images/furry.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export default StyledDesktop;

import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledDesktop = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  //background-color: ${({ theme: { desktop } }) => desktop};
  background-image: url("/images/furry.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export default StyledDesktop;

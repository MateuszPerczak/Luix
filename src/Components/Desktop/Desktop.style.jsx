import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledDesktop = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme: { desktop } }) => desktop};
`;

export default StyledDesktop;

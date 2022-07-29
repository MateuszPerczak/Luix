import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledLoader = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme: { background } }) => background};
`;

export const AnimatedLoader = styled(motion.div)`
  font-size: 6rem;
  line-height: 0.8rem;
`;

export default StyledLoader;

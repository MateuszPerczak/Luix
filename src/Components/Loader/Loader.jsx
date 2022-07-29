import StyledLoader, { AnimatedLoader } from "./Loader.style";

const Loader = () => {
  return (
    <StyledLoader>
      <AnimatedLoader
        initial={{ opacity: 0, y: "800%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "-800%" }}
        transition={{ type: "spring", mass: 0.6 }}
      >
        LUIX
      </AnimatedLoader>
    </StyledLoader>
  );
};

export default Loader;

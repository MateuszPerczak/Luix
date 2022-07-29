import StyledDesktop from "./Desktop.style";

const Desktop = () => {
  return (
    <StyledDesktop
      initial={{ opacity: 0, scale: 0.8, borderRadius: "10px" }}
      animate={{ opacity: 1, scale: 1, borderRadius: "0px" }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", mass: 0.6 }}
    >
      dasdsd
    </StyledDesktop>
  );
};

export default Desktop;

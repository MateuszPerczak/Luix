import { ThemeProvider } from "@emotion/react";
import { themes } from "../../Themes/themes";

const AppProvider = ({ children }) => {
  return <ThemeProvider theme={themes.dark}>{children}</ThemeProvider>;
};

export default AppProvider;

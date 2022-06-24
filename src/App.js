import Styles from "./Global/Styles";
import { themes } from "./Themes/themes";
import { ThemeProvider } from "@emotion/react";
import useSystemTheme from "react-use-system-theme";
import Desktop from "./Components/Desktop/Desktop";

const App = () => {
  const theme = useSystemTheme("dark");
  const style = themes[theme === "dark" ? "dark" : "light"];

  return (
    <>
      <ThemeProvider theme={style}>
        <Styles />
        <Desktop />
      </ThemeProvider>
    </>
  );
};

export default App;

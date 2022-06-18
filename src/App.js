import Styles from "./Global/Styles";
import { themes } from "./Themes/themes";
import { ThemeProvider } from "@emotion/react";
import useSystemTheme from "react-use-system-theme";
import Desktop from "./Components/Desktop/Desktop";
import Ball from "./Components/Ball/Ball";

const App = () => {
  const theme = useSystemTheme("dark");
  const style = themes[theme === "dark" ? "dark" : "light"];

  return (
    <>
      <Styles theme={style} />
      <ThemeProvider theme={style}>
        <Desktop />
        <Ball />
      </ThemeProvider>
    </>
  );
};

export default App;

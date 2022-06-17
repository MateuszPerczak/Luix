import Styles from "./Global/Styles";
import { themes } from "./Themes/themes";
import { ThemeProvider } from "@emotion/react";
import useSystemTheme from "react-use-system-theme";
import Game from "./Components/Game/Game";

const App = () => {
  const theme = useSystemTheme("dark");
  const style = themes[theme === "dark" ? "dark" : "light"];

  return (
    <>
      <Styles theme={themes.light} />
      <ThemeProvider theme={themes.light}>
        <Game />
      </ThemeProvider>
    </>
  );
};

export default App;

import { Global, css, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: "Dongle", sans-serif;
          background: ${theme.background};
          color: ${theme.color};
        }
        #root {
          width: 100%;
          height: 100vh;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        ::-webkit-scrollbar {
          width: 6px;
          background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.scroll};
          border-radius: 10px;
        }
      `}
    />
  );
};

export default GlobalStyle;

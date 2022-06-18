import { Global, css, useTheme } from "@emotion/react";

const Styles = () => {
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: ${theme.background};
        }
        ::-webkit-scrollbar-thumb {
          background: ${theme.taskBar};
          border-radius: 4px;
        }
        ::selection {
          background: ${theme.color};
          color: ${theme.background};
        }
      `}
    />
  );
};

export default Styles;

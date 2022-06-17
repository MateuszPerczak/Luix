import { Global, css } from "@emotion/react";

const Styles = ({ theme }) => {
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
      `}
    />
  );
};

export default Styles;

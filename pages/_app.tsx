import { ThemeProvider } from "styled-components";
import "tailwindcss/tailwind.css";

import GlobalStyle from "ui/GlobalStyle";
import theme from "ui/Theme";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

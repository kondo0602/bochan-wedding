import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5a700",
    },
  },
  typography: {
    fontFamily: "DelaGothic",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

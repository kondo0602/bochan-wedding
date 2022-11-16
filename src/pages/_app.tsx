import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";

const theme = createTheme({
  palette: {
    // mode: "dark",
  },
  typography: {
    fontFamily: "Silkscreen",
    // TODO: なぜかこのフォントだけ適用されない...
    // fontFamily: "Press Start 2P",
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

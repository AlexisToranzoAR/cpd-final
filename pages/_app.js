import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#84329B",
      light: "#84329B",
    },
    secondary: {
      main: "#E9E9E9",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5075d0",
    },
    secondary: {
      main: "#7d71ff",
    },
    background: {
      paper: "#efe6d5",
    },
  },
});

export default lightTheme;

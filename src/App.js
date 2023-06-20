import Grid2 from "@mui/material/Unstable_Grid2";
import AboutMe from "./components/AboutMe";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./themes/darkTheme.js";
import lightTheme from "./themes/lightTheme";
import { Fragment } from "react";
import ContentDisplay from "./components/ContentDisplay";
import MobileContentDisplay from "./components/MobileContentDisplay";

function App() {
  if (window.innerWidth <= 1280) {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Fragment>
            <ThemeProvider theme={lightTheme}>
              <MobileContentDisplay />
            </ThemeProvider>
          </Fragment>
        </ThemeProvider>
      </div>
    );
  } else if (window.innerWidth <= 1600) {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Fragment>
            <Grid2 container spacing={0} sx={{ backgroundColor: "#EFECE9" }}>
              <Grid2 xs={9} height="100vh" overflow="scroll">
                <ThemeProvider theme={lightTheme}>
                  <ContentDisplay />
                </ThemeProvider>
              </Grid2>
              <Grid2 xs={3}>
                <AboutMe />
              </Grid2>
            </Grid2>
          </Fragment>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Fragment>
            <Grid2 container spacing={0} sx={{ backgroundColor: "#EFECE9" }}>
              <Grid2 xs={10} height="100vh" overflow="scroll">
                <ThemeProvider theme={lightTheme}>
                  <ContentDisplay />
                </ThemeProvider>
              </Grid2>
              <Grid2 xs={2}>
                <AboutMe />
              </Grid2>
            </Grid2>
          </Fragment>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

import Grid2 from "@mui/material/Unstable_Grid2";
import AboutMe from "./components/AboutMe";
import GalleryTabs from "./components/GalleryTabs";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./themes/darkTheme.js";
import lightTheme from "./themes/lightTheme";
import { Fragment } from "react";
import { tabList } from "./data";
import MobileTabs from "./components/MobileTabs";
import LandingPage from "./components/LandingPage";
import ContentDisplay from "./components/ContentDisplay";

function App() {
  if (window.screen.width <= 1280) {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Fragment>
            <ThemeProvider theme={lightTheme}>
              <MobileTabs props={tabList} />
            </ThemeProvider>
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
  }
}

export default App;

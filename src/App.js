import "./App.css";
import Galleries from "./components/Galleries";
import Grid2 from "@mui/material/Unstable_Grid2";
import AboutMe from "./components/AboutMe";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./themes/darkTheme.js";
import { Fragment } from "react";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Fragment>
          <Grid2 container spacing={0} sx={{ backgroundColor: "#EFECE9" }}>
            <Grid2 xs={9} height="100vh" overflow="scroll">
              <Galleries />
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

export default App;

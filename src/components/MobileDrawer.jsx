import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import AboutMe from "./AboutMe";
import Stack from "@mui/material/Stack";

export default function MobileDrawer({ children }) {
  const [state, setState] = React.useState({
    left: false,

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        backgroundColor="#121212"
        height="100%"
      >
        {children}
      </Box>
    </ThemeProvider>
  );

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <React.Fragment>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            backgroundColor="#121212"
            padding={2}
          >
            <Button
              onClick={toggleDrawer("left", true)}
              backgroundColor="#121212"
              variant="contained"
              href="#contained-buttons"
            >
              Galleries
            </Button>
            <Button
              onClick={toggleDrawer("right", true)}
              backgroundColor="#121212"
              variant="contained"
              href="#contained-buttons"
            >
              About Me
            </Button>
          </Stack>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            width="50vh"
          >
            <AboutMe></AboutMe>
          </Drawer>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

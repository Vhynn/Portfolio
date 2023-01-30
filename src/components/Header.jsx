import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>Portfolio</Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

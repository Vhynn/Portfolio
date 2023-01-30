import { Drawer, Paper } from "@mui/material";

export default function AboutMe() {
  return (
    <Drawer
      variant="permanent"
      ModalProps={{
        keepMounted: true,
      }}
      anchor="right"
      sx={{
        "& .MuiDrawer-root": {
          position: "absolute",
        },
        "& .MuiPaper-root": {
          position: "sticky",
        },
      }}
    >
      <Paper
        sx={{
          padding: 4,
        }}
      >
        <img
          src="https://www.akc.org/wp-content/uploads/2017/11/Borzoi-running-outdoors.jpg"
          alt="Dog"
          width={250}
          height={200}
        />
      </Paper>
      <Paper
        sx={{
          padding: 4,
          letterSpacing: 2,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paper>
    </Drawer>
  );
}

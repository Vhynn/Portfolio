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
        height: "100vh",
      }}
    >
      <Paper
        square={true}
        sx={{
          padding: 4,
          paddingBottom: 0,
        }}
      >
        <img
          src={require("./images/DonovanAndFlowers.jpeg")}
          alt="Donovan and flowers"
          width={"75%"}
          height={"100%"}
        />
      </Paper>
      <Paper
        square={true}
        sx={{
          padding: 6,
          paddingTop: 1,
          paddingBottom: 0,
          letterSpacing: 2,
          fontSize: "small",
          height: "100vh",
        }}
      >
        <h4 padding={0}>About Me</h4>
        <p>Hi, I'm Donovan, I like to make things. </p>
        <p>
          This is a website made by me to show some of the things I've done.
          Mostly I've just painted miniatures and made dioramas but I've slowly
          been branching out into more things lately. Right now you can see
          pictures of some of the projects I've finished as well as photos I've
          taken and enjoy, though I'm by no means a talented photographer. I
          plan on keeping this site updated as I work on more projects so feel
          free to check back if you're interested, and thanks for stopping by!
        </p>
      </Paper>
    </Drawer>
  );
}

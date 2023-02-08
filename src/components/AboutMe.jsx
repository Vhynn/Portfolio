import { Box, Drawer, Paper } from "@mui/material";

const DonovanImage = () => {
  if (window.screen.width <= 1280) {
    return (
      <img
        src={require("./images/DonovanAndFlowers.jpeg")}
        alt="Donovan and flowers"
        style={{
          maxWidth: "257px",
          height: "auto",
          width: "100%",
          marginLeft: "10%",
        }}
      />
    );
  } else {
    return (
      <img
        src={require("./images/DonovanAndFlowers.jpeg")}
        alt="Donovan and flowers"
        style={{
          maxWidth: "257px",
          height: "auto",
          width: "100%",
        }}
      />
    );
  }
};

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
        maxWidth: "80vw",
      }}
    >
      <Paper
        square={true}
        sx={{
          paddingLeft: 1,
          paddingBottom: 0,
          paddingRight: 1,
          paddingTop: 0.5,
        }}
      >
        <Box sx={{ paddingLeft: 5.3 }}>
          <h2 align="left"> HI, I'M DONOVAN</h2>
        </Box>
        <DonovanImage />
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
        <h3 align="left">I LIKE TO MAKE THINGS. </h3>
        <div align="left">
          <p width="50%">
            This is a website made by me to show some of the things I've done.
            Mostly I've just painted miniatures and made dioramas but I've
            slowly been branching out into more things lately. Right now you can
            see pictures of some of the projects I've finished as well as photos
            I've taken and enjoy, though I'm by no means a talented
            photographer. I plan on keeping this site updated as I work on more
            projects so feel free to check back if you're interested, and thanks
            for stopping by!
          </p>
        </div>
      </Paper>
    </Drawer>
  );
}

import { Box, Drawer, Paper } from "@mui/material";

const DonovanImage = () => {
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
};

const GithubIcon = () => {
  return (
    <a href="https://github.com/Vhynn/portfolio">
      <img
        src={require("./images/GithubIcon.png")}
        alt="Github Logo"
        style={{
          maxWidth: "50px",
          height: "auto",
          margin: "10px",
        }}
      />
    </a>
  );
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
        <Box sx={{ paddingLeft: "35px", letterSpacing: "1.5px" }}>
          <h2 align="left" letterSpacing="1.5px">
            HI, I'M DONOVAN
          </h2>
        </Box>
        <DonovanImage />
      </Paper>
      <Paper
        square={true}
        sx={{
          padding: 6,
          paddingTop: 1,
          paddingBottom: 0,
          paddingLeft: "43px",
          letterSpacing: 1.5,
          fontSize: "small",
          height: "100vh",
        }}
      >
        <h3 align="left">I LIKE TO MAKE THINGS. </h3>
        <div align="left">
          <p width="50%">
            This website is a gallery created by me to showcase some of my
            various art projects, mainly in the form of painted miniatures and
            dioramas. However, I've also been exploring other mediums lately.
            You can browse through pictures of the completed projects as well as
            some of my favorite photos, though I should mention I am by no means
            a talented photographer. I plan to consistently update this site as
            I complete projects, so feel free to come back and check for updates
            if you're interested. Thanks for visiting!
          </p>
          <GithubIcon />
        </div>
      </Paper>
    </Drawer>
  );
}

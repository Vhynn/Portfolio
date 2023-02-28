import { Card, ImageList, Paper, ThemeProvider } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import "./GalleryPreview.css";

const GalleryPreview2 = () => {
  return (
    <div className="HalfHolder">
      <ThemeProvider theme={darkTheme}>
        <Card sx={{ m: 1, width: "100%" }}>
          <div>
            <Paper
              className="Gallery--Button2"
              id="ForceTransition2"
              sx={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.21), rgba(255, 255, 255, 0.12))",
              }}
            >
              <div className="Title--Bar">
                <h3>NECRONS</h3>
              </div>
              <ImageList
                cols={3}
                gap={2}
                sx={{
                  padding: "15px",
                  paddingTop: "15px",
                  paddingBottom: "10px",
                }}
                className="ImageList--HalfPage"
              >
                <img
                  src="https://styles.redditmedia.com/t5_23x4ug/styles/communityIcon_i1d3rmkama551.png"
                  alt=""
                  width="120px"
                  height="auto"
                  display="block"
                  className="Thumb--Gallery2"
                />
                <img
                  src="https://styles.redditmedia.com/t5_23x4ug/styles/communityIcon_i1d3rmkama551.png"
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery2"
                />
                <img
                  src="https://styles.redditmedia.com/t5_23x4ug/styles/communityIcon_i1d3rmkama551.png"
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery2"
                />
              </ImageList>
            </Paper>
            <p className="Description" width="100%" float="right">
              Example text that will eventually be a description of the gallery
              that is being displayed
            </p>
          </div>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default GalleryPreview2;

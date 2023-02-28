import { Card, ImageList, Paper, ThemeProvider } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import "./GalleryPreview.css";

const GalleryPreview = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Card sx={{ m: 7 }}>
          <div width="100%" className="FlexDiv">
            <Paper
              className="Gallery--Button"
              id="ForceTransition"
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
              >
                <img
                  src="https://styles.redditmedia.com/t5_23x4ug/styles/communityIcon_i1d3rmkama551.png"
                  alt=""
                  width="120px"
                  height="auto"
                  display="block"
                  className="Thumb--Gallery"
                />
                <img
                  src="https://styles.redditmedia.com/t5_23x4ug/styles/communityIcon_i1d3rmkama551.png"
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery"
                />
                <img
                  src="https://styles.redditmedia.com/t5_23x4ug/styles/communityIcon_i1d3rmkama551.png"
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery"
                />
              </ImageList>
            </Paper>
            <p className="Description" width="50%" float="right">
              Example text that will eventually be a description of the gallery
              that is being displayed
            </p>
          </div>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default GalleryPreview;

import { Card, ImageList, Paper, ThemeProvider } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import "./GalleryPreview.css";

const GalleryPreview = ({ handleClick, gallery }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Card sx={{ m: 7 }}>
          <div width="100%" className="FlexDiv" display="flex !important">
            <Paper
              className="Gallery--Button"
              id="ForceTransition"
              sx={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.21), rgba(255, 255, 255, 0.12))",
              }}
              onClick={() =>
                handleClick(gallery.parentValue, gallery.a11yProps)
              }
            >
              <div className="Title--Bar">
                <h3>{gallery.title}</h3>
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
                  src={gallery.icons[0]}
                  alt=""
                  width="120px"
                  height="auto"
                  display="block"
                  className="Thumb--Gallery"
                />
                <img
                  src={gallery.icons[1]}
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery"
                />
                <img
                  src={gallery.icons[2]}
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery"
                />
              </ImageList>
            </Paper>
            <p className="Description" width="50%" float="right">
              {gallery.caption}
            </p>
          </div>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default GalleryPreview;

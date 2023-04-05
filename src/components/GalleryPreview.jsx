import { Button, Card, ImageList, Paper, ThemeProvider } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import "./GalleryPreview.css";

const GalleryPreview = ({ handleClick, gallery }) => {
  return (
    <>
      {window.screen.width <= 1280 ? (
        <ThemeProvider theme={darkTheme}>
          <Card sx={{ m: 2, marginBottom: "28px", marginTop: "28px" }}>
            <div width="100%">
              <Paper
                className="Gallery--Button__Mobile"
                id="ForceTransition"
                sx={{
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.21), rgba(255, 255, 255, 0.12))",
                }}
                onClick={() =>
                  handleClick(
                    gallery.parentValue,
                    gallery.a11yProps,
                    gallery.dexNum
                  )
                }
              >
                <div className="Title--Bar">
                  <h3>{gallery.title}</h3>
                </div>

                <img
                  src={gallery.icons[0]}
                  alt=""
                  width="120px"
                  height="auto"
                  display="block"
                  className="Thumb--Gallery__Mobile"
                />
                <img
                  src={gallery.icons[1]}
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery__Mobile"
                />
              </Paper>
              <p className="Description__Mobile" width="50%" float="right">
                {gallery.caption}
              </p>
            </div>
          </Card>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={darkTheme}>
          <Card sx={{ m: 7, marginBottom: "28px", marginTop: "28px" }}>
            <div width="100%" className="FlexDiv" display="flex !important">
              <div className="Thumbnail--Box">
                <ImageList
                  cols={3}
                  gap={2}
                  sx={{
                    padding: "15px",
                    paddingTop: "30px",
                    paddingBottom: "10px",
                  }}
                >
                  {gallery.icons.map((item) => (
                    <img
                      src={item}
                      alt=""
                      width="175px"
                      height="auto"
                      display="block"
                      className="Thumb--Gallery"
                      onClick={() =>
                        handleClick(
                          gallery.parentValue,
                          gallery.a11yProps,
                          gallery.dexNum
                        )
                      }
                    />
                  ))}
                </ImageList>
                <Button
                  onClick={() =>
                    handleClick(
                      gallery.parentValue,
                      gallery.a11yProps,
                      gallery.dexNum
                    )
                  }
                  variant="contained"
                  size="small"
                  sx={{
                    letterSpacing: "1.5px",
                    fontSize: "x-small",
                    alignContent: "center",
                    margin: "15px",
                    float: "center",
                  }}
                >
                  View Gallery
                </Button>
              </div>
              <div className="Descriptor--Box" float="right">
                <h3
                  className="Title"
                  onClick={() =>
                    handleClick(
                      gallery.parentValue,
                      gallery.a11yProps,
                      gallery.dexNum
                    )
                  }
                >
                  <u>{gallery.title.toUpperCase()}</u>
                </h3>
                <p className="Description">{gallery.caption}</p>
              </div>
            </div>
          </Card>
        </ThemeProvider>
      )}
    </>
  );
};

export default GalleryPreview;

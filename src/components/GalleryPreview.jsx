import { Button, Card, ImageList, Paper, ThemeProvider } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import "./GalleryPreview.css";

const GalleryPreview = ({ handleClick, gallery }) => {
  return (
    <>
      {window.screen.width <= 1280 ? (
        <ThemeProvider theme={darkTheme}>
          <Card
            sx={{
              m: 2,
              marginBottom: "14px",
              marginTop: "14px",
              textAlign: "center",
            }}
          >
            <div width="100%">
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

              {gallery.icons.slice(0, 2).map((item) => (
                <img
                  src={item}
                  alt=""
                  width="160px"
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

              <p className="Description__Mobile" width="50%" float="right">
                {gallery.caption}
              </p>
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

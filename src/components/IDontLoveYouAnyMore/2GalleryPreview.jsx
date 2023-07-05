import { Card, ImageList, Paper, ThemeProvider } from "@mui/material";
import darkTheme from "../../themes/darkTheme";

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
                <h3>DOGS</h3>
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
                  src="https://styles.redditmedia.com/t5_58ztik/styles/communityIcon_3dy48m3l62w71.png"
                  alt=""
                  width="120px"
                  height="auto"
                  className="Thumb--Gallery2"
                />
                <img
                  src="https://a.wattpad.com/useravatar/hanjmybeloved.256.929740.jpg"
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

//CSS

/* Test Page */

// .Gallery--Button2 {
//   margin: 20px;
//   width: auto;
//   padding-top: 0;
//   text-align: center;
//   background-image:
//     linear-gradient(rgba(255, 255, 255, 0.21), rgba(255, 255, 255, 0.12));
// }

// #ForceTransition2 {
//   transition: all 0.5s
// }

// .Gallery--Button2:hover {
//   background-image:
//     linear-gradient(rgba(255, 255, 255, 0.378), rgba(255, 255, 255, 0.251));
//   cursor: pointer;
//   transform: scale(1.03);
//   transition: all 0.5s;
// }

// .HalfHolder {
//   width: 45%;
//   display: inline-block;
//   margin-left: 30px;
//   align-items: center;
//   margin-bottom: 20px;
// }

// .Thumb--Gallery2 {
//   margin: 5px;
//   margin-bottom: 0px;
//   border-radius: 5px;
// }

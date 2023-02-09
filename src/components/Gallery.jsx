import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import Lightbox from "./Lightbox";

export default function Gallery({ galleryProp }) {
  let cols = 3;

  if (window.screen.width <= 1280) {
    cols = 2;
  }

  return (
    <Box sx={{ overflowY: "scroll", overflowX: "visible" }}>
      <ImageList variant="masonry" cols={cols} gap={15}>
        {galleryProp.items.map((item) => (
          <Lightbox pictures={item} key={item.id} />
        ))}
      </ImageList>
    </Box>
  );
}
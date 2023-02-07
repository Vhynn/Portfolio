import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import Lightbox from "./Lightbox";

export default function Gallery({ galleryProp }) {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={15}>
        {galleryProp.items.map((item) => (
          <Lightbox pictures={item} />
        ))}
      </ImageList>
    </Box>
  );
}
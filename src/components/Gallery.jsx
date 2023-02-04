import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "./Lightbox";
import { shadows } from "@mui/system";
import { Paper } from "@mui/material";

export default function Gallery() {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={15}>
        <Lightbox pictures={test} />
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const test = [
  "https://i.imgur.com/Jn5cKNl.jpeg",
  "https://i.imgur.com/6pp05Yl.jpeg",
  "https://i.imgur.com/96EgNPg.jpeg",
  "https://i.imgur.com/qNZSyis.jpeg",
  "https://i.imgur.com/lmzAZwM.jpeg",
  "https://i.imgur.com/r93KPap.jpeg",
  require("./images/DonovanAndFlowers.jpeg"),
];

const itemData = [
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Bed",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Books",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Sink",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
  {
    img: "https://spikeybits.com/wp-content/uploads/2021/12/611b752a-elminiaturista-2.jpg",
    title: "Kitchen",
  },
];

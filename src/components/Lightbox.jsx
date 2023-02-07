import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Lightbox({ pictures }) {
  const [toggler, setToggler] = useState(false);

  let imgArr = [pictures.images.length];
  for (let i = 0; i < pictures.images.length; i++) {
    imgArr[i] = pictures.images[i].img;
  }

  return (
    <>
      <img
        src={pictures.images[0].img}
        alt={pictures.images[0].alt}
        onClick={() => setToggler(!toggler)}
        width="100%"
      />
      <FsLightbox toggler={toggler} sources={imgArr} />
    </>
  );
}

export default Lightbox;

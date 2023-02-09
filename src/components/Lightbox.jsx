import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "./LightboxStyle.css";

function Lightbox({ pictures }) {
  const [toggler, setToggler] = useState(false);

  let imgArr = [pictures.images.length];
  for (let i = 0; i < pictures.images.length; i++) {
    imgArr[i] = pictures.images[i].img;
  }

  let lbClass = "";

  if (window.screen.width >= 1280) {
    lbClass = "zoomHover";
  }

  return (
    <>
      <img
        src={pictures.display}
        alt={pictures.images[0].alt}
        onClick={() => setToggler(!toggler)}
        width="100%"
        className={lbClass}
      />
      <FsLightbox toggler={toggler} sources={imgArr} thumbs={null} />
    </>
  );
}

export default Lightbox;

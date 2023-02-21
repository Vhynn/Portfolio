import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "./LightboxStyle.css";

function Lightbox({ pictures }) {
  const [toggler, setToggler] = useState(false);

  let imgArr = [pictures.images.length];
  for (let i = 0; i < pictures.images.length; i++) {
    imgArr[i] = pictures.images[i].img;
  }

  let capArr = [pictures.images.length];
  for (let i = 0; i < pictures.images.length; i++) {
    capArr[i] = pictures.images[i].caption;
  }

  if (window.screen.width <= 1280) {
    return (
      <>
        <img
          src={pictures.display}
          alt={pictures.images[0].alt}
          onClick={() => setToggler(!toggler)}
          width="100%"
          height="100%"
          className="zoomHover"
          position="absolute"
        />
        <FsLightbox
          toggler={toggler}
          sources={imgArr}
          captions={capArr}
          showThumbsOnMount={true}
        />
      </>
    );
  }

  return (
    <>
      <div
        sx={{
          position: "relative",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        className="lbDiv"
      >
        <img
          src={pictures.display}
          alt={pictures.images[0].alt}
          onClick={() => setToggler(!toggler)}
          width="100%"
          height="100%"
          className="zoomHover"
          position="absolute"
        />
        <div className="vanish">
          <img
            src={pictures.images[1].img}
            alt={pictures.images[0].alt}
            width="100%"
            height="100%"
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              left: "0",
              bottom: "0",
              objectFit: "contain",
            }}
            className="backImg"
          />
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={imgArr}
        captions={capArr}
        showThumbsOnMount={true}
      />
    </>
  );
}

export default Lightbox;

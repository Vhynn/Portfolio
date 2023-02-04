import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Lightbox({ pictures }) {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <img
        src={pictures[0]}
        alt=""
        onClick={() => setToggler(!toggler)}
        width="100%"
      />
      <FsLightbox toggler={toggler} sources={pictures} />
    </>
  );
}

export default Lightbox;

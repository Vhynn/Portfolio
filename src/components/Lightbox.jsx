import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Lightbox() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <img
        src="https://i.imgur.com/Jn5cKNl.jpeg"
        alt=""
        onClick={() => setToggler(!toggler)}
        width="100%"
      />
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://i.imgur.com/6pp05Yl.jpeg",
          "https://i.imgur.com/96EgNPg.jpeg",
          "https://i.imgur.com/qNZSyis.jpeg",
          "https://i.imgur.com/lmzAZwM.jpeg",
          "https://i.imgur.com/r93KPap.jpeg",
        ]}
      />
    </>
  );
}

export default Lightbox;

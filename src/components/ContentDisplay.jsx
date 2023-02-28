import { tabList } from "../data";
import GalleryTabs from "./GalleryTabs";
import LandingPage from "./LandinPage";
import React, { useState } from "react";

const ContentDisplay = () => {
  const [elementVisible, setElementVisible] = useState(false);
  const [topGalleryValue, setTopGalleryValue] = useState(0);
  const [subGalleryValue, setSubGalleryValue] = useState(0);

  const HandleGalleryClick = () => {
    setElementVisible(!elementVisible);
    setTopGalleryValue(0);
    setSubGalleryValue(3);
  };

  return (
    <>
      {elementVisible ? (
        <div className="Galleries--Page">
          <GalleryTabs
            props={tabList}
            topValue={topGalleryValue}
            subValue={subGalleryValue}
          />
        </div>
      ) : (
        <div className="Landing--Page">
          <LandingPage />
          <button title="Show Element" onClick={HandleGalleryClick}>
            TEST
          </button>
        </div>
      )}
    </>
  );
};

export default ContentDisplay;

import { tabList } from "../data";
import GalleryTabs from "./GalleryTabs";
import LandingPage from "./LandingPage";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const ContentDisplay = () => {
  const [elementVisible, setElementVisible] = useState(false);
  const [topGalleryValue, setTopGalleryValue] = useState(0);
  const [subGalleryValue, setSubGalleryValue] = useState(0);

  const HandleGalleryClick = (MainTab, SubTab) => {
    if (MainTab !== null) {
      setElementVisible(!elementVisible);
      setTopGalleryValue(MainTab);
      setSubGalleryValue(SubTab);
    }
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
          <Box textAlign="center">
            <Button
              variant="contained"
              size="small"
                sx={{
                  letterSpacing: "1.5px",
                  fontSize: "x-small",
                  alignContent: "center",
                  margin: "15px",
                  float: "center",
                }}
              onClick={() => setElementVisible(!elementVisible)}
            >
              HOME
            </Button>
          </Box>
        </div>
      ) : (
        <div className="Landing--Page">
          <LandingPage handleClick={HandleGalleryClick} />
        </div>
      )}
    </>
  );
};

export default ContentDisplay;

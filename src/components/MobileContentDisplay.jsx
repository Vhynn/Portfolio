import { tabList } from "../data";
import LandingPage from "./LandingPage";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import MobileTabs from "./MobileTabs";

const MobileContentDisplay = () => {
  const [elementVisible, setElementVisible] = useState(false);
  const [galleryValue, setGalleryValue] = useState(0);

  const HandleGalleryClick = (MainTab, SubTab, MobileTab) => {
    if (MobileTab !== null) {
      setElementVisible(!elementVisible);
      setGalleryValue(MobileTab);
    }
  };

  return (
    <>
      {elementVisible ? (
        <div className="Galleries--Page">
          <MobileTabs props={tabList} galleryValue={galleryValue} />
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{ marginBottom: "20px", width: "7vw" }}
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

export default MobileContentDisplay;

import * as React from "react";
import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Gallery from "./Gallery";
import lightTheme from "../themes/lightTheme";
import { tabItems } from "../data";
import SubGalleryTabs from "./SubGalleryTabs";
import "./GalleryTabs.css";

function TabPanel(props) {
  const { children, value, index, pad, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: pad }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function GalleryTabs({ props, topValue, subValue }) {
  const theme = lightTheme;
  const [value, setValue] = React.useState(topValue);

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <Box sx={{ bgcolor: "background.paper", overflow: "scroll" }}>
      <AppBar
        position="sticky"
        sx={{
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: "#121f40c2",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Gallery Tabs"
          letterSpacing="1.5px"
        >
          {props.tabs.map((item) => (
            <Tab
              key={item.id}
              sx={{ fontWeight: "bold" }}
              label={item.title}
              {...a11yProps(item.a11yProps)}
            />
          ))}
        </Tabs>
      </AppBar>
      {props.tabs.map((item) =>
        item.type === "tab" ? (
          <TabPanel
            key={item.id}
            value={value}
            index={item.a11yProps}
            dir={theme.direction}
            pad={3}
          >
            <Gallery galleryProp={tabItems[item.id]} />
          </TabPanel>
        ) : (
          <TabPanel
            key={item.id}
            value={value}
            index={item.a11yProps}
            dir={theme.direction}
            pad={0}
          >
            <SubGalleryTabs props={item.childTabs} newValue={subValue} />
          </TabPanel>
        )
      )}
    </Box>
  );
}
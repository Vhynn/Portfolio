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
import "./SubGalleryStyle.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

export default function SubGalleryTabs({ props, newValue }) {
  const theme = lightTheme;
  const [value, setValue] = React.useState(newValue);

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <Box
      sx={{ bgcolor: "background.paper", overflow: "scroll", padding: "0px" }}
    >
      <AppBar position="sticky" sx={{ backgroundColor: "#162b5e" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Gallery Tabs"
          padding="0px"
          style={{ height: "10px" }}
          className="tabs"
        >
          {props.map((item) => (
            <Tab
              key={item.id}
              sx={{ fontWeight: "bold" }}
              label={item.title}
              {...a11yProps(item.a11yProps)}
            />
          ))}
        </Tabs>
      </AppBar>
      {props.map((item) => (
        <TabPanel
          key={item.id}
          value={value}
          index={item.a11yProps}
          dir={theme.direction}
        >
          <Gallery galleryProp={tabItems[item.id]} />
        </TabPanel>
      ))}
    </Box>
  );
}

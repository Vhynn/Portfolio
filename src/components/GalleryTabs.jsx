import * as React from "react";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Gallery from "./Gallery";

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

export default function GalleryTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Dioramas" {...a11yProps(0)} />
          <Tab label="Necrons" {...a11yProps(1)} />
          <Tab label="Spaceships" {...a11yProps(2)} />
          <Tab label="Other Miniatures" {...a11yProps(3)} />
          <Tab label="Other Projects" {...a11yProps(4)} />
          <Tab label="Photography" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Diorama Photos, not these default pics. These are not dioramas
        <Gallery />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Necron Photos
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Spaceship/Dropfleet Photots
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        All Other Miniatures
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        Other Projects, face cast, props, etc.
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        Various Other neat Pictures, flowers, nature etc.
      </TabPanel>
    </Box>
  );
}

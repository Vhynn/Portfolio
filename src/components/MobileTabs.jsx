import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Gallery from "./Gallery";
import { tabItems } from "../data";
import MobileDrawer from "./MobileDrawer";
import { Button, Card } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MobileTabs({ props, galleryValue }) {
  const [value, setValue] = React.useState(galleryValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "sticky",
        height: "100%",
      }}
    >
      <MobileDrawer>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          {props.tabs.map((item) =>
            item.type === "tab" ? (
              <Tab
                key={item.id}
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "1.5px",
                }}
                label={item.title}
                value={item.dexNum}
                {...a11yProps(item.dexNum)}
              />
            ) : (
              <>
                <Button
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: "1.5px",
                    color: "#707070",
                  }}
                >
                  {item.title}
                </Button>
                <Card sx={{ marginLeft: 2, marginRight: 2 }}>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                      borderRight: 1,
                      borderColor: "divider",
                    }}
                  >
                    {item.childTabs.map((item) => (
                      <Tab
                        key={item.id}
                        sx={{ fontWeight: "bold", letterSpacing: "1.5px" }}
                        label={item.title}
                        value={item.dexNum}
                        {...a11yProps(item.dexNum)}
                      />
                    ))}
                  </Tabs>
                </Card>
              </>
            )
          )}
        </Tabs>
      </MobileDrawer>
      {props.tabs.map((item) =>
        item.type === "tab" ? (
          <TabPanel key={item.id} value={value} index={item.dexNum}>
            <Gallery galleryProp={tabItems[item.id]} />
          </TabPanel>
        ) : (
          item.childTabs.map((item) => (
            <TabPanel key={item.id} value={value} index={item.dexNum}>
              <Gallery galleryProp={tabItems[item.id]} />
            </TabPanel>
          ))
        )
      )}
    </Box>
  );
}

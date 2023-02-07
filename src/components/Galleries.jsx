import GalleryTabs from "./GalleryTabs";
// import Header from "./Header";
import { ThemeProvider } from "@mui/material";
import lightTheme from "../themes/lightTheme.js";
import { tabList } from "../data";

// TODO refecator to just have one layer
export default function Galleries() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GalleryTabs props={tabList} />
      </ThemeProvider>
    </>
  );
}

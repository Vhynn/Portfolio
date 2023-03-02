import GalleryPreview from "./GalleryPreview";
import { tabList } from "../data";

const LandingPage = ({ handleClick }) => {
  return (
    <div className="Landing--Page">
      {tabList.tabs.map((item) =>
        item.type === "superTab" ? (
          item.childTabs.map((item) => (
            <GalleryPreview
              handleClick={handleClick}
              gallery={item}
            ></GalleryPreview>
          ))
        ) : (
          <GalleryPreview
            handleClick={handleClick}
            gallery={item}
          ></GalleryPreview>
        )
      )}
    </div>
  );
};

export default LandingPage;

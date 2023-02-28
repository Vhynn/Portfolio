import GalleryPreview2 from "./2GalleryPreview";
import GalleryPreview from "./GalleryPreview";

const LandingPage = () => {
  return (
    <div className="Landing--Page">
      <GalleryPreview></GalleryPreview>
      <GalleryPreview></GalleryPreview>
      <GalleryPreview></GalleryPreview>
      <GalleryPreview></GalleryPreview>
      <GalleryPreview></GalleryPreview>
      <GalleryPreview></GalleryPreview>
      <div className="TwoPer">
        <GalleryPreview2></GalleryPreview2>
        <GalleryPreview2></GalleryPreview2>
      </div>
      <div className="TwoPer">
        <GalleryPreview2></GalleryPreview2>
        <GalleryPreview2></GalleryPreview2>
      </div>
      <div className="TwoPer">
        <GalleryPreview2></GalleryPreview2>
        <GalleryPreview2></GalleryPreview2>
      </div>
    </div>
  );
};

export default LandingPage;

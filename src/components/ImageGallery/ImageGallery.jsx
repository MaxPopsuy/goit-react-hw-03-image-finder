import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ photoData, children, setLargeImage }) => {
  return (
    <ul className="ImageGallery">
      {photoData.map((item) => (
        <ImageGalleryItem
          url={item.webformatURL}
          description={item.tags}
          onClick={() => setLargeImage(item.largeImageURL, item.tags)}
          id={item.id}
          key={item.id}
        />
      ))}
      {children}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  photoData: PropTypes.array.isRequired,
  setLargeImage: PropTypes.func.isRequired,
};
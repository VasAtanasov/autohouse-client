import React from 'react';
import { GalleryContainer, ImageContainer } from './gallery.styles';

const Gallery = ({ images }) => {
  return (
    <GalleryContainer indicators={false} interval={null}>
      {(images || []).map((imageKey, index) => (
        <ImageContainer key={imageKey + index}>
          <div className="gallery-picture">
            <img
              className="gallery-picture__image"
              src={`http://localhost:8007/api/images/${imageKey}`}
              alt="imageKey"
            />
          </div>
        </ImageContainer>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;

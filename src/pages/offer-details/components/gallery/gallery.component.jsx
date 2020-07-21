import React from 'react';
import {
  GalleryContainer,
  GalleryCarousel,
  ImageContainer,
  GalleryIndicator,
} from './gallery.styles';

const Gallery = ({ images }) => {
  const [imageIndex, setImageIndex] = React.useState(1);
  const onSlide = (number) => {
    setImageIndex(number + 1);
  };
  return (
    <GalleryContainer>
      <GalleryCarousel indicators={false} interval={null} onSlide={onSlide}>
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
      </GalleryCarousel>
      <GalleryIndicator>
        {imageIndex}/{images.length}
      </GalleryIndicator>
    </GalleryContainer>
  );
};

export default Gallery;

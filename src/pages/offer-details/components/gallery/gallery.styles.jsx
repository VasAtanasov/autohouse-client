import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const GalleryContainer = styled(Carousel)`
  background: rgba(0, 0, 0, 0.95);

  .carousel-inner {
    height: 75vw;
    max-height: 480px;
  }
`;

export const ImageContainer = styled(Carousel.Item)`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    height: 480px;
  }

  .gallery-picture {
    position: relative;
    width: 100%;
    height: 100%;

    .gallery-picture__image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

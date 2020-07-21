import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const GalleryContainer = styled.div`
  position: relative;
`;

export const GalleryCarousel = styled(Carousel)`
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

export const GalleryIndicator = styled.div`
  position: absolute;
  color: #fff;
  padding: 7px 0;
  font-size: 0.75rem;
  bottom: 0;
  min-width: 40px;
  max-width: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s;
  will-change: transform;
  right: 0;
  left: auto;
`;

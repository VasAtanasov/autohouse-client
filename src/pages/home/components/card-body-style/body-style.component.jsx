import React from 'react';
import {
    BodyStyleCardContainer,
    HoverImageContainer,
} from './body-style.styles';

const BodyStyleCard = ({ imageSrc, hoverImageSrc, bodyType }) => (
    <BodyStyleCardContainer>
        <img src={hoverImageSrc} className="preloader" alt={bodyType} />
        <HoverImageContainer mainImage={imageSrc} hoverImage={hoverImageSrc} />
        <label className="caption">{bodyType}</label>
    </BodyStyleCardContainer>
);

export default BodyStyleCard;

import React from 'react';
import { OfferCardContainer } from './OfferCard.styles';

const OfferCard = ({ imageSrc, offerName = 'test offer' }) => (
    <OfferCardContainer>
        <img src={imageSrc} className="preloader" alt={offerName} />
        <div
            className="body-type-image"
            style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
        <span className="caption">{offerName}</span>
    </OfferCardContainer>
);

export default OfferCard;

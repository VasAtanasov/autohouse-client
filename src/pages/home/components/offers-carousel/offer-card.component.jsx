import React from 'react';
import { OfferCard } from './offer-card.styles';

const OfferCardComponent = ({
  id,
  vehicleMakerName,
  vehicleModelName,
  primaryPhotoKey,
  price,
  vehicleMileage,
  vehicleYear,
  vehicleTrim,
  isTop,
}) => (
  <OfferCard isTop={isTop} href={'/offers/' + id}>
    <span className="photo">
      <picture>
        <img
          src={`http://localhost:8007/api/images/${primaryPhotoKey}`}
          alt={'Main offer'}
        />
      </picture>
    </span>
    <ul>
      <li className="title">
        {vehicleYear} {vehicleMakerName} {vehicleModelName} {vehicleTrim}
      </li>
      <li>
        <span className="price">${price.toLocaleString()}</span>}
        <span className="item">{vehicleMileage.toLocaleString()} miles</span>
      </li>
    </ul>
  </OfferCard>
);

export default OfferCardComponent;

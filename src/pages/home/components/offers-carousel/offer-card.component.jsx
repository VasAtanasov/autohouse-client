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
}) => {
  const imageRef = React.useRef(null);
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <OfferCard isTop={isTop} href={'/offers/' + id} imageLoading={imageLoading}>
      <span className="photo">
        <picture>
          <img
            ref={imageRef}
            src={`http://localhost:8007/api/images/${primaryPhotoKey}`}
            alt={'Main offer'}
            onLoad={() => imageRef.current.complete && setImageLoading(false)}
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
};

export default OfferCardComponent;

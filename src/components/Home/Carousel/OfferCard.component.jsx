import React from 'react';
import { OfferCard } from './OfferCard.styles';

const OfferCardComponent = ({
    id,
    make,
    model,
    thumbnail,
    price,
    mileage,
    year,
    month,
    transmission,
    fuel_type,
    location,
    created_on,
    isTop
}) => (
    <OfferCard isTop={isTop} href={'/offers/' + id}>
        <span className="photo">
            <picture>
                <img src={thumbnail} alt={thumbnail} />
            </picture>
        </span>
        <ul>
            <li className="title">
                {make} {model} {year}
            </li>
            <li>
                <span className="price">${price.toLocaleString()}</span>
                <span className="item">{mileage.toLocaleString()} km</span>
            </li>
        </ul>
    </OfferCard>
);

export default OfferCardComponent;

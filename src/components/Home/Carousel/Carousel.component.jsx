import React, { Fragment } from 'react';
import OfferCardComponent from './OfferCard.component';
import { ShowCase, TopOffer } from './Carousel.styles';

const CarouselComponent = ({ offers, currentPage, limit }) => (
    <Fragment>
        <TopOffer>
            {offers
                .slice(currentPage * limit, currentPage * limit + 1)
                .map(offer => (
                    <OfferCardComponent
                        key={offer.id}
                        {...offer}
                        isTop={true}
                    />
                ))}
        </TopOffer>
        <ShowCase>
            {offers
                .slice(currentPage * limit + 1, currentPage * limit + limit)
                .map(offer => (
                    <OfferCardComponent key={offer.id} {...offer} />
                ))}
        </ShowCase>
    </Fragment>
);

export default CarouselComponent;

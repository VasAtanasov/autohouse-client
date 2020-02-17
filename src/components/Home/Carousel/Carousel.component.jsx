import React, { Fragment } from 'react';
import OfferCardComponent from './OfferCard.component';

const CarouselComponent = ({ offers }) => (
    <Fragment>
        {offers.slice(0, 5).map((offer, index) => {
            if (index === 0) {
                return (
                    <OfferCardComponent
                        key={offer.id}
                        {...offer}
                        isTop={true}
                    />
                );
            }
            return <OfferCardComponent key={offer.id} {...offer} />;
        })}
    </Fragment>
);

export default CarouselComponent;

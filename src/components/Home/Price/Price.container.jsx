import React from 'react';
import PriceComponent from './Price.component';
import { prices, bodyTypes } from './prices';
import { PriceTagContainer } from './Price.styles';

const Price = () =>
    prices.map((tag, idx) => (
        <PriceTagContainer key={tag.id} sm={6} md={4} lg={3}>
            <PriceComponent
                price={tag.price}
                id={tag.id}
                bodyTypes={bodyTypes}
            />
        </PriceTagContainer>
    ));

export default Price;

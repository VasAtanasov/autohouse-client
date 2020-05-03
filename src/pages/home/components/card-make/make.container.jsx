import React from 'react';
import BrandComponent from './make.component';
import brands from './brands';
import { MakeCardsContainer } from './make.styles';

const MakeSection = () => (
    <MakeCardsContainer>
        {brands.map(({ brand, icon }, idx) => (
            <BrandComponent
                key={`${idx + 132}_${brand}`}
                text={brand}
                iconClass={icon}
            />
        ))}
    </MakeCardsContainer>
);

export default MakeSection;

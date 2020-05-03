import React from 'react';

import BodyStyleCard from './body-style.component';
import bodyStyles from './bodyStyles';

import { BodyStyleCardsContainer } from './body-style.styles';
const pathToImages = '/images/body-styles/';
const carImageSuffix = '-angled';
const extensionJpg = '.jpg';

const BodyStyleSection = () => (
    <BodyStyleCardsContainer>
        {bodyStyles.map((obj, idx) => (
            <BodyStyleCard
                key={`${idx}_${obj.name}`}
                bodyType={obj.name}
                imageSrc={`${pathToImages}${obj.bodyStyle}${extensionJpg}`}
                hoverImageSrc={`${pathToImages}${obj.bodyStyle}${carImageSuffix}${extensionJpg}`}
            />
        ))}
    </BodyStyleCardsContainer>
);

export default BodyStyleSection;

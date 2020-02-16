import React from 'react';
import BrandComponent from './Brand.component';
import brands from './brands';
import { BrandWrapper } from './Brand.styles';

const Brand = () =>
    brands.map((brandObj, idx) => {
        const { brand, icon } = brandObj;

        return (
            <BrandWrapper key={`${brand}__${idx}`} xs={6} sm={3} md={2}>
                <BrandComponent text={brand} iconClass={icon} />
            </BrandWrapper>
        );
    });

export default Brand;

import React from 'react';
import { IconLabelWrapper } from './make.styles';

const BrandComponent = ({ text, iconClass }) => (
    <IconLabelWrapper>
        <i className={iconClass}></i>
        <span>{text}</span>
    </IconLabelWrapper>
);

export default BrandComponent;

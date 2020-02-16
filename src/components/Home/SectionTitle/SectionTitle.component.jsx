import React from 'react';
import { SectionTitleContainer, Title } from './SectionTitle.styles';

const SectionTitleComponent = ({ sectionTitle, showTitle }) => (
    <SectionTitleContainer>
        {showTitle && <Title>{sectionTitle}</Title>}
    </SectionTitleContainer>
);

export default SectionTitleComponent;

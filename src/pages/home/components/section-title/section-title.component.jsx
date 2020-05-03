import React from 'react';
import { SectionTitleContainer, Title } from './section-title.styles';

const SectionTitleComponent = ({ sectionTitle, showTitle }) => (
    <SectionTitleContainer>
        {showTitle && <Title>{sectionTitle}</Title>}
    </SectionTitleContainer>
);

export default SectionTitleComponent;

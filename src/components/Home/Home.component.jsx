import React, { Fragment } from 'react';
import { HomeSectionContainer } from './Home.styles';
import Row from 'react-bootstrap/Row';
import BodyStyle from './BodyStyle';
import SectionTitle from './SectionTitle';
import Brand from './Brand';
import Price from './Price';
import Carousel from './Carousel';

const HOME_SECTION_CONTAINER_SIZE = {
    // maxWidth: '930px',
    margin: '1rem auto',
    // paddingTop: '2rem',
    width: '100%'
};

const BrowsByContainer = ({ children, sectionTitle, showTitle }) => (
    <HomeSectionContainer>
        {showTitle && (
            <SectionTitle sectionTitle={sectionTitle} showTitle={showTitle} />
        )}

        <Row noGutters style={HOME_SECTION_CONTAINER_SIZE}>
            {children}
        </Row>
    </HomeSectionContainer>
);

const HomeComponent = () => (
    <Fragment>
        <BrowsByContainer sectionTitle={'Top offers'}>
            <Carousel />
        </BrowsByContainer>
        <BrowsByContainer sectionTitle={'Body Styles'} showTitle={true}>
            <BodyStyle />
        </BrowsByContainer>
        <BrowsByContainer sectionTitle={'Make'} showTitle={true}>
            <Brand />
        </BrowsByContainer>
        <BrowsByContainer sectionTitle={'Price'} showTitle={true}>
            <Price />
        </BrowsByContainer>
    </Fragment>
);

export default HomeComponent;

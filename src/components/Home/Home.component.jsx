import React, { Fragment } from 'react';
// import { Hero } from '../../components';
import { HomeSectionContainer } from './Home.styles';
import Row from 'react-bootstrap/Row';
import BodyStyle from './BodyStyle';
import SectionTitle from './SectionTitle';
import Brand from './Brand';
import Price from './Price';
import Carousel from './Carousel';

const HOME_SECTION_CONTAINER_SIZE = {
    maxWidth: '930px',
    margin: '1rem auto',
    paddingTop: '2rem'
};

const BrowsByContainer = ({ children, sectionTitle, showTitle }) => (
    <HomeSectionContainer>
        <SectionTitle sectionTitle={sectionTitle} showTitle={showTitle} />
        <Row noGutters style={HOME_SECTION_CONTAINER_SIZE}>
            {children}
        </Row>
    </HomeSectionContainer>
);

const HomeComponent = ({ backgroundImage }) => (
    <Fragment>
        {/* <Hero backgroundImage={backgroundImage}></Hero> */}
        <BrowsByContainer sectionTitle={'Top offers'}>
            <Carousel />
        </BrowsByContainer>
        <BrowsByContainer sectionTitle={'Body Styles'}>
            <BodyStyle />
        </BrowsByContainer>
        <BrowsByContainer sectionTitle={'Make'}>
            <Brand />
        </BrowsByContainer>
        <BrowsByContainer sectionTitle={'Price'}>
            <Price />
        </BrowsByContainer>
    </Fragment>
);

export default HomeComponent;

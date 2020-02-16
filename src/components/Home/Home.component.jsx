import React, { Fragment } from 'react';
// import { Hero } from '../../components';
import { HomeSectionContainer } from './Home.styles';
import Row from 'react-bootstrap/Row';
import BodyStyle from './BodyStyle';
import SectionTitle from './SectionTitle';
import Brand from './Brand';
import Price from './Price';

const HOME_SECTION_CONTAINER_SIZE = {
    // maxWidth: '930px',
    margin: '2rem 0 auto'
};

const BrowsByContainer = ({ children, sectionTitle }) => (
    <HomeSectionContainer>
        <SectionTitle sectionTitle={sectionTitle} />
        <Row noGutters style={HOME_SECTION_CONTAINER_SIZE}>
            {children}
        </Row>
    </HomeSectionContainer>
);

const HomeComponent = ({ backgroundImage }) => (
    <Fragment>
        {/* <Hero backgroundImage={backgroundImage}></Hero> */}
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

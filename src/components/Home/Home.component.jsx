import React, { Fragment } from 'react';
import { Hero } from '../../components';
import { HomeSectionContainer } from './Home.styles';
import Row from 'react-bootstrap/Row';
import BodyStyle from './BodyStyle';

const whiteBackground = { backgroundColor: 'white' };

const HOME_SECTION_CONTAINER_SIZE = {
    maxWidth: '908px',
    margin: '0 auto'
};

const BrowsByContainer = ({ children }) => (
    <HomeSectionContainer>
        <Row noGutters style={HOME_SECTION_CONTAINER_SIZE}>
            {children}
        </Row>
    </HomeSectionContainer>
);

const HomeComponent = ({ backgroundImage }) => (
    <Fragment>
        <Hero backgroundImage={backgroundImage}></Hero>
        <BrowsByContainer>
            <BodyStyle style={whiteBackground} />
        </BrowsByContainer>
    </Fragment>
);

export default HomeComponent;

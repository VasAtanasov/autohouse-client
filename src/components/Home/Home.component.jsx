import React, { Fragment } from 'react';
import { HomeSectionContainer } from './Home.styles';
import Row from 'react-bootstrap/Row';
import BodyStyle from './BodyStyle';
import SectionTitle from './SectionTitle';
import Brand from './Brand';
import Price from './Price';
import Carousel from './Carousel';
import FormSearch from './QuickSearch/QuickSearchForm';
import { useWindowSize } from '../../utils/customHooks';

const HOME_SECTION_CONTAINER_SIZE = {
    margin: '1rem auto',
    paddingTop: '2rem',
    width: '100%',
    position: 'relative'
};

const BrowsByContainer = ({ children, sectionTitle, showTitle }) => (
    <HomeSectionContainer>
        {showTitle && <SectionTitle sectionTitle={sectionTitle} />}

        <Row noGutters style={HOME_SECTION_CONTAINER_SIZE}>
            {children}
        </Row>
    </HomeSectionContainer>
);

const ShowWindowDimensions = () => {
    const [width, height] = useWindowSize();
    return (
        <div>
            Window size: {width} x {height}
        </div>
    );
};

const HomeComponent = () => {
    const [width] = useWindowSize();

    return (
        <Fragment>
            <BrowsByContainer sectionTitle={'Quick Search'}>
                <FormSearch />
            </BrowsByContainer>
            {width >= 850 && (
                <BrowsByContainer sectionTitle={'Top offers'}>
                    <Carousel />
                </BrowsByContainer>
            )}
            <ShowWindowDimensions />
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
};

export default HomeComponent;

import React from 'react';
import { Hero, Spinner } from '../../components';
import { HomeSectionContainer } from './homepage.styles';
import SectionTitle from './components/section-title/section-title.component';
import BodyStyleSection from './components/card-body-style/body-style.container';
import MakeSection from './components/card-make/make.container';
import QuickSearch from './components/quick-search/quick-search.component';

const BrowsByContainer = ({ children, sectionTitle, showTitle }) => (
    <HomeSectionContainer>
        {showTitle && (
            <SectionTitle sectionTitle={sectionTitle} showTitle={showTitle} />
        )}
        {children}
    </HomeSectionContainer>
);

const HomePage = () => (
    <React.Fragment>
        <Hero backgroundImage={'/images/bg_10.jpg'}>
            <QuickSearch />
            <Spinner />s
        </Hero>
        <BrowsByContainer sectionTitle={'Body Styles'} showTitle={true}>
            <BodyStyleSection />
        </BrowsByContainer>
        <BrowsByContainer sectionTitle={'Make'} showTitle={true}>
            <MakeSection />
        </BrowsByContainer>
    </React.Fragment>
);

export default HomePage;

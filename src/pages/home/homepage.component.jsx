import React from 'react';
import { connect } from 'react-redux';

import { Hero } from '../../components';
import { HomeSectionContainer } from './homepage.styles';
import SectionTitle from './components/section-title/section-title.component';
import BodyStyleSection from './components/card-body-style/body-style.container';
import MakeSection from './components/card-make/make.container';
import QuickSearch from './components/quick-search/quick-search.component';

import { fetchMakersStartAsync } from '../../services/common/common.actions';
import { toast } from 'react-toastify';

const BrowsByContainer = ({ children, sectionTitle, showTitle }) => (
    <HomeSectionContainer>
        {showTitle && (
            <SectionTitle sectionTitle={sectionTitle} showTitle={showTitle} />
        )}
        {children}
    </HomeSectionContainer>
);

const HomePage = ({ fetchMakersStartAsync }) => {
    React.useEffect(() => {
        fetchMakersStartAsync().catch((error) => {
            toast.error('Error fetching makers');
        });
    });

    return (
        <React.Fragment>
            <Hero backgroundImage={'/images/bg_10.jpg'}>
                <QuickSearch />
            </Hero>
            <BrowsByContainer sectionTitle={'Body Styles'} showTitle={true}>
                <BodyStyleSection />
            </BrowsByContainer>
            <BrowsByContainer sectionTitle={'Make'} showTitle={true}>
                <MakeSection />
            </BrowsByContainer>
        </React.Fragment>
    );
};

export default connect(null, { fetchMakersStartAsync })(HomePage);

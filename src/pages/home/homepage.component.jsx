import React from 'react';
import { connect } from 'react-redux';
import { Hero } from '../../components';
import { HomeSectionContainer } from './homepage.styles';
import SectionTitle from './components/section-title/section-title.component';
import OffersShowcase from './components/offers-showcase/offers-showcase.container';
import BodyStyleSection from './components/card-body-style/body-style.container';
import MakeSection from './components/card-make/make.container';
import QuickSearch from './components/quick-search/quick-search.component';
import Price from './components/price/price.container';
import { createFilter } from '../../services/filter/filter.action';
import {
  fetchStatistics,
  fetchMakersStartAsync,
} from '../../services/common/common.actions';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const BrowsByContainer = ({ children, sectionTitle, showTitle }) => (
  <HomeSectionContainer>
    {showTitle && (
      <SectionTitle sectionTitle={sectionTitle} showTitle={showTitle} />
    )}
    {children}
  </HomeSectionContainer>
);

const HomePage = ({ createFilter, fetchStatistics, fetchMakersStartAsync }) => {
  let history = useHistory();

  React.useEffect(() => {
    fetchMakersStartAsync().catch((error) => {
      toast.error('Error fetching makers', error);
    });
  }, [fetchMakersStartAsync]);

  React.useEffect(() => {
    fetchStatistics().catch((error) => {
      toast.error('Error fetching statistics', error);
    });
  }, [fetchStatistics]);

  const handleSearch = (filter) => {
    createFilter(filter);
    history.push('/list');
  };

  return (
    <React.Fragment>
      <Hero backgroundImage={'/images/bg_10.jpg'}>
        <QuickSearch handleSearch={handleSearch} />
      </Hero>
      <BrowsByContainer sectionTitle={'Latest offers'} showTitle={true}>
        <OffersShowcase />
      </BrowsByContainer>
      <BrowsByContainer sectionTitle={'Body Styles'} showTitle={true}>
        <BodyStyleSection handleSearch={handleSearch} />
      </BrowsByContainer>
      <BrowsByContainer sectionTitle={'Make'} showTitle={true}>
        <MakeSection handleSearch={handleSearch} />
      </BrowsByContainer>
      <BrowsByContainer sectionTitle={'Price'} showTitle={true}>
        <Price handleSearch={handleSearch} />
      </BrowsByContainer>
    </React.Fragment>
  );
};

export default connect(null, {
  createFilter,
  fetchStatistics,
  fetchMakersStartAsync,
})(HomePage);

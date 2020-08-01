import React from 'react';

import { loadTopOffers } from '../../../../services/offer/offer.actions';
import { connect } from 'react-redux';
import { ShowcaseContainer } from './offers-showcase.styles';
import OffersShowcaseComponent from './offers-showcase.component';

const OffersShowcaseContainer = ({ loadTopOffers }) => {
  React.useEffect(() => {
    loadTopOffers();
  }, [loadTopOffers]);

  return (
    <ShowcaseContainer>
      <OffersShowcaseComponent />
    </ShowcaseContainer>
  );
};

export default connect(null, { loadTopOffers })(OffersShowcaseContainer);

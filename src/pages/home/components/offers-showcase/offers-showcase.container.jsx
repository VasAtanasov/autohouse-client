import React from 'react';
import { compose } from 'redux';
import { WithSpinner } from '../../../../hoc';

import { loadTopOffers } from '../../../../services/offer/offer.actions';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { ShowcaseContainer } from './offers-showcase.styles';
import OffersShowcaseComponent from './offers-showcase.component';

const OffersShowcaseContainer = ({ loadTopOffers }) => {
  React.useEffect(() => {
    (async () => {
      await loadTopOffers().catch((error) => {
        toast.error('Error fetching latest offers', error);
      });
    })();
  });
  return (
    <ShowcaseContainer>
      <OffersShowcaseComponent />
    </ShowcaseContainer>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.offer.isFetching,
});

export default compose(
  connect(mapStateToProps, { loadTopOffers }),
  WithSpinner
)(OffersShowcaseContainer);

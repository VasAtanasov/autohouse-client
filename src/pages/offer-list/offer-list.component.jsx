import React from 'react';
import { connect } from 'react-redux';
import { searchOffers } from '../../services/offer/offer.actions';
import { ListWrapper } from './offer-list.styles';
import List from './list/list.component';
import Filters from './filters/filters.component';
import { ListContainer } from './list/list.styles';

const OfferList = ({ filter, searchOffers, page }) => {
  React.useEffect(() => {
    (async () => await searchOffers(filter))();
  }, [filter, searchOffers]);

  return (
    <ListWrapper>
      <Filters />
      <ListContainer>
        <List pageContent={page.content} />
      </ListContainer>
    </ListWrapper>
  );
};

const mapStateToProps = ({ filter, offer }) => ({
  filter,
  page: offer.page,
});

export default connect(mapStateToProps, { searchOffers })(OfferList);

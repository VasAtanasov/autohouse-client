import React from 'react';
import { ListHeader, SearchSummary, ChipsContainer } from './list.styles';
import { OfferCard } from '../../../components';

const List = ({ page }) => {
  return (
    <React.Fragment>
      <ListHeader>
        <SearchSummary>
          <header>
            <h6>{page.totalElements.toLocaleString()} results</h6>
          </header>
          <ChipsContainer className="chips-container"></ChipsContainer>
        </SearchSummary>
        <footer></footer>
      </ListHeader>
      <main>
        {page &&
          page.content.map((offer) => <OfferCard key={offer.id} {...offer} />)}
      </main>
    </React.Fragment>
  );
};

export default List;

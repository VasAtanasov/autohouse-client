import React from 'react';
import { connect } from 'react-redux';
import { SearchContainer, TypeLabel } from './quick-search.styles';
import BodyStyleModal from './body-style-modal.component';
import MakerModelModal from './maker-modal.component';
import { createStructuredSelector } from 'reselect';
import ViewAllButton from './view-all-button.component';

import {
  selectBodyStyles,
  selectMakersArray,
} from '../../../../services/common/common.selectors';

const QuickSearch = ({ bodyStyles, makers }) => {
  return (
    <SearchContainer>
      <div className="type">
        <div className="search-title">
          <TypeLabel>Find a great deals by</TypeLabel>
        </div>
        <div className="search-buttons">
          <BodyStyleModal bodyStyles={bodyStyles} />
          <MakerModelModal makers={makers} />
          <ViewAllButton />
        </div>
      </div>
    </SearchContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  bodyStyles: selectBodyStyles,
  makers: selectMakersArray,
});

export default connect(mapStateToProps)(QuickSearch);

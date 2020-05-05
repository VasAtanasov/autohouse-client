import React from 'react';
import { connect } from 'react-redux';
import { SearchContainer, TypeLabel } from './quick-search.styles';
import BodyStyleModal from './body-style-modal.component';
import MakerModelModal from './maker-modal.component';
import { createStructuredSelector } from 'reselect';

import {
  selectBodyStyles,
  selectMakers,
} from '../../../../services/common/common.selectors';

const QuickSearch = ({ bodyStyles, makers }) => {
  return (
    <SearchContainer>
      <div className="type">
        <TypeLabel>Search By</TypeLabel>
        <BodyStyleModal bodyStyles={bodyStyles} />
        <MakerModelModal makers={makers} />
      </div>
    </SearchContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  bodyStyles: selectBodyStyles,
  makers: selectMakers,
});

export default connect(mapStateToProps)(QuickSearch);

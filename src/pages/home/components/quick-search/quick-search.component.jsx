import React from 'react';
import { connect } from 'react-redux';
import { SearchContainer, TypeLabel } from './quick-search.styles';
import BodyStyleModal from './body-style-modal.component';
import MakerModelModal from './maker-modal.component';
import ViewAllButton from './view-all-button.component';

const QuickSearch = ({ handleSearch }) => {
  return (
    <SearchContainer>
      <div className="type">
        <div className="search-title">
          <TypeLabel>Find a great deals by</TypeLabel>
        </div>
        <div className="search-buttons">
          <BodyStyleModal handleSearch={handleSearch} />
          <MakerModelModal handleSearch={handleSearch} />
          <ViewAllButton handleSearch={handleSearch} />
        </div>
      </div>
    </SearchContainer>
  );
};

export default connect(null, {})(QuickSearch);

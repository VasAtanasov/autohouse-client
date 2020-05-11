import React from 'react';
import { connect } from 'react-redux';
import { SearchContainer, TypeLabel } from './quick-search.styles';
import BodyStyleModal from './body-style-modal.component';
import MakerModelModal from './maker-modal.component';
import ViewAllButton from './view-all-button.component';
import { fetchMakersStartAsync } from '../../../../services/common/common.actions';
import { toast } from 'react-toastify';

const QuickSearch = ({ fetchMakersStartAsync }) => {
  fetchMakersStartAsync().catch((error) => {
    toast.error('Error fetching makers', error);
  });
  return (
    <SearchContainer>
      <div className="type">
        <div className="search-title">
          <TypeLabel>Find a great deals by</TypeLabel>
        </div>
        <div className="search-buttons">
          <BodyStyleModal />
          <MakerModelModal />
          <ViewAllButton />
        </div>
      </div>
    </SearchContainer>
  );
};

export default connect(null, { fetchMakersStartAsync })(QuickSearch);

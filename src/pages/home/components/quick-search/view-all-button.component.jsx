import React from 'react';
import { SearchButton } from './quick-search.styles';
import { connect } from 'react-redux';
import { Loader } from '../../../../components';

const ViewAllButton = ({ loading, totalOffers, handleSearch }) => {
  return (
    <SearchButton onClick={() => handleSearch({})}>
      {loading ? (
        <Loader small white />
      ) : (
        `${totalOffers && totalOffers} offers`
      )}
    </SearchButton>
  );
};

const mapStateToProps = (state) => ({
  totalOffers: state.statistics.totalOffers,
  loading: state.statistics.loading,
});

export default connect(mapStateToProps)(ViewAllButton);

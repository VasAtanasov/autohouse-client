import React from 'react';
import { SearchButton, Loader } from './quick-search.styles';
import { connect } from 'react-redux';

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

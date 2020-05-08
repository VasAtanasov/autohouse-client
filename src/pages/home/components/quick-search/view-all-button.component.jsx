import React from 'react';
import { SearchButton, Loader } from './quick-search.styles';
import { connect } from 'react-redux';
import { fetchStatistics } from '../../../../services/common/common.actions';

const ViewAllButton = ({ fetchStatistics, totalOffers }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        await fetchStatistics();
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    })();
  }, [fetchStatistics]);

  return (
    <SearchButton>
      {isLoading ? (
        <Loader small white />
      ) : (
        `${totalOffers && totalOffers} offers`
      )}
    </SearchButton>
  );
};

const mapStateToProps = (state) => ({
  totalOffers: state.statistics.totalOffers,
});

export default connect(mapStateToProps, { fetchStatistics })(ViewAllButton);

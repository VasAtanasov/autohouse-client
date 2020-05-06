import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { SearchButton } from './quick-search.styles';
import { connect } from 'react-redux';
import { fetchStatistics } from '../../../../services/common/common.actions';

const ViewAllButton = ({ fetchStatistics, statistics }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await fetchStatistics();
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    })();
  }, [fetchStatistics]);

  return (
    <SearchButton>
      {isLoading ? (
        <Spinner variant="light" as="span" animation="border" size="sm" />
      ) : (
        `${statistics && statistics.totalOffers} offers`
      )}
    </SearchButton>
  );
};

const mapStateToProps = (state) => ({
  statistics: state.common.statistics,
});

export default connect(mapStateToProps, { fetchStatistics })(ViewAllButton);

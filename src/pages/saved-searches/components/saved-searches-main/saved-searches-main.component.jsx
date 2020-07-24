import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  listSavedSearches,
  removeSavedSearch,
} from '../../../../services/filter/filter.api';
import { createFilter } from '../../../../services/filter/filter.action';
import { fetchMetadataAsync } from '../../../../services/common/common.actions';
import {
  SavedSearchesList,
  SpinnerContainer,
  NoSavedSearches,
  ReturnToSearch,
} from './saved-searches-main.styles';
import { Spinner } from '../../../../components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SavedSearchView from '../saved-search-view/saved-search-view.component';

const SavedSearchesMain = ({ createFilter, fetchMetadataAsync }) => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  let history = useHistory();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await listSavedSearches();
        await fetchMetadataAsync();
        setLoading(false);
        setList(response.data);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [fetchMetadataAsync]);

  const handleDeleteSavedSearch = async (event) => {
    event.preventDefault();
    const filterId = event.target.dataset.filterId;
    if (!filterId) return;
    try {
      const response = await removeSavedSearch(filterId);
      if (response.data === filterId) {
        setList(list.filter((e) => e.id !== filterId));
      }
    } catch (error) {}
  };

  const handleViewSavedSearch = (event) => {
    event.preventDefault();
    const filterId = event.target.dataset.filterId;
    if (!filterId) return;
    const filterIndex = list.findIndex((e) => e.id === filterId);
    if (filterIndex !== undefined) {
      const filter = list[filterIndex];
      const newFilter = Object.keys(filter)
        .filter((key) => key !== 'id' && key !== 'userId')
        .reduce((a, key) => ({ ...a, [key]: filter[key] }), {});
      createFilter(newFilter);
      history.push('/list');
    }
  };

  return (
    <Container>
      <Row noGutters>
        <Col xs={12}>
          <SavedSearchesList>
            {loading ? (
              <SpinnerContainer>
                <Spinner />
              </SpinnerContainer>
            ) : list.length === 0 ? (
              <NoSavedSearches>
                <h6 className="title">No saved searches</h6>
                <ReturnToSearch to="/list">
                  Return to last search
                </ReturnToSearch>
              </NoSavedSearches>
            ) : (
              list.map((filter) => (
                <SavedSearchView
                  filter={filter}
                  handleViewSavedSearch={handleViewSavedSearch}
                  handleDeleteSavedSearch={handleDeleteSavedSearch}
                  key={filter.id}
                ></SavedSearchView>
              ))
            )}
          </SavedSearchesList>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, { createFilter, fetchMetadataAsync })(
  SavedSearchesMain
);

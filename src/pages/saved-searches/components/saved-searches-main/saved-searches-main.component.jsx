import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  listSavedSearches,
  removeSavedSearch,
} from '../../../../services/filter/filter.api';
import { createFilter } from '../../../../services/filter/filter.action';
import {
  SavedSearchesList,
  SpinnerContainer,
  SavedSearchView,
  NoSavedSearches,
  ReturnToSearch,
} from './saved-searches-main.styles';
import { Spinner } from '../../../../components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SavedSearchesMain = ({ createFilter }) => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  let history = useHistory();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await listSavedSearches();
        setLoading(false);
        setList(response.data);
        console.log(response.data);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

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
    console.log(filterIndex);
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
                <SavedSearchView key={filter.id}>
                  <div className="details">
                    <div className="description">
                      <span className="headline">
                        {filter.makerName
                          ? `${filter.makerName}${
                              filter.modelName ? ` ${filter.modelName}` : ''
                            }`
                          : 'All Makers & Models'}
                      </span>
                      <span>{filter?.priceTo}</span>
                    </div>
                    <div className="menu">
                      <span
                        className="view"
                        data-filter-id={filter.id}
                        onClick={handleViewSavedSearch}
                      >
                        View
                      </span>
                      <span
                        data-filter-id={filter.id}
                        onClick={handleDeleteSavedSearch}
                        className="delete"
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </SavedSearchView>
              ))
            )}
          </SavedSearchesList>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, { createFilter })(SavedSearchesMain);

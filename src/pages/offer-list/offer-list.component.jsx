import React from 'react';
import {
  OFFER_SEARCH_FAILURE,
  OFFER_SEARCH_START,
  OFFER_SEARCH_SUCCESS,
  OFFER_SELECT_SORT,
  OFFER_SELECT_PAGE,
} from '../../services/offer/offer.types';
import {
  FETCH_APP_STATE_SUCCESS,
  FETCH_APP_STATE_FAILURE,
} from '../../services/common/common.types';
import { connect } from 'react-redux';
import { searchOffers } from '../../services/offer/offer.api';
import { loadAppState } from '../../services/common/common.api';
import {
  searchOffersStart,
  searchOffersSuccess,
  searchOffersFailure,
} from '../../services/offer/offer.actions';
import { saveFilter } from '../../services/filter/filter.api';
import {
  fetchAppStateSuccess,
  fetchAppStateFailure,
} from '../../services/common/common.actions';
import {
  ListWrapper,
  ListContainer,
  FiltersContainer,
  FiltersStyledModal,
  ToggleButtonContainer,
  FiltersModalToggleButton,
  SearchButtonsWrapper,
  SearchButtonsContainer,
  NoResults,
} from './offer-list.styles';
import { Spinner } from '../../components';
import Filters from './filters/filters.component';
import List from './list/list.component';
import withSizes from 'react-sizes';
import emptyFuelGuage from '../../assets/fuel-guage.png';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  loading: true,
  page: null,
  error: null,
  filter: null,
  sort: 'createdAt,desc',
  pageNumber: 0,
  app: {},
};

const offerListReducer = (state, action) => {
  switch (action.type) {
    case OFFER_SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case OFFER_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.page,
      };
    case OFFER_SEARCH_FAILURE:
    case FETCH_APP_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case OFFER_SELECT_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case OFFER_SELECT_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case FETCH_APP_STATE_SUCCESS:
      return {
        ...state,
        app: action.payload,
      };
    default:
      return state;
  }
};

const FiltersModal = ({ saveSearch, metadata }) => {
  const [visible, setVisible] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [awake, setAwake] = React.useState(false);
  const [sleep, setSleep] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (!scrolled) {
          setScrolled(true);
        }
      }
      if (currentScrollY < 250) {
        if (scrolled) {
          setScrolled(false);
          setSleep(false);
        }
      }
      if (currentScrollY > 550) {
        if (!awake) {
          setAwake(true);
        }
      }
      if (currentScrollY < 550) {
        if (awake) {
          setAwake(false);
          setSleep(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, awake, sleep]);

  return (
    <React.Fragment>
      <ToggleButtonContainer scrolled={scrolled} awake={awake} sleep={sleep}>
        <FiltersModalToggleButton onClick={() => setVisible(true)}>
          Filters
        </FiltersModalToggleButton>
      </ToggleButtonContainer>
      <FiltersStyledModal
        centered
        animation={false}
        backdrop={false}
        show={visible}
        onHide={() => setVisible(false)}
      >
        <Filters metadata={metadata} />
        <SearchButtonsContainer>
          <SearchButtonsWrapper>
            <button className="button apply" form="search-filter-form">
              Apply
            </button>
            <div className="button cancel" onClick={() => setVisible(false)}>
              Cancel
            </div>
            <div className="button save" onClick={saveSearch}>
              Save
            </div>
          </SearchButtonsWrapper>
        </SearchButtonsContainer>
      </FiltersStyledModal>
    </React.Fragment>
  );
};

const OfferList = ({ filter, width }) => {
  const [state, dispatch] = React.useReducer(
    offerListReducer,
    Object.assign({}, INITIAL_STATE)
  );

  const { loading, page, sort, pageNumber, app } = state;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(searchOffersStart());
        const response = await searchOffers(filter, sort, pageNumber);
        dispatch(searchOffersSuccess(response.data.data.page));
      } catch (error) {
        dispatch(searchOffersFailure(error));
      }
    })();
  }, [filter, sort, pageNumber]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await loadAppState();
        dispatch(fetchAppStateSuccess(response));
      } catch (error) {
        dispatch(fetchAppStateFailure(error));
      }
    })();
  }, []);

  const selectSort = (event) => {
    dispatch({ type: OFFER_SELECT_SORT, payload: event.target.value });
  };

  const gotToPage = (pageNumber) => {
    dispatch({ type: OFFER_SELECT_PAGE, payload: pageNumber });
  };

  const saveSearch = async (event) => {
    event.preventDefault();
    try {
      await saveFilter(filter);
      toast.success('Search Saved!');
    } catch (error) {
      toast.error('Search not Saved! Try again.');
    }
  };

  return (
    <ListWrapper className="list-wrapper">
      <FiltersContainer>
        {width && width >= 992 && <Filters saveSearch={saveSearch} {...app} />}
      </FiltersContainer>
      <ListContainer>
        {loading || !page ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {width && width < 992 && (
              <FiltersModal saveSearch={saveSearch} {...app} />
            )}
            {page.content.length > 0 ? (
              <List
                page={page}
                handleSort={selectSort}
                selectedSort={sort}
                gotToPage={gotToPage}
                app={app}
              />
            ) : (
              <NoResults>
                <div className="placeholder">
                  <img
                    className="empty-fuel-guage"
                    src={emptyFuelGuage}
                    alt="No results"
                  />
                  <h4 className="title">No Results Found</h4>
                </div>
              </NoResults>
            )}
          </React.Fragment>
        )}
      </ListContainer>
    </ListWrapper>
  );
};

const mapStateToProps = ({ filter }) => ({ filter });

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
  width,
});

export default connect(mapStateToProps)(withSizes(mapSizesToProps)(OfferList));

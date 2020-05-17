import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import {
  ListHeader,
  SearchSummary,
  SortContainer,
  SortSelect,
  ChipsContainer,
  OfferListPaging,
  ListFooter,
} from './list.styles';
import { OfferCard } from '../../../components';

const ListNavigation = ({
  pageNumber,
  gotToPage,
  startOfferNumber,
  endOfferNumber,
  totalElements,
  totalPages,
}) => (
  <OfferListPaging>
    <Pagination.First
      disabled={pageNumber === 0}
      onClick={() => gotToPage(0)}
    />
    <Pagination.Prev
      disabled={pageNumber === 0}
      onClick={() => gotToPage(pageNumber - 1)}
    />
    <Pagination.Item className="page-info" disabled>
      <span>
        Showing{' '}
        <strong>
          {startOfferNumber}-{endOfferNumber}
        </strong>{' '}
        out of <strong>{totalElements}</strong> Offers
      </span>
    </Pagination.Item>
    <Pagination.Next
      disabled={pageNumber === totalPages - 1}
      onClick={() => gotToPage(pageNumber + 1)}
    />
    <Pagination.Last
      disabled={pageNumber === totalPages - 1}
      onClick={() => gotToPage(totalPages - 1 || 0)}
    />
  </OfferListPaging>
);

const mapFilterToPills = (filter, app) => {
  const {
    searchCriteriaNamesForCheckboxCriteria = [],
    searchCriteriaNamesForRangeCriteria = [],
    searchCriteriaNamesForSelectCriteria = [],
  } = app;
  const pills = [];

  Object.entries(filter).forEach(([key, value]) => {
    if (value && searchCriteriaNamesForSelectCriteria.includes(key)) {
      pills.push(value);
    }

    if (value && searchCriteriaNamesForCheckboxCriteria.includes(key)) {
      value.forEach((v) => pills.push(v));
    }

    if (value && searchCriteriaNamesForRangeCriteria.includes(key)) {
      if (!value.form) return;
      pills.push(`${value.from}-${value.to || ''}`);
    }
  });

  return pills;
};

const List = ({
  page,
  sortOptions,
  handleSort,
  gotToPage,
  selectedSort,
  filter,
  app,
}) => {
  const {
    content,
    last,
    totalPages,
    totalElements,
    number,
    size,
    numberOfElements,
    first,
    empty,
    pageable,
  } = page;

  const filterPills = mapFilterToPills(filter, app);
  console.log(filterPills);

  const { offset, pageSize } = pageable;
  const startOfferNumber = offset + 1;
  const endOfferNumber =
    offset + pageSize > totalElements ? totalElements : offset + pageSize;

  return (
    <React.Fragment>
      <ListHeader>
        <SearchSummary>
          <header>
            <h6>
              {page.totalElements ? page.totalElements.toLocaleString() : 0}{' '}
              results
            </h6>
          </header>
          <ChipsContainer className="chips-container"></ChipsContainer>
          <footer></footer>
        </SearchSummary>
        <SortContainer>
          <SortSelect>
            <select onChange={handleSort} defaultValue={selectedSort}>
              {Object.entries(sortOptions).map(([text, value], idx) => (
                <option key={idx} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </SortSelect>
          <ListNavigation
            pageNumber={number}
            gotToPage={gotToPage}
            startOfferNumber={startOfferNumber}
            endOfferNumber={endOfferNumber}
            totalElements={totalElements}
            totalPages={totalPages}
          />
        </SortContainer>
      </ListHeader>
      <main>
        {(content || []).map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </main>
      <ListFooter>
        <ListNavigation
          pageNumber={number}
          gotToPage={gotToPage}
          startOfferNumber={startOfferNumber}
          endOfferNumber={endOfferNumber}
          totalElements={totalElements}
          totalPages={totalPages}
        />
      </ListFooter>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  sortOptions: state.common.sortOptions,
  filter: state.filter,
});

export default connect(mapStateToProps)(List);

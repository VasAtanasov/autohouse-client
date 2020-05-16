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
} from './list.styles';
import { OfferCard } from '../../../components';

const List = ({ page, sortOptions, handleSort, gotToPage, selectedSort }) => {
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

  const numbers = [];
  for (let index = 0; index < totalPages; index++) {
    numbers.push(index);
  }
  const { offset, pageSize } = pageable;

  return (
    <React.Fragment>
      <footer>
        <Pagination>
          <Pagination.First onClick={() => gotToPage(0)} />
          <Pagination.Prev />
          {numbers.map((index) => (
            <Pagination.Item
              onClick={() => gotToPage(index)}
              key={index + 1}
              active={number === index}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={number === totalPages - 1}
            onClick={() => gotToPage(number + 1)}
          />
          <Pagination.Last
            disabled={number === totalPages - 1}
            onClick={() => gotToPage(totalPages - 1 || 0)}
          />
        </Pagination>

        <OfferListPaging>
          <button
            className="previous"
            disabled={number === 0}
            onClick={() => gotToPage(number - 1)}
          >
            {'< Previous'}
          </button>
          <span>out of {totalElements} Offers</span>
          <button
            className="previous"
            disabled={number === totalPages - 1}
            onClick={() => gotToPage(number + 1)}
          >
            {'Next >'}
          </button>
        </OfferListPaging>
      </footer>
      <ListHeader>
        <SearchSummary>
          <header>
            <h6>{page.totalElements.toLocaleString()} results</h6>
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
        </SortContainer>
      </ListHeader>
      <main>
        {(content || []).map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  sortOptions: state.common.sortOptions,
});

export default connect(mapStateToProps)(List);

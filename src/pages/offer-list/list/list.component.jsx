import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import {
  ListHeader,
  SortContainer,
  OfferListPaging,
  ListFooter,
} from './list.styles';
import { OfferCard, SelectWrapper } from '../../../components';

export const ListNavigation = ({
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

const List = ({ page, sortOptions, handleSort, gotToPage, selectedSort }) => {
  const { content, totalPages, totalElements, number, pageable } = page;
  const { offset, pageSize } = pageable;
  const startOfferNumber = offset + 1;
  const endOfferNumber =
    offset + pageSize > totalElements ? totalElements : offset + pageSize;

  return (
    <React.Fragment>
      <ListHeader>
        <SortContainer>
          <SelectWrapper className="sort-select">
            <select onChange={handleSort} defaultValue={selectedSort}>
              {Object.entries(sortOptions).map(([text, value], idx) => (
                <option key={idx} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </SelectWrapper>
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

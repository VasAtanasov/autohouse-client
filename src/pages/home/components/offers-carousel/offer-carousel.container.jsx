import React, { useState } from 'react';
import CarouselComponent from './offer-carousel.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  InnerCarouselContainer,
  CarouselControl,
  CarouselContainer,
} from './offer-carousel.styles';
import { createStructuredSelector } from 'reselect';
import { selectTopOffers } from '../../../../services/offer/offer.selectors';
const DEFAULT_PAGE_SIZE = 5;
const DEFAULT_START_PAGE = 1;

const Carousel = ({ topOffers = [] }) => {
  const [page, setPage] = useState(DEFAULT_START_PAGE);
  const totalItems = topOffers.length;
  const totalPages = Math.ceil(totalItems / DEFAULT_PAGE_SIZE);

  let startIndex = (page - 1) * DEFAULT_PAGE_SIZE;
  let endIndex = Math.min(startIndex + DEFAULT_PAGE_SIZE - 1, totalItems - 1);

  const handlePageChange = (pageNumber) => {
    pageNumber = pageNumber < 1 ? totalPages : pageNumber;
    pageNumber = pageNumber > totalPages ? 1 : pageNumber;
    setPage(pageNumber);
  };

  return (
    <CarouselContainer className="offer-carousel">
      <InnerCarouselContainer>
        <span>
          <CarouselControl prev onClick={() => handlePageChange(page - 1)}>
            <i className="flaticon-left-arrow" />
          </CarouselControl>
        </span>
        <span>
          <CarouselControl onClick={() => handlePageChange(page + 1)}>
            <i className="flaticon-arrow-point-to-right" />
          </CarouselControl>
        </span>
        <CarouselComponent
          offers={topOffers}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </InnerCarouselContainer>
    </CarouselContainer>
  );
};

// Carousel.propTypes = {
//   topOffers: PropTypes.array.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  topOffers: selectTopOffers,
});

export default connect(mapStateToProps)(Carousel);

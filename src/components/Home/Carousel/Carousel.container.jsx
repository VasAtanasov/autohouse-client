import React, { useState, useEffect, Fragment } from 'react';
import CarouselComponent from './Carousel.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTopOffers } from '../../../actions/offersActions';
import { InnerCarouselContainer, CarouselControl } from './Carousel.styles';

const DEFAULT_PAGE_SIZE = 5;
const DEFAULT_START_PAGE = 1;

const Carousel = ({ topOffers, loadTopOffers }) => {
    const [page, setPage] = useState(DEFAULT_START_PAGE);

    useEffect(() => {
        if (topOffers.length === 0) {
            loadTopOffers().catch(error => {
                alert('Loading courses failed' + error);
            });
        }
    }, [loadTopOffers, topOffers]);

    const totalItems = topOffers.length;
    const totalPages = Math.ceil(totalItems / DEFAULT_PAGE_SIZE);

    let startIndex = (page - 1) * DEFAULT_PAGE_SIZE;
    let endIndex = Math.min(startIndex + DEFAULT_PAGE_SIZE - 1, totalItems - 1);

    const handlePageChange = pageNumber => {
        pageNumber = pageNumber < 1 ? totalPages : pageNumber;
        pageNumber = pageNumber > totalPages ? 1 : pageNumber;
        setPage(pageNumber);
    };

    return (
        <Fragment>
            <InnerCarouselContainer>
                <span>
                    <CarouselControl
                        prev
                        onClick={() => handlePageChange(page - 1)}
                    >
                        {/* <i className="flaticon-left-arrow" /> */}
                    </CarouselControl>
                </span>
                <span>
                    <CarouselControl onClick={() => handlePageChange(page + 1)}>
                        {/* <i className="flaticon-arrow-point-to-right" /> */}
                    </CarouselControl>
                </span>
                <CarouselComponent
                    offers={topOffers}
                    startIndex={startIndex}
                    endIndex={endIndex}
                />
            </InnerCarouselContainer>
        </Fragment>
    );
};

Carousel.propTypes = {
    topOffers: PropTypes.array.isRequired,
    loadTopOffers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        topOffers: state.topOffers
    };
}

const mapDispatchToProps = {
    loadTopOffers
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);

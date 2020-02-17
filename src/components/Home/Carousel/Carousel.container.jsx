import React, { useState, useEffect, Fragment } from 'react';
import CarouselComponent from './Carousel.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTopOffers } from '../../../actions/offersActions';
import { InnerCarouselContainer, CarouselControl } from './Carousel.styles';

const DEFAULT_LIMIT = 5;

const Carousel = ({ topOffers, loadTopOffers }) => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (topOffers.length === 0) {
            loadTopOffers().catch(error => {
                alert('Loading courses failed' + error);
            });
        }
    }, [loadTopOffers, topOffers]);

    const totalPages = topOffers.length / DEFAULT_LIMIT;

    const handleNext = () => {
        if (currentPage + 1 === totalPages) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage - 1 <= 0) {
            setCurrentPage(totalPages - 1);
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Fragment>
            <InnerCarouselContainer>
                <span>
                    <CarouselControl prev onClick={handlePrevious} />
                </span>
                <span>
                    <CarouselControl onClick={handleNext} />
                </span>
                <CarouselComponent
                    offers={topOffers}
                    currentPage={currentPage}
                    limit={DEFAULT_LIMIT}
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

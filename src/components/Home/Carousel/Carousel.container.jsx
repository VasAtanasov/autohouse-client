import React, { useEffect } from 'react';
import CarouselComponent from './Carousel.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadTopOffers } from '../../../actions/offersActions';
import { InnerCarouselContainer } from './Carousel.styles';

const Carousel = ({ topOffers, loadTopOffers }) => {
    useEffect(() => {
        if (topOffers.length === 0) {
            loadTopOffers().catch(error => {
                alert('Loading courses failed' + error);
            });
        }
    }, [loadTopOffers, topOffers]);

    return (
        <InnerCarouselContainer>
            <CarouselComponent offers={topOffers} />
        </InnerCarouselContainer>
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

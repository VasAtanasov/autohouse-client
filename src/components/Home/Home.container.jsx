import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './Home.component';
import PropTypes from 'prop-types';
import { loadTopOffers } from '../../actions/offersActions';

const Home = ({ topOffers }) => {
    const bgImage = '/images/bg_6.jpg';

    useEffect(() => {
        if (topOffers.length === 0) {
            loadTopOffers().catch(error => {
                alert('Loading courses failed' + error);
            });
        }
    }, []);

    console.log(topOffers);

    return <HomeComponent backgroundImage={bgImage} />;
};

Home.propTypes = {
    topOffers: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        topOffers: state.topOffers
    };
};

const mapDispatchToProps = {
    loadTopOffers
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

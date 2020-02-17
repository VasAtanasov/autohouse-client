import React, { Fragment } from 'react';
import { InnerCarouselContainer } from './Carousel.styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import OfferCard from './OfferCard.component';

const TopOffer = styled.div`
    padding: 0.3rem;
    width: 460px;
    /* flex: 0 0 49%; */
`;

const ShowCase = styled(TopOffer)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const OfferContainer = styled.div`
    position: relative;
`;

const OfferImageContainer = styled.span`
    &:after {
        box-shadow: inset 0 0 0 1px #e0e3e4;
        display: block;
        width: 100%;
        position: inherit;
        content: '';
        background-color: #eff2f3;
    }

    &:before {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top-color: #7bccff;
        width: 0;
        height: 0;
        padding: 10%;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-radius: 50%;
        content: '';

        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(1turn);
                transform: rotate(1turn);
            }
        }
        @keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(1turn);
                transform: rotate(1turn);
            }
        }
    }
`;

const OfferImage290 = styled(OfferImageContainer)`
    width: 460;
    &:after {
        padding-top: 290px;
    }
`;

const OfferImage141 = styled(OfferImageContainer)`
    width: 220;
    &:after {
        padding-top: 141px;
    }
`;

const Offer = () => (
    <Col xs={12} sm={6} lg={3}>
        <OfferImage141 />
    </Col>
);

let offers = [1, 2, 3, 4, 5, 6, 7, 8];

const CarouselComponent = ({ offers }) =>
    offers.slice(0, 8).map((offer, idx) => (
        <Col key={`${offer}__${idx}`} xs={6} sm={4} md={3}>
            <OfferCard imageSrc={offer.thumbnail} />
        </Col>
    ));

export default CarouselComponent;

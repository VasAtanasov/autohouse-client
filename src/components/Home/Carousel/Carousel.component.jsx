import React, { Fragment } from 'react';
// import { InnerCarouselContainer } from './Carousel.styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const OfferContainer = styled(Col)`
    /* width: 460px; */
    position: relative;
`;

const OfferImage = styled.span`
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

const OfferImage290 = styled(OfferImage)`
    &:after {
        padding-top: 290px;
    }
`;

const OfferImage141 = styled(OfferImage)`
    &:after {
        padding-top: 141px;
    }
`;

const CarouselComponent = () => (
    <Fragment>
        <OfferContainer lg={6} className="p-1">
            <OfferImage290 />
        </OfferContainer>
        <OfferContainer lg={6} className="p-1">
            <Row noGutters>
                <Col xs={6} className="pr-1 pb-1">
                    <OfferImage141 />
                </Col>
                <Col xs={6} className="pl-1 pb-1">
                    <OfferImage141 />
                </Col>
                <Col xs={6} className="pr-1 pt-1">
                    <OfferImage141 />
                </Col>
                <Col xs={6} className="pl-1 pt-1">
                    <OfferImage141 />
                </Col>
            </Row>
        </OfferContainer>
    </Fragment>
);

export default CarouselComponent;

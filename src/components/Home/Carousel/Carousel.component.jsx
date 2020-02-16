import React from 'react';
import { InnerCarouselContainer } from './Carousel.styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const OfferContainerTop = styled.div`
    width: 460px;
    position: relative;
`;

const OfferContainerSmall = styled(OfferContainerTop)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const OfferImage = styled.span`
    &:after {
        box-shadow: inset 0 0 0 1px #e0e3e4;
        display: block;
        width: 100%;
        position: inherit;
        content: '';
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
    <InnerCarouselContainer>
        <OfferContainerTop>
            <OfferImage290 />
        </OfferContainerTop>
        <OfferContainerSmall>
            <OfferImage141 />
            <OfferImage141 />
            <OfferImage141 />
            <OfferImage141 />
        </OfferContainerSmall>
    </InnerCarouselContainer>
);

export default CarouselComponent;

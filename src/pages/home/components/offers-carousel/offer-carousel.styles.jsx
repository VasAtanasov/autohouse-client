import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const InnerCarouselContainer = styled(Row)`
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin: 0;
    justify-content: space-between;
    flex-wrap: nowrap;
    min-width: 940px;
`;

export const TopOffer = styled.div`
    width: 460px;
`;

export const ShowCase = styled(TopOffer)`
    min-width: 460px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 20px;
`;

export const CarouselControl = styled.a`
    text-decoration-skip-ink: none;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 50%;
    line-height: 18px;
    padding: 20px 18px;
    margin: -33px 0 0;
    border: 0;
    cursor: pointer;
    -webkit-box-shadow: inset 0 0 0 1px #fff;
    box-shadow: inset 0 0 0 1px #fff;
    z-index: 2;

    left: ${props => (props.prev ? `-1px` : null)};
    right: ${props => (props.prev ? null : `-1px`)};
    border-radius: ${props => (props.prev ? `0 5px 5px 0` : `5px 0 0 5px`)};

    &:hover {
        background: rgba(0, 0, 0, 0.5);
    }

    &:before {
        display: inline-block;
        vertical-align: top;
        min-height: 25px;
        font-size: 40px;
        color: #fff;
        content: ' ';
    }
`;

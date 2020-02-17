import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const InnerCarouselContainer = styled(Row)`
    position: relative;
    width: 100%;
    min-width: 930px;
    overflow: hidden;
    z-index: 1;
    margin: 0;
    justify-content: space-around;
`;

export const TopOffer = styled.div`
    padding: 0.3rem;
    width: 460px;
`;

export const ShowCase = styled(TopOffer)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

import styled from 'styled-components';
import Col from 'react-bootstrap/Col';

export const InnerCarouselContainer = styled(Col)`
    position: relative;
    overflow: hidden;
    z-index: 1;
    padding: 0;
`;

export const CarouselContainer = styled.section`
    position: relative;
    min-height: 100px;
    width: 100%;
`;

import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const CarouselContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const InnerCarouselContainer = styled(Row)`
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin: 0;
  justify-content: space-between;
  flex-wrap: nowrap;
  min-width: 940px;
  min-height: 375px;
`;

export const TopOffer = styled.div`
  width: 460px;
`;

export const ShowCase = styled(TopOffer)`
  min-width: 460px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
`;

export const CarouselControl = styled.a`
  text-decoration-skip-ink: none;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  padding: 36px 6px;
  margin: -46px 0 0;
  border: 0;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px #fff;
  z-index: 2;

  i:before {
    color: white;
    margin-left: 0;
  }

  left: ${(props) => (props.prev ? `-1px` : null)};
  right: ${(props) => (props.prev ? null : `-1px`)};
  border-radius: ${(props) => (props.prev ? `0 5px 5px 0` : `5px 0 0 5px`)};

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

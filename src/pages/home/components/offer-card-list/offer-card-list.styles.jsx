import styled from 'styled-components';

export const OfferList = styled.div`
  max-width: 992px;
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }

  & .list-element-gap {
    margin-bottom: 12px;
  }
`;

import styled from 'styled-components';

const OfferCardHeadline = styled.div`
  display: flex;
  flex: auto;
  order: 2;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 12px;
`;

const OfferCardImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    height: 75vw;
  }

  @media (min-width: 768px) {
    overflow: hidden;
    max-height: 175.5px;
  }

  @media (min-width: 1100px) {
    max-height: 199.5px;
  }
`;

const OfferImageContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  order: 1;
  margin-left: 0;

  @media (min-width: 768px) {
    flex-basis: 234px;
    order: 2;
    margin-left: 16px;
    border-bottom: 0;
  }

  @media (min-width: 1100px) {
    flex-basis: 266px;
  }
`;

const Summery = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 0 12px 0 12px;
  order: 3;

  @media (min-width: 768px) {
    flex: 1 1 0;
    padding: 0 16px 0 16px;
  }
`;

const OfferContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
`;

import styled from 'styled-components';

export const OfferList = styled.div`
  & .list-element-gap {
    margin-bottom: 12px;
    /* border-bottom: 1px solid #dcdcdc; */
  }
`;

export const OfferCardHeadline = styled.div`
  display: flex;
  flex: auto;
  order: 2;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 12px;

  .offer-summary-action-buttons {
    justify-content: flex-end;
    white-space: nowrap;
    flex: 0 0 auto;
    display: flex;

    div {
      width: 24px;
      height: 24px;
    }
  }

  .offer-summary-titles {
    color: #333;
    overflow: hidden;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    padding-right: 16px;

    a {
      cursor: pointer;
      text-decoration: none;
      transition: color 0.2s ease-in;
      background: none;
      border: none;
      color: #1a72e8;
      font-size: 1rem;

      .offer-summary-title {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .offer-summary-makemodel {
          display: block;
          padding-right: 4px;
          width: 100%;
          font-weight: 600;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .offer-summary-version {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }

  @media all and (min-width: 768px) {
    order: 1;
    padding: 0 16px;
  }
`;

export const OfferCardImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    height: 75vw;
  }

  @media (min-width: 768px) {
    overflow: hidden;
    min-height: 175.5px;
  }

  @media (min-width: 1100px) {
    max-height: 199.5px;
  }

  & picture img {
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & picture img {
    vertical-align: top;
  }
`;

export const OfferImageContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  order: 1;
  margin-left: 0;
  /* border-bottom: 1px solid #c4c4c4; */

  @media all and (min-width: 768px) {
    flex-basis: 234px;
    order: 2;
    margin-left: 16px;
    border-bottom: 0;
  }

  @media all and (min-width: 1024px) {
    flex-basis: 234px;
  }

  @media all and (min-width: 1100px) {
    flex-basis: 266px;
  }
`;

export const Summery = styled.div`
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

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
`;

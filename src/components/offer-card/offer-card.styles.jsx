import styled from 'styled-components';
import { ShineAnimation } from '../../global/styles/shared-styles';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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

    .title {
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

        @media all and (min-width: 768px) {
          flex-wrap: nowrap;
          font-size: 1.25rem;
        }

        .offer-summary-makemodel {
          display: block;
          padding-right: 4px;
          width: 100%;
          font-weight: 600;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: #333;

          @media all and (min-width: 768px) {
            overflow: visible;
            width: auto;
          }
        }

        .offer-summary-version {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: #333;
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
  ${({ imageLoading }) => imageLoading && ShineAnimation}

  @media (max-width: 767px) {
    height: 75vw;
  }

  @media (min-width: 768px) {
    overflow: hidden;
    min-height: 175.5px;
  }

  & picture img {
    opacity: ${({ imageLoading }) => (imageLoading ? 0 : 1)};
    transition: opacity 0.5s ease;
    vertical-align: top;
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const OfferImageContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  order: 1;
  margin-left: 0;

  @media all and (min-width: 768px) {
    flex-basis: 234px;
    order: 2;
    margin-left: 16px;
    border-bottom: 0;
  }

  @media all and (min-width: 1024px) {
    flex-basis: 234px;
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

  .offer-summary-pricing {
    display: flex;
    padding-bottom: 12px;
    align-items: flex-start;

    .offer-summary-payment {
      display: flex;
      flex-direction: column;
      padding-right: 20px;

      .offer-price {
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 1.5rem;
        line-height: 1.3;

        @media (min-width: 768px) {
          font-size: 28px;
        }
      }
    }

    @media (min-width: 768px) {
      padding: 8px 0 16px 0;
    }
  }

  .offer-summary-vehicle-data {
    .vehicle-details {
      list-style: none;
      margin-top: 20px 0 0 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      li[data-type='drive'] {
        display: none;

        @media (min-width: 768px) {
          display: block;
        }
      }

      li {
        flex: 0 0 48%;
        padding: 8px 0;
        color: #333;
        border-bottom: 1px solid #c4c4c4;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        font-size: 0.8125rem;

        @media (min-width: 768px) {
          flex-basis: 32%;
        }
      }

      li:nth-child(-n + 2) {
        padding-top: 0;
      }
    }
  }
`;

export const ActionButton = styled(Button)`
  font-size: 14px;
  margin-right: 4px;
  color: #ffff;
  min-width: 120px;

  &&.is-disabled {
    pointer-events: auto !important;
  }

  &&.btn-warning:hover,
  &&.btn-warning:focus,
  &&.btn-warning:active {
    color: #ffff;
  }
`;

export const OfferOwnerActionsContainer = styled.div`
  flex: 1 1 100%;
  order: 4;
  padding: 12px;
  margin-top: 4px;
  border-top: 1px solid #dcdcdc;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    padding: 12px 16px;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;

    & ${ActionButton} {
      flex-basis: 90%;
      min-width: auto;
      margin: 0;
      margin-bottom: 10px;
    }
  }
`;

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  margin-bottom: 12px;

  &._padding-bottom {
    padding-bottom: 16px;
  }
`;

export const ViewCountContainer = styled.div`
  position: absolute;
  right: 7px;
  top: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 13px;
  padding: 1px 8px 1px;
  border-radius: 3px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;

  .eye-icon,
  .star-icon {
    width: 20px;
    height: 20px;
    color: #fff;
    cursor: pointer;
    margin-right: 7px;
    fill: #fff;
  }
`;

export const SavedCountContainer = styled(ViewCountContainer)`
  top: 40px;
`;

export const OfferLink = styled(Link)`
  &.is-disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  background-color: #fff;
  margin: 20px 0;

  hr {
    display: block;
    margin: 0;
    margin-top: 0;
    border: 0;
    border-top: 1px solid #dcdcdc;
  }
`;

export const DetailsHeadline = styled.div`
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;

  .headline-container {
    display: flex;
    align-items: center;

    .offer-headline {
      flex: 1 1 auto;
      overflow: hidden;

      .offer-title {
        padding: 0 16px;
        display: block;
        white-space: nowrap;
        font-size: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;

        span {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          @media (max-width: 767px) {
            display: block;
          }
        }

        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export const StageData = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  .stage-headline {
    padding: 0 16px 0 16px;
    margin-bottom: 20px;
    font-size: 1.5rem;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

export const VehicleFeatures = styled.div`
  padding: 28px 16px;

  span {
    display: list-item;
    padding: 4px 4px 0 0;
    margin-left: 20px;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .row {
    margin: 0;
  }
`;

export const OfferDescription = styled.div`
  padding: 28px 16px;

  .offer-description {
    color: #616569;
    overflow-y: auto;
    background-color: #f5f6f6;
    border: 1px solid #dae0e5;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    padding: 0.9375rem;
    max-height: 23.4375rem;
  }
`;

export const SellerInfo = styled.div`
  padding: 28px 16px;
`;

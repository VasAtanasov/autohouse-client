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

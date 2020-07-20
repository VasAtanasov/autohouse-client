import styled from 'styled-components';
import Col from 'react-bootstrap/Col';

export const CarDetailsWrapper = styled.div`
  padding: 28px 16px;

  .row {
    margin: 0;
  }
`;

export const VehicleDetail = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-right: 0;
    padding-left: 0;

    && .detail-label {
      i:before {
        font-size: 20px;
      }
    }
  }

  .detail-label {
    display: flex;
    justify-content: center;
    align-items: center;

    .caption {
      padding-left: 5px;
    }

    i:before {
      margin: 0;
      font-size: 25px;
    }
  }
`;

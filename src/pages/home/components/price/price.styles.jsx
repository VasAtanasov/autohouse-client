import styled from 'styled-components';
import Col from 'react-bootstrap/Col';

export const PriceTagContainer = styled(Col)`
  & .card {
    margin: 0.5rem 1rem;

    & .card-header {
      text-align: center;
      cursor: pointer;
      transition: 0.1s;
      font-weight: 500;

      :hover {
        color: ${({ theme }) => theme.colors.defaultColor};
      }
    }

    & ul {
      font-size: 13px;
      font-weight: 500;

      li {
        cursor: pointer;
        margin-bottom: 7px;
        text-align: center;
        transition: 0.1s;

        :hover {
          color: ${({ theme }) => theme.colors.defaultColor};
        }
      }
    }
  }
`;

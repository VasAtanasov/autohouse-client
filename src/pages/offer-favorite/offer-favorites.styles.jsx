import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoritesListWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const EmptyCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 231px;
  max-width: 770px;
  background-color: white;

  @media screen and (min-width: 768px) {
    height: 207px;
  }

  .empty-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    i:before {
      margin: 0;
      font-size: 25px;
      color: rgba(0, 0, 0, 0.5);
    }

    .empty-card-label {
      font-weight: 600;
      font-size: 18px;
      color: rgb(51, 51, 51);
      margin: 8px 0;
    }

    .empty-card-content {
      max-width: 370px;
      font-size: 14px;
      color: rgb(136, 136, 136);
      text-align: center;
      padding: 0px 24px;
    }
  }
`;

export const ReturnToSearch = styled.div`
  display: none;
  background-color: white;
  padding: 1rem;

  .return-to-search-title {
    color: #333333;
    font-size: 16px;
    margin: 0 0 8px 0;
    font-weight: 600;
  }

  p {
    margin: 0 0 35px 0;
    color: #888888;
    line-height: 24px;
    font-size: 14px;
    font-weight: 300;
  }

  @media screen and (min-width: 992px) {
    display: block;
    flex-basis: 25%;
    margin-left: 12px;
  }
`;

export const ReturnToSearchButton = styled(Link)`
  user-select: none;
  text-align: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.defaultColor};
  color: white;
  font-weight: 1.5em;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  width: 182px;
  height: 38px;
  box-sizing: border-box;
  padding: 9px 18px 11px 18px;
  border-radius: 8px;

  :hover,
  :active,
  :focus {
    color: white;
    background-color: #cc0000;
  }
`;

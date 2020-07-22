import styled from 'styled-components';
import { ReturnToSearchButton } from '../../../offer-favorite/offer-favorites.styles';

export const SavedSearchesList = styled.div`
  background-color: white;
`;

export const SpinnerContainer = styled.div`
  background-color: white;
  min-height: 300px;
`;

export const SavedSearchView = styled.div`
  user-select: none;
  outline: none;
  padding: 25px;
  height: 110px;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  display: table;
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-bottom: 10px;

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;

      .menu {
        padding-top: 10px;
      }
    }

    .description {
      flex: 1 1 100%;

      .headline {
        font-size: 16px;
        font-weight: 600;
        display: block;
        margin-bottom: 4px;
      }
    }

    .menu {
      color: ${({ theme }) => theme.colors.defaultColor};
      font-size: 16px;

      .view {
        margin-right: 20px;
      }

      span:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const NoSavedSearches = styled.div`
  color: #666;
  padding: 90px 180px;
  background-size: 350px;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 767px) {
    padding: 20px;
  }

  .title {
    font-weight: 600;
    margin: 0 0 20px 0;
    font-size: 22px;
    text-align: center;
  }
`;

export const ReturnToSearch = styled(ReturnToSearchButton)`
  width: 85%;
  margin: 0 auto;
`;

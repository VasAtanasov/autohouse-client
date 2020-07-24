import styled from 'styled-components';
import { ReturnToSearchButton } from '../../../offer-favorite/offer-favorites.styles';

export const SavedSearchesList = styled.div`
  background-color: white;
`;

export const SpinnerContainer = styled.div`
  background-color: white;
  min-height: 300px;
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

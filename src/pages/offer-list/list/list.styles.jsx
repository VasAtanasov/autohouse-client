import styled from 'styled-components';
import Pagination from 'react-bootstrap/Pagination';

export const OfferListPaging = styled(Pagination)`
  margin-bottom: 0;

  .page-item {
    user-select: none;

    .page-link:focus {
      box-shadow: none;
    }

    .page-link[disabled] {
      background-color: transparent;
    }
  }

  .page-info .page-link {
    background-color: transparent;
    border: none;
    min-width: 240px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .page-info {
      width: 100%;
    }
  }
`;

export const SortContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SearchSummary = styled.div`
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid #e2e2e2;
  padding: 15px;

  header h6 {
    color: #84bd00;
    margin-bottom: 15px;
  }
`;

export const ChipsContainer = styled.main``;

export const ListHeader = styled.header`
  width: 100%;
`;

export const ListFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

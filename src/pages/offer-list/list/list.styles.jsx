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

export const SortSelect = styled.div`
  flex-basis: 100%;
  position: relative;
  display: flex;
  border: 1px solid #e2e2e2;
  line-height: 1.3;
  min-height: 35px;
  margin-bottom: 15px;

  &::after {
    color: black;
    content: '▾';
    margin-right: 10px;
    pointer-events: none;
    position: absolute;
    right: 0px;
    top: 3px;
    font-size: 20px;
  }

  select {
    background: white;
    border: none;
    border-radius: 0;
    cursor: pointer;
    padding-left: 12px;
    width: 100%;
    font-size: 16px;
    &:focus {
      color: black;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: 30%;
    margin-bottom: 0;
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

import styled from 'styled-components';

export const SortSelect = styled.div`
  flex-basis: 100%;
  position: relative;
  display: flex;
  border: 1px solid #e2e2e2;
  line-height: 1.3;

  &::after {
    color: black;
    content: '▾';
    margin-right: 10px;
    pointer-events: none;
    position: absolute;
    right: 0px;
    top: 11px;
    font-size: 20px;
  }

  select {
    background: white;
    border: none;
    border-radius: 0;
    cursor: pointer;
    padding: 12px;
    width: 100%;
    font-size: 16px;
    &:focus {
      color: black;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: 30%;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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


export const OfferListPaging = styled.div`
  display: flex;
  justify-content: space-around;
`;
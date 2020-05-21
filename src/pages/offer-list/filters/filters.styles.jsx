import styled from 'styled-components';

export const SearchFiltersSection = styled.div`
  user-select: none;
  outline: none;
  position: relative;
  z-index: 11;
  background-color: #fff;
  width: 100%;
  margin-bottom: 10px;
`;

export const SearchFiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .page-title {
    font-weight: 600;
  }

  .clear-button {
    position: relative;
    background: none;
    border: none;
    padding-right: 0px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.defaultColor};
  }
`;

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

  .clear-button,
  .save-button {
    position: relative;
    background: none;
    border: none;
    padding-right: 0px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.defaultColor};
  }
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 40px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.defaultColor};
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  :active {
    color: ${({ theme }) => theme.colors.defaultColor};
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.defaultColor};
  }

  span,
  i:before {
    color: ${({ theme }) => theme.colors.defaultColor};
  }

  i:before {
    margin-left: 0px;
    margin-right: 10px;
    font-size: 25px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.defaultColor};
    border-color: ${({ theme }) => theme.colors.defaultColor};

    span,
    i:before {
      color: white;
    }
  }
`;

import styled from 'styled-components';

export const SelectWrapper = styled.div`
  flex-basis: 100%;
  position: relative;
  display: flex;
  border: 1px solid #e2e2e2;
  line-height: 1.3;
  min-height: 35px;
  margin-bottom: 15px;

  select {
    background: white;
    border: none;
    border-radius: 0;
    cursor: pointer;
    padding-left: 12px;
    width: 100%;
    &:focus {
      color: black;
    }
  }

  select:disabled {
    cursor: not-allowed;
    background-color: #e6e6e6;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    &.sort-select {
      flex-basis: 30%;
      margin-bottom: 0;
    }
  }
`;

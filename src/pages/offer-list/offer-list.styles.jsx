import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  margin: 20px 0;

  & .list-element-gap {
    margin-bottom: 12px;
  }
`;

export const ListContainer = styled.div`
  position: relative;
  min-height: 100vh;
  flex-basis: 100%;

  @media screen and (min-width: 992px) {
    flex-basis: 75%;
  }
`;

export const SelectGroup = styled.div`
  label {
    font-weight: 700;
  }
`;

export const SelectWrapper = styled.div`
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
    /* font-size: 16px; */
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

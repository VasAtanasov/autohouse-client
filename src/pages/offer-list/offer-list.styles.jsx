import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  margin-top: 20px;

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

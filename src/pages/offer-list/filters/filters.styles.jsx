import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: none;
  background-color: white;
  margin-right: 12px;
  padding: 1rem;

  @media screen and (min-width: 992px) {
    display: block;
    flex-basis: 25%;
  }
`;

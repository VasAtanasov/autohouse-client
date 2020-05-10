import styled from 'styled-components';

export const BarContainer = styled.nav`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.large}) {
    display: inline-block;
  }
`;

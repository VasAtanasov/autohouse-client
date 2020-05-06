import styled from 'styled-components';

export const HomeSectionContainer = styled.section`
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.screens.large}) {
    width: 980px;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.extraLarge}) {
    width: 1190px;
  }
`;

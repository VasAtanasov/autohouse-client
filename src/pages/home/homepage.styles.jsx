import styled, { css } from 'styled-components';

export const SectionSplit = css`
  margin-bottom: 18px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
`;

export const HomeSectionContainer = styled.section`
  overflow: hidden;
  width: 100%;
  background-color: white;
  position: relative;
  min-height: 376px;

  @media screen and (min-width: ${({ theme }) => theme.screens.large}) {
    margin-right: auto;
    margin-left: auto;
    padding: 13px 17px 0;
  }
`;

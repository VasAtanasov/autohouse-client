import styled from 'styled-components';

export const BarContainer = styled.nav`
  display: none;
  position: relative;

  .dropdownBody {
    background-color: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    border-radius: 2px;
    display: none;
    position: absolute;
    min-width: 15.625em;
    padding: 1.25em;
    z-index: 10000;

    &.expanded {
      display: block;
      right: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.large}) {
    display: flex;
    align-items: center;
  }
`;

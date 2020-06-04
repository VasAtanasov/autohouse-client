import styled from 'styled-components';

export const AppContainer = styled.main`
  max-width: ${({ theme }) => theme.screens.webSize};
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

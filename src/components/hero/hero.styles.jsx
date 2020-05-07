import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  opacity: 0.5;
  background: #000000;
  min-height: ${({ theme }) => theme.heroSize};
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: ${({ theme }) => theme.heroSize};
  color: white;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: ${({ url }) => `url(${url})`};

  p {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.screens.large}) {
    p {
      font-size: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.medium}) {
    background-position: 0% 50%;

    p {
      font-size: 16px;
    }
  }
`;
git;

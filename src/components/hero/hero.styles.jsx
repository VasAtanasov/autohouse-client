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
  /* min-height: ${({ theme }) => theme.heroSize}; */
  
  @media screen and (min-width: 768px) {
    min-height: ${({ theme }) => theme.heroSize};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  color: white;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-position: 0% 50%; */
  background-image: ${({ url }) => `url(${url})`};

  @media screen and (min-width: 768px) {
    min-height: ${({ theme }) => theme.heroSize};
  }

  s p {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.screens.large}) {
    p {
      font-size: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.medium}) {
    p {
      font-size: 16px;
    }
  }
`;

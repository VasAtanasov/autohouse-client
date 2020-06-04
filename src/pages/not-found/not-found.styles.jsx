import styled from 'styled-components';
import ErrorPageImage from './assets/images/error_page.gif';

export const NotFoundPageContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .error-bg-container {
    width: 300px;
    height: 300px;
  }

  & .error_bg {
    background-image: url(${ErrorPageImage});
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;

    & h1 {
      font-size: 80px;
      text-align: center;
    }

    & h3 {
      font-size: 80px;
    }
  }

  & .message-container .text-message {
    color: red;
    font-size: 40px;
  }
`;

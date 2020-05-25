import styled from 'styled-components';

export const LoginRegisterWrapper = styled.div`
  margin: 0 auto;
  width: auto;
  background-color: transparent;
  min-width: 300px;
  box-shadow: none;
  border-radius: 0;
  padding: 20px;

  @media screen and (min-width: 768px) {
    margin: 100px auto;
    width: 350px;
  }

  .login-register-wrapper-header {
    padding: 10px 15px;
    background: transparent;
    color: #797979;
    border-color: #ddd;
    border-bottom: 1px solid #ddd;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;

    h1 {
      font-size: 1.375em;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 10px;
      padding-bottom: 10px;
      margin-top: 0;
    }
  }

  .login-register-wrapper-main {
    padding: 15px;
  }

  .form-label {
    line-height: 28px;
    font-weight: 700;
  }

  .btn-link,
  .defaultLink {
    color: #006598;
    font-size: 14px;
  }

  .legend {
    position: relative;
    margin-bottom: 0.9em;
    text-align: left;
    font-size: 1.05em;
    color: #000;
    border-bottom: 0;
  }

  .error-message-container {
    min-height: 14px;
    margin: 10px 0;
    p {
      color: #dc3545;
      margin: 0;

      ::before {
        color: #dc3545;
        display: inline;
        content: '⚠ ';
      }
    }
  }
`;

export const LoginRegisterContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  width: 100%;
`;

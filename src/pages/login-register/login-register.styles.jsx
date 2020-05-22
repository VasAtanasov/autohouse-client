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

  .form-control {
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #c2ccd4;
    border-radius: 2px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 14px;

    :focus {
      outline: 2px solid #006598;
      outline-offset: -2px;
      box-shadow: none;
    }
  }

  .btn-link,
  .defaultLink {
    color: #006598;
    font-size: 14px;
  }

  .next-button,
  .login-button,
  .register-button {
    color: #fff;
    cursor: pointer;
    border: 1px solid #0277bd;
    border-radius: 2px;
    background: #0277bd;
    transition: background-color 0.2s ease;
    font-size: 1em;
    padding: 10px;
    margin-bottom: 15px;
    user-select: none;
    box-shadow: none;

    :focus {
      box-shadow: none;
    }
    :active,
    :hover {
      background: #025e95;
      border-color: #025e95;
    }
  }

  p {
    color: #dc3545;
    margin-top: 5px;

    ::before {
      color: #dc3545;
      display: inline;
      content: '⚠ ';
    }
  }

  .legend {
    position: relative;
    margin-bottom: 0.9em;
    text-align: left;
    font-size: 1.05em;
    color: #000;
    border-bottom: 0;
  }
`;

export const LoginRegisterContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  width: 100%;
`;

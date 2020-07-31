import styled, { css } from 'styled-components';

const inlineErrorContainer = css`
  display: inline-block;
  margin: 0;

  min-height: auto;
`;

const labelError = css`
  margin-bottom: 0.5rem;
  font-size: 12px;
`;

export const ErrorMessageContainer = styled.div`
  min-height: 14px;
  margin: 10px 0;
  ${({ inline }) => inline && inlineErrorContainer};
  ${({ forLabel }) => forLabel && labelError};

  p {
    color: #dc3545;
    margin: 0;

    ::before {
      color: #dc3545;
      display: inline;
      content: '⚠ ';
    }
  }

  p.m-bt {
    margin-bottom: 10px !important;
  }
`;

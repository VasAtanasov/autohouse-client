import styled from 'styled-components';

export const ErrorMessageContainer = styled.div`
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
`;

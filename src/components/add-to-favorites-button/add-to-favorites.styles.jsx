import styled from 'styled-components';

export const ButtonContainer = styled.button`
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in;
  background: none;
  border: none;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    .star-icon i:before,
    .button-text {
      color: ${({ theme }) => theme.colors.defaultColor};
    }
  }

  .star-icon {
    width: 24px;
    height: 24px;

    i:before {
      margin-left: 0;
      font-size: 22px;
    }

    & > i {
      width: 24px;
      height: 24px;
    }
  }

  .button-text {
    padding-left: 4px;
  }
`;

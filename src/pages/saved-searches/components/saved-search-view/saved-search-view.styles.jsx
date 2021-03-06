import styled from 'styled-components';

export const SavedSearchViewContainer = styled.div`
  user-select: none;
  outline: none;
  padding: 25px;
  height: 110px;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  display: table;
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-bottom: 10px;

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;

      .menu {
        padding-top: 10px;
      }
    }

    .description {
      flex: 1 1 100%;

      .headline {
        font-size: 16px;
        font-weight: 600;
        display: block;
        margin-bottom: 4px;
      }
    }

    .menu {
      color: ${({ theme }) => theme.colors.defaultColor};
      font-size: 16px;

      .view {
        margin-right: 20px;
      }

      span:hover {
        text-decoration: underline;
      }
    }
  }
`;

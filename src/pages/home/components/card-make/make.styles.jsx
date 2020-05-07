import styled from 'styled-components';

export const MakeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screens.large}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const IconLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;

  :hover i:before,
  :hover span {
    color: ${(props) => props.theme.colors.defaultColor};
  }

  & span {
    color: #555a60;
    display: block;
    text-align: center;
    margin-top: 10px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  & i::before {
    font-weight: 400;
    font-size: 80px;
    color: #767676;
  }
`;

import styled from 'styled-components';

export const BodyStyleCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const HoverImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.mainImage});

  &:hover {
    background-image: url(${(props) => props.hoverImage});
  }

  @media screen and (min-width: 576px) {
    height: 125px;
  }
`;

export const BodyStyleCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  & .preloader {
    display: none;
  }

  & .caption {
    margin-top: -13px;
    text-align: center;
    color: #333333;
    font-size: 14px;
    font-weight: 600;
    height: 50px;
    width: 100%;
    z-index: 1;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  :hover .caption {
    color: ${({ theme }) => theme.colors.defaultColor};
  }
`;

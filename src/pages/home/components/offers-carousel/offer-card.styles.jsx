import styled from 'styled-components';

const item = {
  width: `220px`,
  height: `141px`,
  fontSize: `15px`,
  titleHeight: `18px`,
  priceFontSize: `16px`,
};

const topItem = {
  width: `460px`,
  height: `290px`,
  fontSize: `20px`,
  titleHeight: `22px`,
  priceFontSize: `28px`,
};

export const OfferCard = styled.a`
  width: ${(props) => (props.isTop ? topItem.width : item.width)};
  margin-bottom: 0.7rem;
  font-size: 0;
  position: relative;
  text-decoration: none !important;
  border-bottom: 0 !important;
  text-decoration-skip-ink: none;
  background-color: transparent;

  & ul {
    line-height: 1;
    font-size: 0;
    min-height: 33px;
    margin: 0;
    padding: 0;
    list-style: none;

    & .title {
      font-size: ${(props) => (props.isTop ? topItem.fontSize : item.fontSize)};
      height: ${(props) =>
        props.isTop ? topItem.titleHeight : item.titleHeight};
      line-height: 1.2;
      margin-top: 2px;
      color: #256799;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    & .price {
      font-size: ${(props) =>
        props.isTop ? topItem.priceFontSize : item.priceFontSize};
      font-weight: 700;
      color: #3c9806;
    }

    & .item {
      font-size: 15px;
      color: #414042;
      display: inline-block;
      &:before {
        content: '    ';
        font-size: 18px;
        line-height: 0;
        padding: 0 5px;
        color: #9da6aa;
      }
    }
  }

  & .photo {
    padding-top: ${(props) => (props.isTop ? topItem.height : item.height)};
    width: ${(props) => (props.isTop ? topItem.width : item.width)};
    background-color: #eff2f3;
    display: inline-block;
    position: relative;
    overflow: hidden;

    &:after {
      box-shadow: inset 0 0 0 1px #e0e3e4;
      display: block;
      width: 100%;
      position: inherit;
      content: '';
    }

    &:before {
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-top-color: #7bccff;
      width: 0;
      height: 0;
      padding: 10%;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 50%;
      content: '';

      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(1turn);
          transform: rotate(1turn);
        }
      }
      @keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(1turn);
          transform: rotate(1turn);
        }
      }
    }

    & picture {
      & img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        border: 0;
        animation: none !important;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        transition: all 0.5s ease;

        &:before {
          animation: none !important;
        }
      }
    }
  }
`;

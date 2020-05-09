import React from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import searchIcon from './icon/search-icon.svg';
import arrowIcon from './icon/back-arrow.svg';

// Search Container

export const SearchContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  margin: 0 auto 0 auto;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  padding-bottom: 2rem;
`;

export const TypeLabel = styled.div`
  /* text-transform: uppercase; */
  color: white;
  font-size: 16px;
  font-weight: 600;
  /* margin: 0 0 15px 0; */

  @media screen and (min-width: 992px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export const SearchButton = styled.button`
  border: solid 2px white;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
  text-align: center;
  padding: 13px;
  background-color: transparent;
  width: 100%;
  margin-top: 14px;

  @media screen and (min-width: 576px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    margin-left: 10px;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const Bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const StyledDotsLoader = styled.div`
  display: inline-block;
`;

const Dot = styled.span`
  width: ${(props) => (props.big ? '20px' : '12px')};
  height: ${(props) => (props.big ? '20px' : '12px')};
  background-color: ${(props) => (props.white ? '#FFF' : '#000')};
  border-radius: 100%;
  display: inline-block;
  animation: ${Bounce} 1s infinite ease-in-out both;
  &:first-child {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

export const Loader = (props) => {
  return (
    <StyledDotsLoader {...props}>
      <Dot {...props} style={{}} />
      <Dot {...props} style={{}} />
      <Dot {...props} style={{}} />
    </StyledDotsLoader>
  );
};

// Bootstrap Modal

export const StyledModal = styled(Modal)`
  .modal-dialog {
    user-select: none;

    & .modal-content {
      & .modal-header {
        &.invisible {
          visibility: hidden;
        }

        & .modal-title {
        }

        .close {
          margin-left: 0;
        }
      }
      & .modal-body {
        padding: 0;
      }
    }

    @media (min-width: ${({ theme }) => theme.screens.medium}) {
      width: 435px;
      height: auto;
      border-radius: 5px;
      overflow: hidden;
    }
  }
`;

export const BackArrowButton = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-size: cover;
  margin-top: 2px;
  background-image: url(${arrowIcon});
`;

// Body Style Components

export const BodyStyleList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px 0px 20px;

  & li {
    color: rgb(102, 102, 102);
    display: inline-block;
    width: 50%;
    height: 100px;
    text-align: center;
  }
`;
export const BodyStyleIcon = styled.div`
  margin: 20px auto 0px;
  width: 132px;
  height: 78px;
  background-image: url(${(props) => props.mainImage});
  background-size: cover;
  background-position: 0% 50%;
`;

export const BodyStyleLabel = styled.div`
  font-size: 17px;
  font-weight: 100;
  color: rgb(51, 51, 51);
  text-align: center;
  height: 25px;
  margin-top: 10px;
`;

export const BodyStyleButton = styled.button`
  background-color: white;
  cursor: pointer;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;

  &:hover ${BodyStyleIcon} {
    background-image: url(${(props) => props.hoverImage});
    background-position: 20% 35%;
  }
`;

// Maker Models Components

export const OuterContainer = styled.div`
  height: calc(95vh - 60px);

  @media (min-width: ${({ theme }) => theme.screens.medium}) {
    height: calc(70vh - 60px);
    max-height: 600px;
    min-height: 200px;
  }
`;

export const ScrollListContainer = styled.div`
  height: 100%;
  overflow-y: auto;

  & ul {
    padding: 0;
    margin: 0;
    position: relative;

    & li {
      height: 60px;
      line-height: 1.33;
      letter-spacing: 0.39px;
      text-align: left;
      cursor: pointer;
      font-size: 18px;
      font-weight: 300;
      color: rgb(51, 51, 51);
      position: relative;
      padding: 17px 0px 19px 25px;
      list-style: none;
      border-bottom: 1px solid rgb(235, 235, 235);

      &:hover {
        color: ${({ theme }) => theme.colors.defaultColor};
        background-color: rgb(242, 242, 242);
      }
    }
  }
`;

// Search Input

export const FilterContainer = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 1;

  & .input-container {
    position: relative;
    box-shadow: rgb(211, 211, 211) 0px 1px 0px 0px;
    padding: 12px 16px;

    & .search-icon {
      position: absolute;
      z-index: 1;
      height: 22px;
      width: 22px;
      top: 25px;
      left: 28px;
      background-image: url(${searchIcon});
      background-size: cover;
    }

    & input {
      background-color: white;
      height: 48px;
      width: 100%;
      font-size: 18px;
      color: rgb(51, 51, 51);
      -webkit-appearance: none;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(51, 51, 51);
      border-image: initial;
      padding: 5px 5px 5px 42px;
      border-radius: 8px;
      outline: none;
    }

    & input:not(:focus) {
      background-color: rgb(235, 235, 235);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(211, 211, 211);
      border-image: initial;
    }
  }
`;

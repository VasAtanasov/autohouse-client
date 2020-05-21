import styled, { css } from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const FiltersStyledModal = styled(Modal)`
  background-color: white;

  .modal-dialog {
    margin: 0 auto;
    max-width: 100%;
    padding: 1rem;

    .modal-content {
      border: none;
      form {
        margin-bottom: 55px;
      }
    }
  }
`;

export const SearchButtonsWrapper = styled.div`
  top: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  box-shadow: 0 0 10px 0 #cacdd0;
  padding-right: 60%;

  .button {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    user-select: none;
    outline: none;
    color: ${({ theme }) => theme.colors.defaultColor};
    margin-right: 10px;
    background: none;
    border: none;
    padding: 17px 9px;
    font-size: 14px;
    width: 50%;
    margin: 0;

    &.apply {
      position: absolute;
      right: 20px;
      bottom: 5px;
      background-color: ${({ theme }) => theme.colors.defaultColor};
      color: #fff;
      border: none;
      cursor: pointer;
      box-shadow: 1px 1px 8px 1px #999;
      width: 50%;
      font-size: 14px;
      padding: 19px 0;
      height: 55px;
      top: -15px;
      border-radius: 40px;
    }
  }
`;

export const SearchButtonsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  margin-bottom: 10px;
  width: 100%;
  z-index: 3;

  ${({ scrolled }) =>
    scrolled &&
    css`
      position: fixed;
      margin-top: -250px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

      ${({ awake }) =>
        awake &&
        css`
          background-color: #fff;
          padding: 1rem;
          margin-top: -83px;
          margin-bottom: 0;
          transition: 0.3s all ease-out;
        `}

      ${({ sleep }) =>
        sleep &&
        css`
          transition: 0.3s all ease-out;
        `}
    `}
`;

export const FiltersModalToggleButton = styled.button`
  user-select: none;
  /* font-size: 1rem;  */
  font-weight: 600;
  line-height: 1.3;
  display: inline-block;
  appearance: none;
  border: none;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  transition-property: color, background-color, border-color;
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.defaultColor};
  color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 4px 16px;

  :hover {
    background-color: #b93e32;
  }

  :active {
    background-color: #971e1a;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  margin: 20px 0;

  & .list-element-gap {
    margin-bottom: 12px;
  }
`;

export const ListContainer = styled.div`
  position: relative;
  min-height: 100vh;
  flex-basis: 100%;

  @media screen and (min-width: 992px) {
    flex-basis: 75%;
  }
`;

export const SelectGroup = styled.div`
  label {
    font-weight: 700;
  }
`;

export const FiltersContainer = styled.div`
  display: none;
  background-color: white;
  padding: 1rem;

  @media screen and (min-width: 992px) {
    display: block;
    flex-basis: 25%;
    margin-right: 12px;
  }
`;

export const SelectWrapper = styled.div`
  flex-basis: 100%;
  position: relative;
  display: flex;
  border: 1px solid #e2e2e2;
  line-height: 1.3;
  min-height: 35px;
  margin-bottom: 15px;

  &::after {
    color: black;
    content: '▾';
    margin-right: 10px;
    pointer-events: none;
    position: absolute;
    right: 0px;
    top: 3px;
    font-size: 20px;
  }

  select {
    background: white;
    border: none;
    border-radius: 0;
    cursor: pointer;
    padding-left: 12px;
    width: 100%;
    /* font-size: 16px; */
    &:focus {
      color: black;
    }
  }

  select:disabled {
    cursor: not-allowed;
    background-color: #e6e6e6;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    &.sort-select {
      flex-basis: 30%;
      margin-bottom: 0;
    }
  }
`;

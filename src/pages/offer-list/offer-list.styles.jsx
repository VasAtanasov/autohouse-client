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
  align-items: flex-start;

  & .list-element-gap {
    margin-bottom: 12px;
  }
`;

export const ListContainer = styled.div`
  position: relative;
  min-height: 80vh;
  flex-basis: 100%;

  @media screen and (min-width: 992px) {
    flex-basis: 75%;
    max-width: 725px;
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
    min-width: 243px;
    margin-right: 12px;
  }
`;

export const NoResults = styled.div`
  color: #666;
  padding: 90px;
  background-size: 350px;
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: 768px) {
    height: 643px;
  }

  @media (max-width: 767px) {
    min-height: 650px;
    padding: 20px;
  }

  .empty-fuel-guage {
    display: block;
    margin: 0 auto;
    width: 70%;
    padding: 35px 0;
  }

  .title {
    font-weight: 600;
    margin: 0 0 20px 0;
    text-align: center !important;
  }
`;

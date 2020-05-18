import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  padding: 0 0 10px 0;

  & input[type='checkbox'] {
    display: none;
  }

  & input[type='checkbox'] + label {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  & input[type='checkbox'] + label:last-child {
    margin-bottom: 0;
  }

  & input[type='checkbox'] + label:before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border: 2px solid ${(props) => props.theme.colors.defaultColor};
    position: absolute;
    left: 0;
    top: 3px;
    opacity: 0.6;
    transition: all 0.08s, border-color 0.08s;
  }

  & input[type='checkbox']:checked + label:before {
    width: 10px;
    top: 0px;
    left: 5px;
    border-radius: 0;
    border: 2px solid #3ca826;
    background-color: transparent;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

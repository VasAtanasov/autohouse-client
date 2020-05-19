import styled from 'styled-components';

export const SliderWrapper = styled.div`
  padding-top: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  input {
    color: #777;
    width: 75px;
    display: block;
    background-color: white;
    cursor: text;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    font-weight: 400;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 10px;
  padding: 10px 20px 15px 10px;
  .noUi-horizontal {
    height: 3px;
    border: none;
    cursor: pointer;
  }
  .noUi-connect {
    background: ${({ theme }) => theme.colors.defaultColor};
    box-shadow: none;
  }

  .noUi-handle {
    user-select: none;
    outline: none;
    cursor: pointer;
    height: 20px;
    width: 20px;
    top: -9px;
    /* right: auto; */
    bottom: auto;
    /* left: auto; */
    border-radius: 13px;
  }

  .noUi-handle:before,
  .noUi-handle:after {
    content: none;
  }
`;

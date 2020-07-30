import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10;

  &:focus {
    outline: 0;

    & .selection {
      box-shadow: 0 0 1px 1px ${(props) => props.theme.colors.defaultColor};
    }
  }

  && svg {
    display: block;
    width: 1em;
    height: 1em;
    fill: currentColor;
  }

  .label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
  }

  .selection {
    position: relative;
    padding: 5px;
    border: 1px solid #ddd;
    background: #fff;
  }

  .value {
    position: relative;
    display: inline-block;
    padding: 5px 10px;
  }

  .multiple {
    padding-right: 30px;
    margin-right: 5px;
    background: ${(props) => props.theme.colors.defaultColor};
    color: #fff;
  }

  .delete {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    padding: 7px;
    font-size: 10px;
    cursor: pointer;
  }

  .placeholder {
    padding: 5px 10px;
    color: #898989;
  }

  .arrow {
    position: absolute;
    top: 5px;
    right: 5px;
    display: block;
    padding: 10px;
    font-size: 10px;
    color: #898989;
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: solid #ddd;
    border-width: 0 1px;
    background: #fff;
  }

  .option {
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  .option.selected {
    border: 1px solid ${(props) => props.theme.colors.defaultColor};
    margin: -1px -1px 0;
  }
  .option.focused {
    background: #f5f5f5;
  }

  .checkbox {
    content: '';
    vertical-align: top;
    display: inline-block;
    width: 16px;
    height: 16px;
    padding: 2px;
    border: 1px solid #ddd;
    border-radius: 2px;
    margin: 2px 12px 0 0;
    color: #fff;
    font-size: 10px;
  }
  .selected .checkbox {
    border-color: #007da6;
    background: ${(props) => props.theme.colors.defaultColor};
  }
`;

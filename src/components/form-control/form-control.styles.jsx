import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const FormControl = styled(Form.Control)`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #c2ccd4;
  border-radius: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-size: 14px;

  :focus {
    outline: 2px solid #006598;
    outline-offset: -2px;
    box-shadow: none;
  }

  &.form-control-plaintext {
    border: none;
    padding-left: 13px;
  }

  &.form-control-plaintext:focus,
  &.form-textarea:focus {
    outline: none;
  }

  &.form-select:disabled {
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
  }

  &.form-textarea:disabled {
    padding-top: 7px;
    padding-left: 13px;
    resize: none;
    border: none;
  }
`;

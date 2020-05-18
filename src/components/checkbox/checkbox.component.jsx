import React from 'react';
import { CheckBoxContainer } from './checkbox.styles';

const Checkbox = ({ id, text }) => (
  <CheckBoxContainer>
    <input type="checkbox" id={`${id}_${text}`} />
    <label htmlFor={`${id}_${text}`}>{text}</label>
  </CheckBoxContainer>
);

export default Checkbox;

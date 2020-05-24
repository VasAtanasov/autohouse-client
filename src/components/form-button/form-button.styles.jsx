import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export const FormButton = styled(Button)`
  color: #fff;
  cursor: pointer;
  border: 1px solid #0277bd;
  border-radius: 2px;
  background: #0277bd;
  transition: background-color 0.2s ease;
  font-size: 1em;
  padding: 10px;
  margin-bottom: 15px;
  user-select: none;
  box-shadow: none;

  :focus {
    box-shadow: none;
  }
  :active,
  :hover {
    background: #025e95;
    border-color: #025e95;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuLinkContainer = styled(NavLink)`
  display: block;
  font-size: 16px;
  color: black;
  padding-left: 40px;
  padding-top: 15px;
  padding-bottom: 15px;

  &.active {
    border-left-color: ${(props) => props.theme.colors.defaultColor};
    border-left-style: solid;
    border-left-width: 5px;
    padding-left: 35px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.defaultColor};
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;

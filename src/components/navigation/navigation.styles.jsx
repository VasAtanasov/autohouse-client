import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const drawerLinks = css`
  padding-left: 40px;
  padding-top: 15px;
  padding-bottom: 15px;

  &.active {
    color: ${(props) => props.theme.colors.defaultColor};
    border-left-color: ${(props) => props.theme.colors.defaultColor};
    border-left-style: solid;
    border-left-width: 5px;
    padding-left: 35px;
  }
`;

const barLinks = css`
  padding: 22px 15px 22px 15px;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: white;

  &.active {
    color: ${(props) => props.theme.colors.defaultColor};
    border-bottom-color: ${(props) => props.theme.colors.defaultColor};
    border-bottom-style: solid;
    border-bottom-width: 5px;
  }
`;

export const MenuLink = styled(NavLink)`
  display: block;

  &:hover {
    color: ${(props) => props.theme.colors.defaultColor};
  }
`;

export const UserDropDownMenu = styled(Dropdown)`
  .dropdown-menu {
    border-radius: 0;
  }

  .dropdown-item.active,
  .dropdown-item:active {
    background-color: ${(props) => props.theme.colors.defaultColor};
    color: #fff;
  }
`;

export const IconButton = styled(Dropdown.Toggle)`
  background-color: white;
  border-color: white;

  ::after {
    display: none;
  }

  &.btn-primary:hover,
  &.btn-primary:not(:disabled):not(.disabled):active,
  &.btn-primary.dropdown-toggle,
  &.btn-primary.dropdown-toggle:focus,
  &.btn:focus {
    color: #fff;
    background-color: #fff;
    border-color: #fff;
    box-shadow: none;
  }

  svg {
    path {
      fill: rgba(0, 0, 0, 0.4);
    }
  }

  svg:hover,
  &[aria-expanded='true'] svg {
    path {
      fill: ${(props) => props.theme.colors.defaultColor};
    }
  }

  .user-nav-icon {
    width: 2.1em;
    height: 2.1em;
  }
`;

export const Menu = styled.div`
  margin: 0;
  padding: 0;

  ${MenuLink} {
    display: ${({ horizontal }) => (horizontal ? 'inline-block' : 'block')};
    ${({ horizontal }) => (horizontal ? barLinks : drawerLinks)};
  }
`;

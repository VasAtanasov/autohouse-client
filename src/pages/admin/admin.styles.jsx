import styled, { css } from 'styled-components';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Brand } from '../../components/header/header.styles';
import { NavLink } from 'react-router-dom';

export const FullWidth = css`
  position: relative;
  width: 100%;
`;

export const DashboardContainer = styled(Container)`
  ${FullWidth}
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const DashboardHeader = styled.header`
  ${FullWidth}
  flex: 0 0 auto;
  max-width: 100%;
`;

export const DashboardNavbar = styled(Navbar)`
  .navbar-brand {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  @media screen and (min-width: 992px) {
    &&.navbar-collapse {
      display: none !important;
    }
  }
`;

export const DashboardNavbarBrand = styled(Brand)`
  font-size: 1.7rem;
`;

export const MenuLink = styled(NavLink)`
  display: block;
  font-size: 16px;

  &:hover {
    color: ${(props) => props.theme.colors.defaultColor};
  }
`;

export const DashboardMain = styled(Row)`
  ${FullWidth}
  flex: 1 1 100%;
  margin: 0;
  flex-wrap: nowrap;
`;

export const SideNav = styled(Col)`
  max-width: 200px;
  background-color: rgb(239, 239, 239);
  display: none;
  padding: 0;

  @media screen and (min-width: 992px) {
    display: block;
  }

  a.active {
    background-color: ${(props) => props.theme.colors.defaultColor};
    color: #fff;
  }
`;

export const PageContent = styled(Col)`
  background: white;
  padding: 0;
`;

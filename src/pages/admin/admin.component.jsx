import React from 'react';
// import { connect } from 'react-redux';
import {
  DashboardContainer,
  DashboardHeader,
  DashboardNavbar,
  DashboardMain,
  DashboardNavbarBrand,
  SideNav,
  PageContent,
  NavbarCollapse,
  MenuLink,
} from './admin.styles';
import { AuthAdminCheck } from '../../components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import withSizes from 'react-sizes';
import DashboardContent from './components/dashboard/dashboard.component';
import UsersContent from './components/users/users.component';

const Dashboard = ({ width, match }) => {
  return (
    <DashboardContainer fluid>
      <DashboardHeader>
        <DashboardNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <DashboardNavbarBrand>
              Auto<span>house</span>
            </DashboardNavbarBrand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {width && width <= 991 && (
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link as={MenuLink} to={`${match.url}/dashboard`}>
                  Dashboard
                </Nav.Link>
                <Nav.Link as={MenuLink} to={`${match.url}/users`}>
                  Users
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          )}
        </DashboardNavbar>
      </DashboardHeader>
      <DashboardMain>
        <SideNav>
          <Nav className="flex-column">
            <Nav.Link as={MenuLink} to="/admin/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={MenuLink} to="/admin/users">
              Users
            </Nav.Link>
          </Nav>
        </SideNav>
        <PageContent>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              render={() => <Redirect to={`${match.url}/dashboard`} />}
            />
            <Route
              exact
              path={`${match.url}/dashboard`}
              component={DashboardContent}
            />
            <Route exact path={`${match.url}/users`} component={UsersContent} />
          </Switch>
        </PageContent>
      </DashboardMain>
      <AuthAdminCheck />
    </DashboardContainer>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
  width,
});

export default withSizes(mapSizesToProps)(Dashboard);

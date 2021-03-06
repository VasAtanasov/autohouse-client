import React from 'react';
import { Route, NavLink, withRouter, Switch, Redirect } from 'react-router-dom';
import {
  SectionFixedHeight,
  Section,
  SettingsNavigation,
  NavLinkContainer,
} from './user-settings-main.styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Padlock, PadlockColor, Data, DataColor } from '../../assets/icons';
import EditAccountInformation from '../edit-account-information/edit-account-information.component';
import ChangePassword from '../change-password/change-password.component';

const UserSettingsMain = ({ match }) => {
  return (
    <Container>
      <Row>
        <Col className="small-gutters" xs={12} lg={4}>
          <Section>
            <SettingsNavigation>
              <NavLinkContainer xs={6} lg={12}>
                <NavLink to={`${match.url}/edit-personal-info`}>
                  <div className="link-tab-icon">
                    <Data />
                    <DataColor />
                  </div>
                  <span className="link-info-text">
                    EDIT ACCOUNT INFORMATION
                  </span>
                </NavLink>
              </NavLinkContainer>
              <NavLinkContainer xs={6} lg={12}>
                <NavLink to={`${match.url}/password`}>
                  <div className="link-tab-icon">
                    <Padlock />
                    <PadlockColor />
                  </div>
                  <span className="link-info-text">PASSWORD</span>
                </NavLink>
              </NavLinkContainer>
            </SettingsNavigation>
          </Section>
        </Col>
        <Col className="small-gutters" xs={12} lg={8}>
          <SectionFixedHeight>
            <Switch>
              <Route
                exact
                path={`${match.url}`}
                render={() => (
                  <Redirect to={`${match.url}/edit-personal-info`} />
                )}
              />
              <Route
                exact
                path={`${match.url}/edit-personal-info`}
                component={EditAccountInformation}
              />
              <Route
                exact
                path={`${match.url}/password`}
                component={ChangePassword}
              />
              <Route
                path="*"
                render={() => (
                  <Redirect to={`${match.url}/edit-personal-info`} />
                )}
              />
            </Switch>
          </SectionFixedHeight>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(UserSettingsMain);

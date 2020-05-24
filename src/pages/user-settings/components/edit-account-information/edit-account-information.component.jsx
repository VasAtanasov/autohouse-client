import React from 'react';
import {
  AccountSettingsContainer,
  AccountSettingsTitle,
  SettingsMain,
} from '../../user-settings.styles';
import { FormButton, FormControl } from '../../../../components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const EditAccountInformation = () => (
  <AccountSettingsContainer>
    <AccountSettingsTitle>Edit Account Information</AccountSettingsTitle>
    <SettingsMain>
      <Form>
        <Form.Row>
          <Col>
            <FormControl placeholder="First name" />
          </Col>
          <Col>
            <FormControl placeholder="Last name" />
          </Col>
        </Form.Row>
      </Form>
    </SettingsMain>
  </AccountSettingsContainer>
);

export default EditAccountInformation;

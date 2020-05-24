import React from 'react';
import {
  AccountSettingsContainer,
  AccountSettingsTitle,
  SettingsMain,
} from '../../user-settings.styles';
import { FormControl } from '../../../../components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const EditAccountInformation = () => (
  <AccountSettingsContainer>
    <AccountSettingsTitle>Edit Account Information</AccountSettingsTitle>
    <SettingsMain>
      <Form>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={6} controlId="first-name">
            <Form.Label>First name</Form.Label>
            <FormControl />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId="last-name">
            <Form.Label>Last name</Form.Label>
            <FormControl />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs={12} controlId="display-name">
            <Form.Label>Display name</Form.Label>
            <FormControl />
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="description">
            <Form.Label>Description</Form.Label>
            <FormControl as="textarea" rows={5} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={6} controlId="phone-number">
            <Form.Label>Phone number</Form.Label>
            <FormControl />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId="web-link">
            <Form.Label>Website</Form.Label>
            <FormControl />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={6} controlId="location-region">
            <Form.Label>Region</Form.Label>
            <FormControl as="select" />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} controlId="location-city">
            <Form.Label>City</Form.Label>
            <FormControl as="select">
              <option>Choose...</option>
              <option>...</option>
            </FormControl>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="street-address">
            <Form.Label>Address</Form.Label>
            <FormControl />
          </Form.Group>
        </Form.Row>
      </Form>
    </SettingsMain>
  </AccountSettingsContainer>
);

export default EditAccountInformation;

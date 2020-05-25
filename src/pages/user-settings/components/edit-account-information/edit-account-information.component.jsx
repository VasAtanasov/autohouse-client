import React from 'react';
import {
  AccountSettingsContainer,
  AccountSettingsTitle,
  SettingsMain,
} from '../../user-settings.styles';
import { FormControl, FormButton } from '../../../../components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const EditAccountInformation = ({ user, account }) => {
  const [editable, setEditable] = React.useState(false);
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const handleEditAccountInfo = () => {};

  return (
    <AccountSettingsContainer>
      <AccountSettingsTitle>Edit Account Information</AccountSettingsTitle>
      <SettingsMain>
        <Form onSubmit={handleSubmit(handleEditAccountInfo)}>
          <Form.Row>
            <Form.Group as={Col} xs={12} md={6} controlId="first-name">
              <Form.Label>First name</Form.Label>
              <FormControl
                name="firstName"
                ref={register({ required: true, maxLength: 50 })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={account.firstName}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="last-name">
              <Form.Label>Last name</Form.Label>
              <FormControl
                name="lastName"
                ref={register({ required: true, maxLength: 50 })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={account.lastName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} xs={12} controlId="display-name">
              <Form.Label>Display name</Form.Label>
              <FormControl
                name="lastName"
                ref={register({ required: true, maxLength: 50 })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={account.displayName}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} controlId="description">
              <Form.Label>Description</Form.Label>
              <FormControl
                className="form-textarea"
                as="textarea"
                rows={5}
                disabled={!editable}
                name="lastName"
                ref={register({ required: true, maxLength: 50 })}
                readOnly={!editable}
                defaultValue={account.description}
              />
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
              <FormControl className="form-select" as="select" disabled>
                <option>Choose...</option>
                <option>...</option>
              </FormControl>
            </Form.Group>
            <Form.Group as={Col} xs={12} controlId="street-address">
              <Form.Label>Address</Form.Label>
              <FormControl />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            {!editable && (
              <Form.Group as={Col} xs={6}>
                <FormButton
                  variant="info"
                  block
                  onClick={() => setEditable(true)}
                >
                  Edit
                </FormButton>
              </Form.Group>
            )}
            {editable && (
              <Form.Group as={Col} xs={6}>
                <FormButton
                  variant="success"
                  block
                  onClick={() => setEditable(false)}
                >
                  Save
                </FormButton>
              </Form.Group>
            )}
            {editable && (
              <Form.Group as={Col} xs={6}>
                <FormButton
                  variant="light"
                  block
                  onClick={() => setEditable(false)}
                >
                  Cancel
                </FormButton>
              </Form.Group>
            )}
          </Form.Row>
        </Form>
      </SettingsMain>
    </AccountSettingsContainer>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user.details,
  account: user.account,
});

export default connect(mapStateToProps)(EditAccountInformation);

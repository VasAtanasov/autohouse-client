import React from 'react';
import {
  AccountSettingsContainer,
  AccountSettingsTitle,
  SettingsMain,
} from '../../user-settings.styles';
import {
  FormControl,
  FormButton,
  ErrorMessageContainer,
} from '../../../../components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { nullToEmptyString, isEmpty } from '../../../../utils/helpers';
import { toast } from 'react-toastify';
import { Required } from './edit-account-information.styles';

const DEALER = 'DEALER';

const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const EditAccountInformation = ({ user, account }) => {
  const hasAccount = nullToEmptyString(user?.hasAccount);
  const [editable, setEditable] = React.useState(!hasAccount);
  const [accountType, setAccountType] = React.useState(
    nullToEmptyString(account?.accountType?.toUpperCase())
  );
  const isDealer = accountType === DEALER;

  const { register, errors, handleSubmit, clearError, reset } = useForm();

  React.useEffect(() => {
    clearError();
  }, [accountType, clearError]);

  const handleAddEditAccountInfo = (data) => {
    if (!isEmpty(errors)) {
      return;
    }
    console.log(data);
  };

  return (
    <AccountSettingsContainer>
      <AccountSettingsTitle>
        {hasAccount ? 'Edit' : 'Add'} Account{hasAccount && ' Information'}
      </AccountSettingsTitle>
      <SettingsMain>
        <Form onSubmit={handleSubmit(handleAddEditAccountInfo)}>
          <Form.Row>
            <Form.Group as={Col} xs={12} md={6} controlId="first-name">
              {!errors.firstName && (
                <Form.Label>First name {editable && <Required />}</Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.firstName?.type === 'required' && (
                  <p>First name is required.</p>
                )}
                {errors.firstName?.type === 'maxLength' && (
                  <p>First name is too long.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                name="firstName"
                ref={register({ required: true, maxLength: 50 })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={nullToEmptyString(account?.firstName)}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="last-name">
              {!errors.lastName && (
                <Form.Label>Last name {editable && <Required />}</Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.lastName?.type === 'required' && (
                  <p>Last name is required.</p>
                )}
                {errors.lastName?.type === 'maxLength' && (
                  <p>Last name is too long.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                name="lastName"
                ref={register({ required: true, maxLength: 50 })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={nullToEmptyString(account?.lastName)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} xs={12} controlId="display-name">
              {!errors.displayName && (
                <Form.Label>
                  Display name {isDealer && editable && <Required />}
                </Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.displayName?.type === 'required' && (
                  <p>Display name is required.</p>
                )}
                {errors.displayName?.type === 'maxLength' && (
                  <p>Display name is too long.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                name="displayName"
                ref={register({ required: isDealer, maxLength: 50 })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={nullToEmptyString(account?.displayName)}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} controlId="description">
              {!errors.description && (
                <Form.Label>
                  Description {isDealer && editable && <Required />}
                </Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.description?.type === 'required' && (
                  <p>Description is required.</p>
                )}
                {errors.description?.type === 'maxLength' && (
                  <p>Description is too long.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                className="form-textarea"
                as="textarea"
                rows={5}
                disabled={!editable}
                name="description"
                ref={register({ required: isDealer, maxLength: 250 })}
                readOnly={!editable}
                defaultValue={nullToEmptyString(account?.description)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} xs={12} md={6} controlId="phone-number">
              {!errors.contactDetailsPhoneNumber && (
                <Form.Label>
                  Phone number {isDealer && editable && <Required />}
                </Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.contactDetailsPhoneNumber?.type === 'required' && (
                  <p>Phone number is required.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                name="contactDetailsPhoneNumber"
                ref={register({ required: isDealer })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={nullToEmptyString(
                  account?.contactDetails?.phoneNumber
                )}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="web-link">
              <Form.Label>Website</Form.Label>
              <FormControl
                name="contactDetailsWebLink"
                ref={register}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={nullToEmptyString(
                  account?.contactDetails?.webLink
                )}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} xs={12} md={6} controlId="location-region">
              <Form.Label>
                Region {isDealer && editable && <Required />}
              </Form.Label>
              <FormControl className="form-select" as="select" disabled />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="location-city">
              <Form.Label>
                City {isDealer && editable && <Required />}
              </Form.Label>
              <FormControl className="form-select" as="select" disabled>
                <option>Choose...</option>
                <option>...</option>
              </FormControl>
            </Form.Group>
            <Form.Group as={Col} xs={12} controlId="street-address">
              {!errors.addressStreet && (
                <Form.Label>
                  Address {isDealer && editable && <Required />}
                </Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.addressStreet?.type === 'required' && (
                  <p>Address is required.</p>
                )}
                {errors.addressStreet?.type === 'maxLength' && (
                  <p>Address is too long.</p>
                )}
              </ErrorMessageContainer>
              <FormControl
                name="addressStreet"
                ref={register({ required: isDealer, maxLength: 50 })}
                readOnly={!editable}
                plaintext={!editable}
                defaultValue={nullToEmptyString(account?.address?.street)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            {!hasAccount && (
              <Form.Group as={Col} xs={12} controlId="account-type">
                {!errors.accountType && (
                  <Form.Label>
                    Account Type {editable && <Required />}
                  </Form.Label>
                )}
                <ErrorMessageContainer inline forLabel>
                  {errors.accountType?.type === 'required' && (
                    <p>Account Type is required.</p>
                  )}
                </ErrorMessageContainer>
                <FormControl
                  ref={register({ required: true })}
                  className="form-select"
                  as="select"
                  name="accountType"
                  defaultValue={accountType?.toUpperCase()}
                  onChange={(event) => setAccountType(event.target.value)}
                >
                  <option value="">Choose account type</option>
                  <option value="PRIVATE">Private Seller</option>
                  <option value="DEALER">Dealer</option>
                </FormControl>
              </Form.Group>
            )}
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
                <FormButton type="submit" variant="success" block>
                  Save
                </FormButton>
              </Form.Group>
            )}
            {editable && hasAccount && (
              <Form.Group as={Col} xs={6}>
                <FormButton
                  variant="light"
                  block
                  onClick={() => {
                    reset();
                    setEditable(false);
                  }}
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

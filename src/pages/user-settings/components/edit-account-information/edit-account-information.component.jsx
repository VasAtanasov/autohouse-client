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
import { nullToEmptyString, isEmpty, orElse } from '../../../../utils/helpers';
import { toast } from 'react-toastify';
import { Required } from './edit-account-information.styles';
import { Loader } from '../../../../components';
import { createUpdateAccountAsync } from '../../../../services/user/user.actions';

const DEALER = 'DEALER';

const INITIAL_STATE = {
  loading: false,
  editable: false,
  accountType: null,
  location: null,
};

const FETCH_PROVINCE_START = 'FETCH_PROVINCE_START';
const FETCH_PROVINCE_END = 'FETCH_PROVINCE_END';
const READ_ONLY = 'READ_ONLY';
const EDIT_FORM = 'EDIT_FORM';
const SAVE_UPDATE_ACCOUNT_START = 'SAVE_UPDATE_ACCOUNT_START';
const SAVE_UPDATE_ACCOUNT_SUCCESS = 'SAVE_UPDATE_ACCOUNT_SUCCESS';
const SAVE_UPDATE_ACCOUNT_FAILURE = 'SAVE_UPDATE_ACCOUNT_FAILURE';
const SELECT_ACCOUNT_TYPE = 'SELECT_ACCOUNT_TYPE';

const reducer = (state, action) => {
  switch (action.type) {
    case READ_ONLY:
      return {
        ...state,
        editable: false,
      };
    case EDIT_FORM:
      return {
        ...state,
        editable: true,
      };
    case FETCH_PROVINCE_START:
      return {
        ...state,
        fetchingProvince: true,
      };
    case SAVE_UPDATE_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case SAVE_UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        editable: false,
        accountType: action.payload,
      };
    case SAVE_UPDATE_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        editable: false,
      };
    case FETCH_PROVINCE_END:
      return {
        ...state,
        fetchingProvince: false,
        province: action.payload,
      };
    case SELECT_ACCOUNT_TYPE:
      return {
        ...state,
        accountType: action.payload,
      };
    default:
      return state;
  }
};

const formatLocation = (address) => {
  if (!address || isEmpty(address)) {
    return null;
  }
  return `${address?.locationCity} (${address?.locationCityRegion})`;
};

const EditAccountInformation = ({
  user,
  account,
  createUpdateAccountAsync,
}) => {
  const hasAccount = nullToEmptyString(user?.hasAccount);
  const [state, dispatch] = React.useReducer(reducer, {
    ...INITIAL_STATE,
    editable: !hasAccount,
    accountType: nullToEmptyString(account?.accountType?.toUpperCase()),
    location: formatLocation(account?.address),
  });
  const { loading, editable, accountType, location } = state;
  const isDealer = accountType === DEALER;
  console.log(location);

  const {
    register,
    errors,
    handleSubmit,
    clearError,
    reset,
    formState,
  } = useForm();

  const { dirty } = formState;

  React.useEffect(() => {
    clearError();
  }, [accountType, clearError]);

  const handleAddEditAccountInfo = async (data) => {
    if (!dirty) {
      dispatch({ type: READ_ONLY });
      return;
    }
    dispatch({ type: SAVE_UPDATE_ACCOUNT_START });
    if (!isEmpty(errors)) {
      toast.error('Something went wrong. Please try again.');
      return;
    }
    try {
      const response = await createUpdateAccountAsync({
        ...data,
        accountType,
      });
      dispatch({ type: SAVE_UPDATE_ACCOUNT_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: SAVE_UPDATE_ACCOUNT_FAILURE });
      toast.error('Something went wrong');
    }
  };

  const handleCancelClick = () => {
    reset();
    dispatch({ type: READ_ONLY });
  };

  const handleEditClick = () => {
    dispatch({ type: EDIT_FORM });
  };

  const handleSelectAccountType = (event) => {
    dispatch({ type: SELECT_ACCOUNT_TYPE, payload: event.target.value });
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
          {isDealer && (
            <Form.Row>
              <Form.Group as={Col} sm={9} controlId="location">
                <Form.Label>Location</Form.Label>
                <FormControl
                  readOnly
                  plaintext
                  defaultValue={orElse(location, 'Input Zip Code')}
                />
              </Form.Group>
              <Form.Group as={Col} sm={3} controlId="location-code">
                {!errors.addressLocationId && (
                  <Form.Label>
                    Zip Code {isDealer && editable && <Required />}
                  </Form.Label>
                )}
                <ErrorMessageContainer inline forLabel>
                  {errors.addressLocationId?.type === 'required' && (
                    <p> Zip Code is required.</p>
                  )}
                </ErrorMessageContainer>
                <FormControl
                  name="addressLocationPostalCode"
                  ref={register({ required: isDealer })}
                  readOnly={!editable}
                  plaintext={!editable}
                  defaultValue={nullToEmptyString(
                    account?.address?.locationPostalCode
                  )}
                />
              </Form.Group>
            </Form.Row>
          )}
          {isDealer && (
            <Form.Row>
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
          )}
          {!hasAccount && (
            <Form.Row>
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
                  onChange={handleSelectAccountType}
                >
                  <option value="">Choose account type</option>
                  <option value="PRIVATE">Private Seller</option>
                  <option value="DEALER">Dealer</option>
                </FormControl>
              </Form.Group>
            </Form.Row>
          )}
          <Form.Row>
            {!editable && (
              <Form.Group as={Col} xs={6}>
                <FormButton variant="info" block onClick={handleEditClick}>
                  Edit
                </FormButton>
              </Form.Group>
            )}
            {editable && (
              <Form.Group as={Col} xs={6}>
                <FormButton type="submit" variant="success" block>
                  {loading ? <Loader small white /> : 'Save Changes'}
                </FormButton>
              </Form.Group>
            )}
            {editable && hasAccount && (
              <Form.Group as={Col} xs={6}>
                <FormButton variant="light" block onClick={handleCancelClick}>
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

export default connect(mapStateToProps, {
  createUpdateAccountAsync,
})(EditAccountInformation);

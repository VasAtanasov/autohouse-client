import React from 'react';
import {
  AccountSettingsContainer,
  AccountSettingsTitle,
  SettingsMain,
  LoadingBar,
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
import { Loader } from '../../../../components';
import { createUpdateAccountAsync } from '../../../../services/user/user.actions';
import { fetchProvincesAsync } from '../../../../services/common/common.actions';
import { loadProvince } from '../../../../services/common/common.api';

const DEALER = 'DEALER';

const INITIAL_STATE = {
  loading: false,
  editable: false,
  accountType: null,
  province: null,
  fetchingProvince: false,
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

const fetchProvinceAsync = async (dispatch, provinceId) => {
  dispatch({ type: FETCH_PROVINCE_START });
  try {
    const res = await loadProvince(provinceId);
    console.log(res);
    dispatch({ type: FETCH_PROVINCE_END, payload: res.data.data });
  }
  catch (e) {
    dispatch({ type: FETCH_PROVINCE_END });
  }
};

const EditAccountInformation = ({
  user,
  account,
  createUpdateAccountAsync,
  provinces,
  fetchProvincesAsync,
}) => {
  const hasAccount = nullToEmptyString(user?.hasAccount);
  const [state, dispatch] = React.useReducer(reducer, {
    ...INITIAL_STATE,
    editable: !hasAccount,
    accountType: nullToEmptyString(account?.accountType?.toUpperCase()),
  });
  const { loading, editable, accountType, province, fetchingProvince } = state;
  const isDealer = accountType === DEALER;

  const {
    register,
    errors,
    handleSubmit,
    clearError,
    reset,
    formState,
    watch,
  } = useForm();

  const provinceId = watch(
    'locationProvinceId',
    account?.address?.locationProvinceId
  );
  const { dirty } = formState;
  console.log(provinceId);

  React.useEffect(() => {
    clearError();
  }, [accountType, clearError]);

  React.useEffect(() => {
    if (provinces.length === 0) {
      fetchProvincesAsync().catch(() => {
        toast.error('Page loading error, Please reload.');
      });
    }
  }, [provinces.length, fetchProvincesAsync]);

  React.useEffect(() => {
    (async () => {
      if (province == null) {
        await fetchProvinceAsync(dispatch, provinceId).catch(() => {
          toast.error('Page loading error, Please reload.');
        });
      }
    })();
  }, [provinceId, province]);

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

  const handleRegionSelect = (event) =>
    fetchProvinceAsync(dispatch, event.target.value);

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
              {!errors.locationProvinceId && (
                <Form.Label>
                  Region {isDealer && editable && <Required />}
                </Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.locationProvinceId?.type === 'required' && (
                  <p>Region is required.</p>
                )}
              </ErrorMessageContainer>
              {provinces.length === 0 ? (
                <LoadingBar />
              ) : (
                <FormControl
                  as="select"
                  className="form-select"
                  name="locationProvinceId"
                  disabled={!editable}
                  ref={register({ required: isDealer })}
                  defaultValue={account?.address?.locationProvinceId}
                  onChange={handleRegionSelect}
                >
                  <option value="">Select Region</option>
                  {(provinces || []).map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </FormControl>
              )}
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="location-city">
              {!errors.locationCityId && (
                <Form.Label>
                  City {isDealer && editable && <Required />}
                </Form.Label>
              )}
              <ErrorMessageContainer inline forLabel>
                {errors.locationCityId?.type === 'required' && (
                  <p>City is required.</p>
                )}
              </ErrorMessageContainer>
              {fetchingProvince ? (
                <LoadingBar />
              ) : (
                <FormControl
                  name="locationCityId"
                  as="select"
                  className="form-select"
                  disabled={!editable}
                  ref={register({ required: isDealer })}
                  defaultValue={account?.address?.locationId}
                >
                  <option value="">Select City</option>
                  {(province?.locations || []).map(({ city, id }) => (
                    <option key={id} value={id}>
                      {city}
                    </option>
                  ))}
                </FormControl>
              )}
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

const mapStateToProps = ({ user, provinces }) => ({
  user: user.details,
  account: user.account,
  provinces,
});

export default connect(mapStateToProps, {
  createUpdateAccountAsync,
  fetchProvincesAsync,
})(EditAccountInformation);

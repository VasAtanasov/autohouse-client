import React from 'react';
import {
  CreateUpdateOfferWrapper,
  Header,
  MainContainer,
  SubHeader,
  Required,
  Section,
  SectionHeadline,
  SectionOptions,
  PriceTag,
  DescriptionArea,
} from './create-update-offer.styles';
import {
  AccountCheck,
  FormButton,
  FormControl,
  Loader,
} from '../../components';
import Col from 'react-bootstrap/Col';
import { AddIcon, Edit } from './assets/icons';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { loadAppState } from '../../services/common/common.api';
import {
  createOffer,
  updateOffer,
  userOffersCount,
} from '../../services/offer/offer.api';
import MakerModelSelect from './components/maker-model/maker-model.component';
import { toast } from 'react-toastify';
import { CheckBoxContainer } from '../../components';
import ImageUpload from './components/image-upload/image-upload.component';
import ErrorsContainer from './components/errors-container/errors-container.component';
import { resetOfferObject } from '../../services/offer/offer.actions';
import { useHistory } from 'react-router-dom';
import userRoutes from '../../routes/user';

const ASYNC_CALL_START = 'ASYNC_CALL_START';
const ASYNC_CALL_SUCCESS = 'ASYNC_CALL_SUCCESS';
const ASYNC_CALL_FAILURE = 'ASYNC_CALL_FAILURE';
const SET_OPTIONS = 'SET_OPTIONS';
const SET_CHECKED_VALUES = 'SET_CHECKED_VALUES';
const SET_USER_OFFERS_COUNT = 'SET_USER_OFFERS_COUNT';

const setOptionsSuccess = (options) => {
  return { type: SET_OPTIONS, payload: options };
};

const setCheckedValues = (newValues) => {
  return { type: SET_CHECKED_VALUES, payload: newValues };
};

const asyncCallStart = () => {
  return { type: ASYNC_CALL_START };
};

const asyncCallSuccess = () => {
  return { type: ASYNC_CALL_SUCCESS };
};

const asyncCallFailure = () => {
  return { type: ASYNC_CALL_FAILURE };
};

const setUserOffersCount = (count) => {
  return { type: SET_USER_OFFERS_COUNT, payload: count };
};

const INITIAL_STATE = {
  options: {},
  checkedValues: [],
  loading: false,
  offersCount: -1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ASYNC_CALL_START:
      return {
        ...state,
        loading: true,
      };
    case SET_OPTIONS:
      return {
        ...state,
        options: action.payload,
      };
    case SET_CHECKED_VALUES:
      return {
        ...state,
        checkedValues: action.payload,
      };
    case ASYNC_CALL_SUCCESS:
    case ASYNC_CALL_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SET_USER_OFFERS_COUNT:
      return {
        ...state,
        offersCount: action.payload,
      };
    default:
      return state;
  }
};

const CreateUpdateOffer = ({
  offerObject,
  resetOfferObject,
  accountId,
  maxOffersCount,
}) => {
  const { register, handleSubmit, errors, control } = useForm();
  const [state, dispatch] = React.useReducer(reducer, {
    ...INITIAL_STATE,
    checkedValues: offerObject?.id === null ? [] : offerObject.vehicleFeatures,
  });
  let history = useHistory();

  const { options, checkedValues, loading, offersCount } = state;

  React.useEffect(() => {
    (async () => {
      try {
        const response = await loadAppState();
        dispatch(setOptionsSuccess(response.data.data.metadata));
      } catch (error) {
        toast.error('Failed to load data. Reload page.');
      }
    })();
    return () => resetOfferObject();
  }, [resetOfferObject]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await userOffersCount(accountId);
        dispatch(setUserOffersCount(response.data));
      } catch (error) {
        toast.error('Failed to set user offers count.');
      }
    })();
  }, [accountId]);

  const handleSelect = (checkedValue) => {
    const newValues = checkedValues?.includes(checkedValue)
      ? checkedValues?.filter((name) => name !== checkedValue)
      : [...(checkedValues ?? []), checkedValue];
    dispatch(setCheckedValues(newValues));
    return newValues;
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (offerObject?.id === null) {
      try {
        dispatch(asyncCallStart());
        await createOffer(data);
        dispatch(asyncCallSuccess());
        toast.success('Offer created successfully.');
        history.push(userRoutes.myInventory.path);
      } catch (err) {
        dispatch(asyncCallFailure());
        toast.error('Creating offer failed.');
      }
    } else {
      try {
        dispatch(asyncCallStart());
        await updateOffer(data, offerObject.id);
        dispatch(asyncCallSuccess());
        toast.success('Offer updated successfully.');
        history.push(userRoutes.myInventory.path);
      } catch (err) {
        dispatch(asyncCallFailure());
        toast.error('Offer updated failed.');
      }
    }
  };

  return (
    <CreateUpdateOfferWrapper>
      <Header>
        {offerObject?.id ? (
          <React.Fragment>
            <Edit />
            <span className="header-title">Edit options</span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <AddIcon />
            <span className="header-title">Create options</span>
          </React.Fragment>
        )}
      </Header>
      <SubHeader>
        <h6>
          You are currently {offerObject?.id ? 'editing' : 'building'} a Free
          Offer.
        </h6>
        <h6>
          <strong>
            Items marked with <Required /> are required fields.
          </strong>
        </h6>
        {!offerObject?.id && (
          <h6>
            Available slots:{' '}
            {offersCount > -1
              ? `${maxOffersCount - offersCount}`
              : 'fetching...'}
          </h6>
        )}
      </SubHeader>
      <MainContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Section>
            <SectionHeadline>
              <ErrorsContainer errors={errors} />
              <div className="title">CAR DETAILS</div>
            </SectionHeadline>
            <SectionOptions as={Row} className="maker-model-select">
              <MakerModelSelect offerObject={offerObject} register={register} />
            </SectionOptions>
            <Form.Row>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="bodyStyle"
              >
                <Form.Label>
                  <i className="flaticon-sedan-car-model"></i>
                  <span className="car-options-label-text">
                    Body Style <Required />
                  </span>
                </Form.Label>
                <Controller
                  name="bodyStyle"
                  control={control}
                  defaultValue={offerObject?.vehicleBodyStyle}
                  render={({ onChange, onBlur, value }) => (
                    <FormControl
                      className="car-option"
                      name="bodyStyle"
                      as="select"
                      ref={register({ required: 'Body Style is required!' })}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      <option value="">Select Body Style</option>
                      {Object.entries(options?.bodyStyle || {}).map(
                        ([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        )
                      )}
                    </FormControl>
                  )}
                />
              </Form.Group>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="fuelType"
              >
                <Form.Label>
                  <i className="flaticon-gas-station"></i>
                  <span className="car-options-label-text">
                    Fuel Type <Required />
                  </span>
                </Form.Label>
                <Controller
                  name="fuelType"
                  control={control}
                  defaultValue={offerObject?.vehicleFuelType}
                  render={({ onChange, onBlur, value }) => (
                    <FormControl
                      className="car-option"
                      name="fuelType"
                      as="select"
                      ref={register({ required: 'Fuel type is required!' })}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      <option value="">Select Fuel Type</option>
                      {Object.entries(options?.fuelType || {}).map(
                        ([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        )
                      )}
                    </FormControl>
                  )}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="transmission"
              >
                <Form.Label>
                  <i className="flaticon-shifter"></i>
                  <span className="car-options-label-text">
                    Transmission <Required />
                  </span>
                </Form.Label>
                <Controller
                  name="transmission"
                  control={control}
                  defaultValue={offerObject?.vehicleTransmission}
                  render={({ onChange, onBlur, value }) => (
                    <FormControl
                      className="car-option"
                      name="transmission"
                      as="select"
                      ref={register({
                        required: 'Transmission is required!',
                      })}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      <option value="">Select Transmission</option>
                      {Object.entries(options?.transmission || {}).map(
                        ([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        )
                      )}
                    </FormControl>
                  )}
                />
              </Form.Group>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="drive"
              >
                <Form.Label>
                  <i className="flaticon-car-steering-wheel"></i>
                  <span className="car-options-label-text">
                    Drive <Required />
                  </span>
                </Form.Label>
                <Controller
                  name="drive"
                  control={control}
                  defaultValue={offerObject?.vehicleDrive}
                  render={({ onChange, onBlur, value }) => (
                    <FormControl
                      className="car-option"
                      name="drive"
                      as="select"
                      ref={register({ required: 'Drive is required!' })}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      <option value="">Select Drive</option>
                      {Object.entries(options?.drive || {}).map(
                        ([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        )
                      )}
                    </FormControl>
                  )}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="state"
              >
                <Form.Label>
                  <i className="flaticon-automobile-salesman"></i>
                  <span className="car-options-label-text">
                    Condition <Required />
                  </span>
                </Form.Label>
                <Controller
                  name="state"
                  control={control}
                  defaultValue={offerObject?.vehicleState}
                  render={({ onChange, onBlur, value }) => (
                    <FormControl
                      className="car-option"
                      name="state"
                      as="select"
                      ref={register({ required: 'Condition is required!' })}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      <option value="">Select Condition</option>
                      {Object.entries(options?.state || {}).map(
                        ([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        )
                      )}
                    </FormControl>
                  )}
                />
              </Form.Group>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="color"
              >
                <Form.Label>
                  <i className="flaticon-contrast"></i>
                  <span className="car-options-label-text">
                    Color <Required />
                  </span>
                </Form.Label>
                <Controller
                  name="color"
                  control={control}
                  defaultValue={offerObject?.vehicleColor}
                  render={({ onChange, onBlur, value }) => (
                    <FormControl
                      className="car-option"
                      name="color"
                      as="select"
                      ref={register({ required: 'Color is required!' })}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    >
                      <option value="">Select Color</option>
                      {Object.entries(options?.color || {}).map(
                        ([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        )
                      )}
                    </FormControl>
                  )}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="mileage"
              >
                <Form.Label>
                  <i className="flaticon-road"></i>
                  <span className="car-options-label-text">
                    Mileage <Required />
                  </span>
                </Form.Label>
                <FormControl
                  className="car-option"
                  type="number"
                  name="mileage"
                  min="1"
                  step="1"
                  pattern="\d+"
                  placeholder="Enter Mileage"
                  ref={register({
                    required:
                      'Mileage is required and must be positive number!',
                  })}
                  defaultValue={offerObject?.vehicleMileage}
                />
              </Form.Group>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="doors"
              >
                <Form.Label>
                  <i className="flaticon-car-door"></i>
                  <span className="car-options-label-text">
                    Doors <Required />
                  </span>
                </Form.Label>
                <FormControl
                  className="car-option"
                  type="number"
                  name="doors"
                  min="1"
                  max="7"
                  step="1"
                  pattern="\d+"
                  placeholder="Enter Doors Count"
                  ref={register({
                    required: 'Doors is required and must be positive number!',
                  })}
                  defaultValue={offerObject?.vehicleDoors}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="hasAccident"
              >
                <Form.Label>
                  <i className="flaticon-car-accident"></i>
                  <span className="car-options-label-text">
                    Has Accident <Required />
                  </span>
                </Form.Label>
                <FormControl
                  className="car-option"
                  name="hasAccident"
                  as="select"
                  ref={register({ required: 'Has accident is required!' })}
                  defaultValue={offerObject?.vehicleHasAccident}
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </FormControl>
              </Form.Group>
              <Form.Group
                className="car-details-options"
                as={Col}
                lg={6}
                xs={12}
                controlId="zipCode"
              >
                <Form.Label>
                  <i className="flaticon-maps-and-flags"></i>
                  <span className="car-options-label-text">
                    Zip Code <Required />
                  </span>
                </Form.Label>
                <FormControl
                  className="car-option"
                  type="number"
                  name="zipCode"
                  step="1"
                  pattern="\d+"
                  placeholder="Enter Zip Code"
                  ref={register({ required: 'Valid Zip Code is required!' })}
                  defaultValue={offerObject?.locationPostalCode}
                />
              </Form.Group>
            </Form.Row>
          </Section>
          <Section>
            <SectionHeadline>
              <div className="title">SELECT YOUR CAR FEATURES</div>
            </SectionHeadline>
            <Row noGutters>
              <Controller
                name="features"
                control={control}
                defaultValue={offerObject?.vehicleFeatures}
                render={({ onChange: onCheckChange }) =>
                  Object.entries(options?.feature || {}).map(([key, value]) => (
                    <Col lg={4} sm={6} key={key}>
                      <CheckBoxContainer>
                        <input
                          name="features"
                          type="checkbox"
                          id={key}
                          value={key}
                          checked={checkedValues.includes(key)}
                          onChange={() => onCheckChange(handleSelect(key))}
                          ref={register({
                            required: 'At least one feature is required!',
                          })}
                        />
                        <label htmlFor={key}>{value}</label>
                      </CheckBoxContainer>
                    </Col>
                  ))
                }
              />
            </Row>
          </Section>
          <Section>
            <SectionHeadline>
              <div className="title">SET YOUR ASKING PRICE</div>
            </SectionHeadline>
            <Row noGutters>
              <Col lg={4}>
                <Form.Group>
                  <label htmlFor="price" className="label">
                    <PriceTag className="flaticon-coin pl-1 pr-1"></PriceTag>
                    <span>
                      Price <Required />
                    </span>
                  </label>
                  <FormControl
                    type="number"
                    id="price"
                    name="price"
                    min="1"
                    step="1"
                    pattern="\d+"
                    placeholder="Enter Price"
                    ref={register({
                      required:
                        'Price is required and must be positive number!',
                    })}
                    defaultValue={offerObject?.price}
                  />
                </Form.Group>
              </Col>
              <Col lg={8}>
                <p className="pl-lg-3 mt-3 mt-lg-0 text-justify">
                  Determine a competitive price by comparing your vehicle's
                  information and mileage to similar vehicles for sale by
                  dealers and private sellers in your area. Then consider
                  pricing your vehicle within range. Be sure to provide Seller's
                  Comments and photos to highlight the best features of your
                  vehicle, especially if your asking price is above average.
                </p>
              </Col>
            </Row>
          </Section>
          <Section>
            <SectionHeadline>
              <div className="title">ENTER DESCRIPTION</div>
            </SectionHeadline>
            <DescriptionArea
              placeholder="Enter vehicle description"
              name="description"
              ref={register({ required: 'Description is required!' })}
              defaultValue={offerObject?.description}
            ></DescriptionArea>
          </Section>
          {offerObject.id === null && (
            <Section>
              <SectionHeadline>
                <div className="title">Upload Photos</div>
              </SectionHeadline>
              <div>
                <h6>RECOMMENDATION & GUIDES</h6>
                <p>
                  Recommended Image Resolution: 1024 x 768 px or higher. Maximum
                  size of photo is 10MB.
                </p>
              </div>
              <ImageUpload register={register} />
            </Section>
          )}
          <Section>
            <SectionHeadline>
              <div className="title">Contact Details</div>
            </SectionHeadline>
            <Form.Group>
              <label htmlFor="phoneNumber" className="label">
                <span>
                  Phone Number <Required />
                </span>
              </label>
              <FormControl
                type="tel"
                id="phoneNumber"
                name="contactDetailsPhoneNumber"
                placeholder="Enter Phone Number"
                ref={register({ required: 'Valid Phone Number is required!' })}
                defaultValue={offerObject?.contactDetailsPhoneNumber}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="webLink" className="label">
                <span>Web Link</span>
              </label>
              <FormControl
                type="text"
                id="webLink"
                name="contactDetailsWebLink"
                placeholder="Enter Web Link"
                ref={register}
                defaultValue={offerObject?.contactDetailsWebLink}
              />
            </Form.Group>
          </Section>

          <FormButton
            variant={offerObject?.id ? 'success' : 'primary'}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Loader small white />
            ) : offerObject?.id ? (
              'Update Offer'
            ) : (
              'Create Offer'
            )}
          </FormButton>
        </Form>
      </MainContainer>
      <AccountCheck pathToRedirect="/user/settings/edit-personal-info" />
    </CreateUpdateOfferWrapper>
  );
};

const mapStateToProps = ({ user, offer }) => ({
  offerObject: offer.editCreate,
  accountId: user.account.id,
  maxOffersCount: user.account.maxOffersCount,
});

export default connect(mapStateToProps, { resetOfferObject })(
  CreateUpdateOffer
);

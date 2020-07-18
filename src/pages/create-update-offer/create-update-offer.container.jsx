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
import { AccountCheck, FormButton, FormControl } from '../../components';
import Col from 'react-bootstrap/Col';
import { AddIcon } from './assets/icons';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { loadAppState } from '../../services/common/common.api';
import { createOffer } from '../../services/offer/offer.api';
import MakerModelSelect from './components/maker-model/maker-model.component';
import { toast } from 'react-toastify';
import { CheckBoxContainer } from '../../components';
import ImageUpload from './components/image-upload/image-upload.component';

// TODO add validation of data
const CreateUpdateOffer = ({ makers }) => {
  const { register, handleSubmit } = useForm();
  const [options, setOptions] = React.useState();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await loadAppState();
        setOptions(response.data.data.metadata);
      } catch (error) {
        toast.error('Failed to load data. Reload page.');
      }
    })();
  }, []);

  const onSubmit = async (data) => {
    await createOffer(data);
  };

  return (
    <CreateUpdateOfferWrapper>
      <Header>
        <AddIcon />
        <span className="header-title">Create options</span>
      </Header>
      <SubHeader>
        <h6>You are currently building a Free Offer.</h6>
        <h6>
          <strong>
            Items marked with <Required /> are required fields.
          </strong>
        </h6>
      </SubHeader>
      <MainContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Section>
            <SectionHeadline>
              <div className="title">CAR DETAILS</div>
            </SectionHeadline>
            <SectionOptions as={Row} className="maker-model-select">
              <MakerModelSelect register={register} />
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
                <FormControl
                  className="car-option"
                  name="bodyStyle"
                  as="select"
                  ref={register({ required: true })}
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
                <FormControl
                  className="car-option"
                  name="fuelType"
                  as="select"
                  ref={register({ required: true })}
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
                <FormControl
                  className="car-option"
                  name="transmission"
                  as="select"
                  ref={register({ required: true })}
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
                <FormControl
                  className="car-option"
                  name="drive"
                  as="select"
                  ref={register({ required: true })}
                >
                  <option value="">Select Drive</option>
                  {Object.entries(options?.drive || {}).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </FormControl>
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
                <FormControl
                  className="car-option"
                  name="state"
                  as="select"
                  ref={register({ required: true })}
                >
                  <option value="">Select Condition</option>
                  {Object.entries(options?.state || {}).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </FormControl>
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
                <FormControl
                  className="car-option"
                  name="color"
                  as="select"
                  ref={register({ required: true })}
                >
                  <option value="">Select Color</option>
                  {Object.entries(options?.color || {}).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </FormControl>
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
                  ref={register({ required: true })}
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
                  ref={register({ required: true })}
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
                  ref={register({ required: true })}
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
                  ref={register({ required: true })}
                />
              </Form.Group>
            </Form.Row>
          </Section>
          <Section>
            <SectionHeadline>
              <div className="title">SELECT YOUR CAR FEATURES</div>
            </SectionHeadline>
            <Row noGutters>
              {Object.entries(options?.feature || {}).map(([key, value]) => (
                <Col lg={4} sm={6} key={key}>
                  <CheckBoxContainer>
                    <input
                      name="features"
                      type="checkbox"
                      id={key}
                      ref={register}
                      value={key}
                    />
                    <label htmlFor={key}>{value}</label>
                  </CheckBoxContainer>
                </Col>
              ))}
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
                    ref={register({ required: true })}
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
              ref={register({ required: true })}
            ></DescriptionArea>
          </Section>
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
                type="number"
                id="phoneNumber"
                name="contactDetailsPhoneNumber"
                min="1"
                step="1"
                pattern="\d+"
                placeholder="Enter Phone Number"
                ref={register({ required: true })}
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
              />
            </Form.Group>
          </Section>

          <FormButton type="submit">Create Offer</FormButton>
        </Form>
      </MainContainer>
      <AccountCheck pathToRedirect="/user/settings/edit-personal-info" />
    </CreateUpdateOfferWrapper>
  );
};

const mapStateToProps = ({ makers }) => ({ makers: makers.makers });

export default connect(mapStateToProps)(CreateUpdateOffer);

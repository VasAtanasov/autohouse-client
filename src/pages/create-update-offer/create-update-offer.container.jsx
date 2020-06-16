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
} from './create-update-offer.styles';
import {
  AccountCheck,
  FormButton,
  FormControl,
  ErrorMessageContainer,
} from '../../components';
import Col from 'react-bootstrap/Col';
import { AddIcon } from './assets/icons';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { loadAppState } from '../../services/common/common.api';
import MakerModelSelect from './components/maker-model/maker-model.component';
import { toast } from 'react-toastify';

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

  console.log(options);

  const onSubmit = (data) => {
    console.log(data);
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
          </Section>
          <button>Create</button>
        </Form>
      </MainContainer>
      <AccountCheck pathToRedirect="/user/settings/edit-personal-info" />
    </CreateUpdateOfferWrapper>
  );
};

const mapStateToProps = ({ makers }) => ({ makers: makers.makers });

export default connect(mapStateToProps)(CreateUpdateOffer);

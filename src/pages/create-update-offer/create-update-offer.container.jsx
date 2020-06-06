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
import { AccountCheck, SelectWrapper } from '../../components';
import { AddIcon } from './assets/icons';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const MakerModelSelect = connect(({ makers }) => ({ makers: makers.makers }))(
  ({ register, makers }) => {
    const [selectedMaker, setSelectedMaker] = React.useState();
    const [selectedModel, setSelectedModel] = React.useState();

    return (
      <React.Fragment>
        <Form.Group controlId="maker-name-select">
          <Form.Label>
            Make <Required />
          </Form.Label>
          <SelectWrapper>
            <Form.Control
              as="select"
              name="makerName"
              ref={register}
              value={selectedMaker}
              onChange={(event) => setSelectedMaker(event.target.value)}
            >
              <option value="">Any maker</option>
              {Object.keys(makers)
                .sort()
                .map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
            </Form.Control>
          </SelectWrapper>
        </Form.Group>
        <Form.Group controlId="model-name-select">
          <Form.Label>
            Model <Required />
          </Form.Label>
          <SelectWrapper>
            <Form.Control
              as="select"
              name="modelName"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
              ref={register}
              disabled={selectedMaker ? false : true}
            >
              <option value="">Any model</option>
              {selectedMaker &&
                makers[selectedMaker].models
                  .map((obj) => obj.name)
                  .sort()
                  .map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
            </Form.Control>
          </SelectWrapper>
        </Form.Group>
      </React.Fragment>
    );
  }
);

const CreateUpdateOffer = () => {
  const { register, handleSubmit, reset } = useForm();
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
        <Form>
          <Section>
            <SectionHeadline>
              <div className="title">CAR DETAILS</div>
            </SectionHeadline>
            <SectionOptions className="maker-model-select">
              <MakerModelSelect register={register} />
            </SectionOptions>
          </Section>
        </Form>
      </MainContainer>
      <AccountCheck pathToRedirect="/user/settings/edit-personal-info" />
    </CreateUpdateOfferWrapper>
  );
};

export default CreateUpdateOffer;

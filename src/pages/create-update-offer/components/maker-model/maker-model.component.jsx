import React from 'react';
import { Required } from '../../create-update-offer.styles';
import { SelectWrapper } from '../../../../components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { loadTrims } from '../../../../services/common/common.api';

const SELECT_MAKER = 'SELECT_MAKER';
const SELECT_MODEL = 'SELECT_MODEL';
const SELECT_YEAR = 'SELECT_YEAR';
const SELECT_TRIM = 'SELECT_TRIM';
const LOAD_DATA_FOR_EDIT = 'LOAD_DATA_FOR_EDIT';

const INITIAL_STATE = {
  makerName: '',
  modelName: '',
  year: '',
  trim: '',
};

const makerModelReducer = (state, action) => {
  switch (action.type) {
    case SELECT_MAKER:
      return {
        ...state,
        ...INITIAL_STATE,
        makerName: action.payload,
      };
    case SELECT_MODEL:
      return {
        ...state,
        modelName: action.payload,
        trim: '',
        year: '',
      };
    case SELECT_YEAR:
      return {
        ...state,
        year: Number(action.payload),
        trim: '',
      };
    case SELECT_TRIM:
      return {
        ...state,
        trim: action.payload,
      };
    case LOAD_DATA_FOR_EDIT:
      return {
        ...state,
        makerName: action.payload.vehicleMakerName,
        modelName: action.payload.vehicleModelName,
        year: action.payload.vehicleYear,
        trim: action.payload.vehicleTrim,
      };
    default:
      return state;
  }
};

const MakerModelSelect = ({ offerObject, register, makers }) => {
  const [state, dispatch] = React.useReducer(makerModelReducer, INITIAL_STATE);
  const { makerName, modelName, trim, year } = state;
  const [trims, setTrims] = React.useState([]);

  React.useEffect(() => {
    if (offerObject?.id !== null) {
      dispatch({ type: LOAD_DATA_FOR_EDIT, payload: { ...offerObject } });
    }
  }, [offerObject]);

  React.useEffect(() => {
    (async () => {
      if (makerName && modelName) {
        try {
          const response = await loadTrims(makerName, modelName);
          setTrims(response.data.data.model.trims);
        } catch (err) {}
      }
    })();
  }, [makerName, modelName]);

  return (
    <React.Fragment>
      <Form.Group as={Col} lg={3} controlId="maker-name-select">
        <Form.Label>
          Make <Required />
        </Form.Label>
        <SelectWrapper>
          <Form.Control
            as="select"
            name="makerName"
            ref={register({ required: 'Maker is required!' })}
            value={makerName}
            onChange={(event) =>
              dispatch({ type: SELECT_MAKER, payload: event.target.value })
            }
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
      <Form.Group as={Col} lg={3} controlId="model-name-select">
        <Form.Label>
          Model <Required />
        </Form.Label>
        <SelectWrapper>
          <Form.Control
            as="select"
            name="modelName"
            value={modelName}
            onChange={(event) =>
              dispatch({ type: SELECT_MODEL, payload: event.target.value })
            }
            ref={register({ required: 'Model is required!' })}
            disabled={makerName ? false : true}
          >
            <option value="">Any model</option>
            {makerName &&
              makers[makerName]?.models
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
      <Form.Group as={Col} lg={3} controlId="model-year-select">
        <Form.Label>
          Year <Required />
        </Form.Label>
        <SelectWrapper>
          <Form.Control
            as="select"
            name="year"
            value={year}
            onChange={(event) =>
              dispatch({ type: SELECT_YEAR, payload: event.target.value })
            }
            ref={register({ required: 'Year of model is required!' })}
            disabled={modelName ? false : true}
          >
            <option value="">Select Year</option>
            {modelName &&
              (trims.length
                ? [...new Set(trims.map((obj) => obj.year).sort())]
                : Array(new Date().getFullYear() - 1900 + 1)
                    .fill()
                    .map((_, idx) => 1900 + idx)
              ).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
          </Form.Control>
        </SelectWrapper>
      </Form.Group>
      <Form.Group as={Col} lg={3} controlId="model-trim-select">
        <Form.Label>Trim</Form.Label>
        <SelectWrapper>
          <Form.Control
            as="select"
            name="trim"
            value={trim}
            onChange={(event) =>
              dispatch({ type: SELECT_TRIM, payload: event.target.value })
            }
            ref={register}
            disabled={year && trims.length ? false : true}
          >
            <option value="">Select Trim</option>
            {year &&
              trims
                .filter((trim) => year === trim.year)
                .map((obj) => obj.trim)
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
};

export default connect(({ makers }) => ({ makers: makers.makers }))(
  MakerModelSelect
);

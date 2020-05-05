import React from 'react';
import {
  ScrollListContainer,
  OuterContainer,
  StyledModal,
  SearchButton,
  FilterContainer,
  BackArrowButton,
} from './quick-search.styles';
import Modal from 'react-bootstrap/Modal';

const MakerList = ({ makers, selectMaker, filter }) =>
  Object.keys(makers)
    .sort((a, b) => a.localeCompare(b))
    .filter((makerName) =>
      makerName.toLowerCase().includes(filter.toLowerCase())
    )
    .map((makerName) => (
      <li
        key={`${makers[makerName].id}_${makers[makerName].name}`}
        data-id={makers[makerName].id}
        data-maker={makers[makerName].name}
        onClick={() => selectMaker(makerName)}
      >
        {makers[makerName].name}
      </li>
    ));

const ModelsList = ({ models, selectModel, filter }) =>
  models
    .filter((modelObj) =>
      modelObj.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((modelObj) => (
      <li
        key={`${modelObj.id}_${modelObj.name}`}
        data-model-id={modelObj.id}
        onClick={() => selectModel(modelObj.name)}
      >
        {modelObj.name}
      </li>
    ));

const initialState = {
  visible: false,
  maker: null,
  model: null,
  filter: '',
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return Object.assign({}, initialState);
    case 'show':
      return {
        ...state,
        visible: true,
      };
    case 'selectMaker':
      return {
        ...state,
        maker: action.data,
        filter: '',
      };
    case 'selectModel':
      return {
        ...state,
        model: action.data,
      };
    case 'backToMakers':
      return {
        ...state,
        maker: '',
        filter: '',
      };
    case 'search':
      return {
        ...state,
        filter: action.data,
      };
    default:
      return state;
  }
};

const MakerModelModal = ({ makers }) => {
  const [state, dispatch] = React.useReducer(
    modalReducer,
    Object.assign({}, initialState)
  );
  const { visible, maker, model, filter } = state;
  model && console.log(model);
  return (
    <React.Fragment>
      <SearchButton onClick={() => dispatch({ type: 'show' })}>
        {'Maker & Model'}
      </SearchButton>
      <StyledModal
        show={visible}
        centered
        onHide={() => dispatch({ type: 'reset' })}
      >
        <Modal.Header closeButton>
          <BackArrowButton
            className={maker ? '' : 'invisible'}
            onClick={() => dispatch({ type: 'backToMakers' })}
          />
          <Modal.Title>{`Select ${!maker ? 'Maker' : 'Model'}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OuterContainer>
            <ScrollListContainer>
              <ul>
                <FilterContainer>
                  <div className="input-container">
                    <div className="search-icon"></div>
                    <input
                      type="text"
                      value={filter}
                      onChange={(e) =>
                        dispatch({ type: 'search', data: e.target.value })
                      }
                      placeholder="Search for a make"
                    />
                  </div>
                </FilterContainer>
                {!maker && (
                  <MakerList
                    makers={makers}
                    selectMaker={(makerName) =>
                      dispatch({ type: 'selectMaker', data: makerName })
                    }
                    filter={filter}
                  />
                )}
                {maker && (
                  <ModelsList
                    models={makers[maker].models}
                    selectModel={(modelName) =>
                      dispatch({ type: 'selectModel', data: modelName })
                    }
                    filter={filter}
                  />
                )}
              </ul>
            </ScrollListContainer>
          </OuterContainer>
        </Modal.Body>
      </StyledModal>
    </React.Fragment>
  );
};

export default MakerModelModal;

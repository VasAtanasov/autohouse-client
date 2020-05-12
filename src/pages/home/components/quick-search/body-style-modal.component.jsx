import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { createStructuredSelector } from 'reselect';
import { SearchButton, StyledModal } from './quick-search.styles';
import {
  BodyStyleList,
  BodyStyleButton,
  BodyStyleIcon,
  BodyStyleLabel,
} from './quick-search.styles';
import { selectBodyStyles } from '../../../../services/common/common.selectors';

const pathToImages = '/images/body-styles/';
const carImageSuffix = '-angled';
const extensionJpg = '.jpg';

const BodyStyleModal = ({ bodyStyles, handleSearch }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <SearchButton onClick={() => setVisible(true)}>
        {'Body Style'}
      </SearchButton>
      <StyledModal show={visible} onHide={() => setVisible(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{'Body Style'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BodyStyleList>
            {bodyStyles.map((obj, idx) => (
              <li key={`${idx}_${obj.name}`}>
                <BodyStyleButton
                  onClick={() => {
                    const value =
                      obj.key === 'state'
                        ? [obj.bodyStyle.toUpperCase()]
                        : obj.bodyStyle.toUpperCase();
                    handleSearch({ [obj.key]: value });
                  }}
                  bodyType={obj.name}
                  hoverImage={`${pathToImages}${obj.bodyStyle}${carImageSuffix}${extensionJpg}`}
                >
                  <BodyStyleIcon
                    mainImage={`${pathToImages}${obj.bodyStyle}${extensionJpg}`}
                  />
                  <BodyStyleLabel>{obj.name}</BodyStyleLabel>
                </BodyStyleButton>
              </li>
            ))}
          </BodyStyleList>
        </Modal.Body>
      </StyledModal>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  bodyStyles: selectBodyStyles,
});

export default connect(mapStateToProps)(BodyStyleModal);

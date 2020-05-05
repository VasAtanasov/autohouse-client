import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { SearchButton, StyledModal } from './quick-search.styles';
import {
  BodyStyleList,
  BodyStyleButton,
  BodyStyleIcon,
  BodyStyleLabel,
} from './quick-search.styles';

const pathToImages = '/images/body-styles/';
const carImageSuffix = '-angled';
const extensionJpg = '.jpg';

const BodyStyleModal = ({ bodyStyles }) => {
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

export default BodyStyleModal;

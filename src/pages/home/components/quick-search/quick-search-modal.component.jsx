import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { SearchButton, StyledModal } from './quick-search.styles';

const QuickSearchModal = ({ modalTitle, children }) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <React.Fragment>
            <SearchButton onClick={() => setVisible(true)}>
                {modalTitle}
            </SearchButton>
            <StyledModal
                show={visible}
                onHide={() => setVisible(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </StyledModal>
        </React.Fragment>
    );
};

export default QuickSearchModal;

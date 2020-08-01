import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Loader } from '../../../components';

const ConfirmDeleteModal = ({
  handleDeleteClick,
  offerTitle,
  isDeleteInProgress,
  ...props
}) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete {offerTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Warning!</h4>
        <p>
          After deleting this offer all information will be lost. Please confirm
          your intention.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleDeleteClick}
          variant="danger"
          className="mr-a"
          disabled={isDeleteInProgress}
        >
          {isDeleteInProgress ? <Loader small white /> : 'Delete'}
        </Button>
        <Button disabled={isDeleteInProgress} onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDeleteModal;

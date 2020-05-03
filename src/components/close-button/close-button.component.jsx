import React from 'react';
import { CloseButton } from './close-button.styles';

export default ({ handleClose }) => (
    <CloseButton onClick={() => handleClose()} />
);

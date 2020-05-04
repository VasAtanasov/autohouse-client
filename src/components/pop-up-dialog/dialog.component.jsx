import React from 'react';
import {
    DialogContainer,
    Main,
    Dialog,
    Overlay,
    ContentWrapper,
} from './dialog.styles';
import PropTypes from 'prop-types';
import CloseButton from '../close-button/close-button.component';

const PopUpDialog = React.forwardRef(
    ({ title, children, handleClose }, ref) => (
        <DialogContainer>
            <Overlay />
            <Main>
                <Dialog ref={ref}>
                    <CloseButton handleClose={handleClose} />
                    <ContentWrapper>
                        <div className="header">{title}</div>
                        <div className="body">{children}</div>
                    </ContentWrapper>
                </Dialog>
            </Main>
        </DialogContainer>
    )
);

PopUpDialog.propTypes = {
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default PopUpDialog;

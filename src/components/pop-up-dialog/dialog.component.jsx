import React from 'react';
import {
    DialogContainer,
    Main,
    Dialog,
    Overlay,
    ContentWrapper,
} from './dialog.styles';

import CloseButton from '../close-button/close-button.component';

const PopUpDialog = ({ title, children }) => (
    <DialogContainer>
        <Overlay />
        <Main>
            <Dialog>
                <CloseButton />
                <ContentWrapper>
                    <div className="header">{title}</div>
                    <div className="body">{children}</div>
                </ContentWrapper>
            </Dialog>
        </Main>
    </DialogContainer>
);

export default PopUpDialog;

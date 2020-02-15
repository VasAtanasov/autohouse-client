import React from 'react';
import { Navbar } from '../../components';
import { StyledHeader } from './Header.styles';

const HeaderComponent = () => {
    return (
        <StyledHeader>
            <Navbar />
        </StyledHeader>
    );
};

export default HeaderComponent;

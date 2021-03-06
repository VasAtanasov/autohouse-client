import React from 'react';
import { Wrapper, Overlay } from './hero.styles';

const HeroWrap = ({ backgroundImage, children }) => {
    return (
        <Wrapper url={backgroundImage}>
            <Overlay />
            {children}
        </Wrapper>
    );
};

export default HeroWrap;

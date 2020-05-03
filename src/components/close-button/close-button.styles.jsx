import styled from 'styled-components';

import closeIcon from './icon/close.svg';

export const CloseButton = styled.button`
    position: absolute;
    right: 12px;
    top: 15px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    background-color: white;
    background-image: url(${closeIcon});
    background-size: cover;
    z-index: 120;
    user-select: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 0px;

    &:hover {
        background-color: rgb(235, 235, 235);
        border-radius: 4px;
    }
`;

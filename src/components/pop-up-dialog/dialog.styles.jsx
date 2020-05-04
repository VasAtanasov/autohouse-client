import styled from 'styled-components';

export const Overlay = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
`;

export const Main = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
`;

export const Dialog = styled.div`
    user-select: none;
    background-color: white;
    position: relative;
    font-size: 18px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 64px 0px;
    border-radius: 0px;

    @media (min-width: ${({ theme }) => theme.screens.medium}) {
        width: 435px;
        height: auto;
        border-radius: 5px;
        overflow: hidden;
    }
`;

export const ContentWrapper = styled.div`
    & .header {
        height: 60px;
        font-weight: 600;
        color: rgb(51, 51, 51);
        background-color: white;
        text-align: center;
        text-transform: capitalize;
        padding: 17px 10px 10px 14px;
        border-bottom: 1px solid rgb(211, 211, 211);
        border-radius: 5px 5px 0px 0px;
    }

    @media (min-width: ${({ theme }) => theme.screens.medium}) {
        position: relative;
    }

    & .body {
        background-color: white;
    }
`;

export const DialogContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: white;
    overflow: hidden;

    @media (min-width: ${({ theme }) => theme.screens.medium}) {
        background-color: transparent;
    }
`;

import styled from 'styled-components';

export const Drawer = styled.div`
    height: 100vh;
    margin-right: -100%;
    background-color: white;
    overflow-y: scroll;
    position: fixed;
    right: 0;
    top: 0;
    transition: margin-right 0.2s ease-in, background-color 0s 0.21s;
    width: 300px;
    z-index: 1000;
    box-shadow: -20px 0 85px rgba(0, 0, 0, 0.5);
`;

export const Overlay = styled.div`
    opacity: 0.35;
    background-color: black;
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 800;
    display: none;
`;

export const NavBar = styled.nav`
    display: block;

    & .button {
        width: 48px;
        height: 48px;
        padding: 12px;
        display: inline-block;
        cursor: pointer;
        transition: all 0.2s ease-in;
        padding-top: 8px;
        line-height: 8px;
        text-align: left;
        margin: 0;
        position: relative;
        z-index: 9999;
    }

    & #ah-toggle-menu {
        display: none;
    }

    & .button span {
        height: 3px;
        width: 100%;
        background: #666;
        display: inline-block;
        transition: all 0.5s cubic-bezier(0.62, 0.43, 0.35, 1.47);
        z-index: 1201;
    }

    & #ah-toggle-menu:checked ~ .button span:nth-child(1) {
        transform: rotate(45deg) translateY(6px) translateX(6px);
    }
    & #ah-toggle-menu:checked ~ .button span:nth-child(2) {
        opacity: 0;
    }

    & #ah-toggle-menu:checked ~ .button span:nth-child(3) {
        transform: rotate(-45deg) translateY(-7px) translateX(7px);
    }

    & #ah-toggle-menu:checked ~ ${Drawer} {
        margin-right: 0;
    }

    & #ah-toggle-menu:checked ~ ${Overlay} {
        display: block;
    }
`;

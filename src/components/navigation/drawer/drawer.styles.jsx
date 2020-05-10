import styled from 'styled-components';

export const Drawer = styled.div`
  height: 100vh;
  margin-right: -100%;
  background-color: white;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 0;
  transition: width 0.2s, margin-right 0.2s ease-in, background-color 0s 0.21s;
  width: 0;
  z-index: 1000;
  box-shadow: -20px 0 85px rgba(0, 0, 0, 0.5);

  & .close-container {
    height: 40px;
    margin-right: 10px;
  }

  & .button.close span:nth-child(1) {
    transform: rotate(45deg) translateY(6px) translateX(2px);
  }

  & .button.close span:nth-child(2) {
    width: 0;
  }

  & .button.close span:nth-child(3) {
    transform: rotate(-45deg) translateY(-7px) translateX(3px);
  }
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

// Navbar container

export const DrawerContainer = styled.nav`
  display: block;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screens.large}) {
    display: none;
  }

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
  }

  & #ah-toggle-menu {
    display: none;
  }

  & .button span {
    height: 3px;
    width: 100%;
    background: #666;
    display: inline-block;
  }

  & #ah-toggle-menu:checked ~ ${Drawer} {
    margin-right: -17px;
    width: 275px;
  }

  & #ah-toggle-menu:checked ~ ${Overlay} {
    display: block;
  }
`;

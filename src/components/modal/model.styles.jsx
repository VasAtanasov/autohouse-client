import styled from 'styled-components';

const LightBoxContainer = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: $form-border-radius;
  background-color: $white;
  padding: 16px;
  z-index: 140;
  max-height: calc(100vh - 80px);

  @media (min-width: 768px) {
    padding: 40px !important;
  }

  @media (min-width: 582px) {
    width: 550px;
  }

  @media (max-width: 581px) {
    width: calc(100% - 32px);
    max-height: calc(100vh - 120px);
  }

  .container--visible {
    display: flex;
  }
`;

const Overlay = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 139; // less than modal window by one
  opacity: 0;
  transition: opacity 0.1s ease;

  &.overlay--visible {
    display: block;
  }

  &.lightbox--fadein {
    opacity: 1;
  }
`;

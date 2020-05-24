import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Section = styled.div`
  background-color: #fff;
  padding: 25px;
  margin-bottom: 6px;
  position: relative;
  color: #333;
`;

export const SectionFixedHeight = styled(Section)`
  min-height: 375px;
`;

export const NavLinkContainer = styled(Col)`
  .icon {
    width: 3rem;
    height: 3rem;
  }

  .icon.icon-color {
    display: none;
  }

  .link-tab-icon {
    display: flex;
    justify-content: center;
  }

  .link-info-text {
    display: none;
  }

  @media screen and (max-width: 991px) {
    .link-info-text {
      margin-top: 10px;
      font-size: 12px;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    .link-info-text {
      display: block;
    }
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 15px;

    .link-tab-icon {
      display: none;
    }

    .link-info-text {
      display: block;
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.defaultColor};
    font-weight: 700;
  }

  :hover .icon-default,
  .active .icon-default,
  :active .icon-default {
    display: none;
  }
  :hover .icon-color,
  .active .icon-color,
  :active .icon-color {
    display: block;
  }
`;

export const SettingsNavigation = styled(Row)`
  a {
    color: #555;
  }
`;

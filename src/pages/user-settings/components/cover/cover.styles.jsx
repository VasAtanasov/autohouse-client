import styled from 'styled-components';
import UserProfileImage from '../../assets/user-profile-bg.png';

export const CoverWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url(${UserProfileImage});
  background-size: cover;
  color: white;

  :before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.4;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .headline {
    z-index: 1;
  }
`;

export const Spacer140px = styled.div`
  display: block;
  height: 140px;
  width: 100%;
`;

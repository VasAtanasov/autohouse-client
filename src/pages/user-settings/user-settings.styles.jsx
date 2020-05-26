import styled from 'styled-components';
import { ShineAnimation } from '../../global/styles/shared-styles';

export const UserSettingsPageContainer = styled.div`
  position: relative;

  .small-gutters {
    padding-left: 5px;
    padding-right: 5px;
  }

  .cover.-underlap + * {
    margin-top: -15px;
  }
`;

export const AccountSettingsContainer = styled.div``;

export const AccountSettingsTitle = styled.div`
  padding-bottom: 12px;
  margin-bottom: 20px;
  font-weight: 600;
  border-bottom: 2px solid #153e4d;
`;

export const SettingsMain = styled.div`
  width: 100%;

  .form-label {
    color: #767676;
    font-size: 12px;
    padding-left: 12px;
  }

  .form-textarea {
    min-height: 100px;
  }
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 34px;
  ${({ isLoading }) => true && ShineAnimation}
`;

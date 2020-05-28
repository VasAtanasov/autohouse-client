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
  user-select: none;

  .password-icon {
    width: 25px;
    height: 25px;
    color: #999;
    cursor: pointer;
    margin-left: 7px;
  }
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

  .form-group .password-icon {
    width: 25px;
    height: 25px;
    top: 50%;
    right: 15px;
    position: absolute;
    color: #999;
    cursor: pointer;
  }
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 34px;
  ${({ isLoading }) => true && ShineAnimation}
`;

export const Required = styled.span`
  :before {
    content: '***';
    color: red;
  }
`;

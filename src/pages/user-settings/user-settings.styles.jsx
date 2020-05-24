import styled from 'styled-components';

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
  /* font-size: 20px; */
  /* letter-spacing: -0.9px; */
  /* border-bottom: 1px solid #153e4d; */
`;

export const SettingsMain = styled.div`
  width: 100%;
`;

import React from 'react';
import { UserSettingsPageContainer } from './user-settings.styles';
import Cover from './components/cover/cover.component';
import UserSettingsMain from './components/user-settings-main/user-settings-main.component';

const UserSettings = () => (
  <UserSettingsPageContainer>
    <Cover />
    <UserSettingsMain />
  </UserSettingsPageContainer>
);

export default UserSettings;

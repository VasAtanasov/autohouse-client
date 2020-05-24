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

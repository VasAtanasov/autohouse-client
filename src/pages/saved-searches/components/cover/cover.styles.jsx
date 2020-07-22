import styled from 'styled-components';
import { CoverWrapper } from '../../../user-settings/components/cover/cover.styles';
import CoverImage from '../../assets/user-saved-searches-bg.jpg';

export const CoverWrapperSavedSearches = styled(CoverWrapper)`
  background-image: url(${CoverImage});
`;

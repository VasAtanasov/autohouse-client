import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserOffersListContainer = styled.div`
  position: relative;
  min-height: 80vh;
  flex-basis: 100%;

  @media screen and (min-width: 992px) {
    flex-basis: 75%;
    max-width: 725px;
  }
`;

export const AddOfferButton = styled(Link)`
  user-select: none;
  text-align: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.defaultColor};
  color: white;
  font-weight: 1.5em;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  width: 182px;
  height: 38px;
  box-sizing: border-box;
  padding: 9px 18px 11px 18px;
  border-radius: 8px;

  :hover,
  :active,
  :focus {
    color: white;
    background-color: #cc0000;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

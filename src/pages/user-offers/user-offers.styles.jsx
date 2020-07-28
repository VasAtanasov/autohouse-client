import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const UserOffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  align-items: flex-start;
`;

export const InfoLine = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const FullWidthCol = styled.div`
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

export const UserOffersListContainer = styled(FullWidthCol)`
  position: relative;
  min-height: 80vh;
  padding-left: 5px;

  @media screen and (min-width: 992px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`;

export const UserOffersData = styled(FullWidthCol)`
  background-color: white;
  padding: 5px;
  margin-bottom: 20px;

  @media screen and (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

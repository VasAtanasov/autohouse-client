import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  background-color: white !important;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  z-index: 600;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 63px;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;

  & .left,
  & .right {
    flex: 1;
    align-self: center;
  }

  & .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Brand = styled.span`
  font-size: 1.7em;
  letter-spacing: 1.1px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;

  & span {
    color: ${(props) => props.theme.colors.defaultColor};
  }
`;

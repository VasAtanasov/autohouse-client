import styled from 'styled-components';

export const CreateUpdateOfferWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: flex-start;
  padding: 1rem;
  background-color: #fff;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const SubHeader = styled.div`
  margin-top: 30px;
  width: 100%;
  h6 {
    font-size: 12px;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
`;

export const Section = styled.section``;

export const SectionHeadline = styled.div`
  border-top: 2px solid #232628;
  padding-top: 15px;
  position: relative;
  padding-right: 30px;
  margin-bottom: 17px;

  .title {
    padding: 20px 0;
    line-height: 1.2;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const SectionOptions = styled.div`
  .form-control {
    border-radius: 0;
    font-size: 14px;
  }

  &.row {
    margin: 0;
  }

  &.maker-model-select {
    padding: 23px 30px 11px;
    background-color: #333;
    margin-bottom: 2rem;

    label {
      color: white;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
`;

export const Required = styled.span`
  :before {
    content: '***';
    color: red;
  }
`;

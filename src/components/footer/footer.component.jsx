import React from 'react';
import Container from 'react-bootstrap/Container';
import { FooterContainer } from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <Container>
      <div className="copyright">
        <p>© 2020 Autohouse, Inc., All Rights Reserved.</p>
      </div>
    </Container>
  </FooterContainer>
);

export default Footer;

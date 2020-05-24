import React from 'react';
import { CoverWrapper, Spacer140px } from './cover.styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Cover = () => (
  <CoverWrapper>
    <Container>
      <Row noGutters>
        <Spacer140px />
        <div className="headline">
          <h3>Account Settings</h3>
        </div>
      </Row>
    </Container>
  </CoverWrapper>
);

export default Cover;

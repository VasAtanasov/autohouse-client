import React from 'react';
import { CoverWrapper, Spacer140px } from './cover.styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Cover = () => (
  <CoverWrapper className="cover -underlap -gear-shift">
    <Container>
      <Row noGutters>
        <Spacer140px />
        <div className="headline">
          <h2>Account Settings</h2>
        </div>
      </Row>
    </Container>
  </CoverWrapper>
);

export default Cover;

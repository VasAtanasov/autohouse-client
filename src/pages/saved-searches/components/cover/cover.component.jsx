import React from 'react';
import { CoverWrapperSavedSearches } from './cover.styles';
import { Spacer140px } from '../../../user-settings/components/cover/cover.styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Cover = () => (
  <CoverWrapperSavedSearches className="cover -underlap -gear-shift">
    <Container>
      <Row noGutters>
        <Spacer140px />
        <div className="headline">
          <h2>Saved Searches</h2>
        </div>
      </Row>
    </Container>
  </CoverWrapperSavedSearches>
);

export default Cover;

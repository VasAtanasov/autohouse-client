import React from 'react';
import { NotFoundPageContainer } from './not-found.styles';

const NotFound = () => (
  <NotFoundPageContainer>
    <div className="error-bg-container">
      <div className="error_bg">
        <h1 className="text-center">404</h1>
      </div>
    </div>
    <div className="message-container text-center">
      <h2 className="text-message">Not found</h2>
    </div>
  </NotFoundPageContainer>
);

export default NotFound;

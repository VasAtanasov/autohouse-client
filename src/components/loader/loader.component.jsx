import React from 'react';
import { StyledDotsLoader, Dot } from './loader.styles';

const Loader = (props) => {
  return (
    <StyledDotsLoader {...props}>
      <Dot {...props} style={{}} />
      <Dot {...props} style={{}} />
      <Dot {...props} style={{}} />
    </StyledDotsLoader>
  );
};

export default Loader;

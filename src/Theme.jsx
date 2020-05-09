import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    defaultColor: '#db5c4c',
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
    white: '#F5F6FD',
    blue: '#214BEE',
    darkNavy: '#04264C',
    lightPurpleOne: '#A9A7EB',
    lightPurpleTwo: '#7D74AF',
    gray: '#54575E',
    grey: '#9E9E9E',
    cloudGray: '#8D99AE',
    turqouise: '#2D728F',
    pastelBlue: '#006494',
    red: '#F44336',
    green: '#4CAF50',
  },
  heroSize: '350px',
  screens: {
    small: '576px',
    medium: '768px',
    midLarge: '800px',
    large: '992px',
    webSize: '980px',
    extraLarge: '1200px',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

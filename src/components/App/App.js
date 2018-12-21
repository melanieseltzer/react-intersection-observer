import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HighlightedNav from '../HighlightedNav';

export default () => (
  <>
    <GlobalStyle />
    <HighlightedNav />
  </>
);

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
  }
`;

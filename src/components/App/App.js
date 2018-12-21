import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HighlightNav from '../HighlightNav';

export default () => (
  <>
    <GlobalStyle />
    <HighlightNav />
  </>
);

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
  }
`;

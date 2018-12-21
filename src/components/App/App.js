import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavWrapper from '../NavWrapper';

export default () => (
  <>
    <GlobalStyle />
    <NavWrapper />
  </>
);

const GlobalStyle = createGlobalStyle`
  body {
    background: #F0F3F7;
  }
`;

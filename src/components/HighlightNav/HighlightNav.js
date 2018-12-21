import React from 'react';
import styled from 'styled-components';

import NavItems from '../NavItems';
import PageContent from '../PageContent';

export default () => (
  <Main>
    <NavItems />
    <PageContent />
  </Main>
);

const Main = styled.div`
  display: grid;
  grid-template-rows: auto;
  height: 550px;
  margin: 0 auto;
  max-width: 960px;
  overflow: auto;
  @media (min-width: 768px) {
    grid-template-columns: 180px 1fr;
    margin: 40px auto;
  }
`;

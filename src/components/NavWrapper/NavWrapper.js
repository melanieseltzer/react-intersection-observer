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

const Main = styled.main`
  display: grid;
  grid-template-columns: 180px 1fr;
  height: 450px;
  margin: 100px auto;
  max-width: 960px;
  overflow: scroll;
`;

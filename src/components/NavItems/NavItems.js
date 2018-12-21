import React from 'react';
import styled from 'styled-components';

import { pageSections } from '../../helpers';

export default () => (
  <Nav>
    <List>
      {pageSections.map(item => (
        <ListItem key={item.id}>
          <Link href={`#${item.id}`}>{item.title}</Link>
        </ListItem>
      ))}
    </List>
  </Nav>
);

const Nav = styled.nav`
  background: #fff;
  @media (max-width: 767px) {
    position: sticky;
    top: 0;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
  }
`;

const List = styled.ul`
  margin: 0;
  @media (min-width: 768px) {
    position: sticky;
    top: 0;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: tomato;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid tomato;
  }
`;

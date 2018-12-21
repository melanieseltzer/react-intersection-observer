import React from 'react';
import styled from 'styled-components';

import { navItems } from '../../helpers';

export default () => (
  <aside>
    <Nav>
      <ul>
        {navItems.map(item => (
          <ListItem key={item.id}>
            <Link href={`#${item.id}`}>{item.title}</Link>
          </ListItem>
        ))}
      </ul>
    </Nav>
  </aside>
);

const Nav = styled.nav`
  position: sticky;
  top: 20px;
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

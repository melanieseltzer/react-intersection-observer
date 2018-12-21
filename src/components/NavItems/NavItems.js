import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pageSections } from '../../helpers';

const NavItems = props => {
  const { active } = props;
  return (
    <Nav>
      <List>
        {pageSections.map(item => (
          <ListItem key={item.id}>
            {/* Pass props `active` and `itemId` so styled component has access */}
            <Link active={active} itemId={item.id} href={`#${item.id}`}>
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

NavItems.defaultProps = {
  active: ''
};

NavItems.propTypes = {
  active: PropTypes.string
};

export default NavItems;

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
  /* Check if the active page section is the same as the current link, 
  if so then underline it as active */
  border-bottom: ${props =>
    props.active === props.itemId ? '2px solid tomato' : ''};
`;

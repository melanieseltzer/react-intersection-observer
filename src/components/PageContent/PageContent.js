import React, { Component } from 'react';
import styled from 'styled-components';

import intersect from '../Intersect';
import { navItems, lorem } from '../../helpers';

function createMarkup() {
  return { __html: lorem };
}

export default class PageContent extends Component {
  componentDidMount() {
    navItems.forEach(item => {
      intersect(item);
    });
  }

  render() {
    return (
      <section>
        {navItems.map(item => (
          <Observe className={item.id} key={item.id}>
            <h2>{item.title}</h2>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Observe>
        ))}
      </section>
    );
  }
}

const Observe = styled.div`
  border: 2px dashed #000;
  margin-bottom: 20px;
  padding: 20px;
`;

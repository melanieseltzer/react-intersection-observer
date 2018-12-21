import React, { Component } from 'react';
import styled from 'styled-components';

import { navItems, lorem } from '../../helpers';

function createMarkup() {
  return { __html: lorem };
}

export default class PageContent extends Component {
  componentDidMount() {
    navItems.forEach(item => {
      const elem = document.querySelector(`.${item.id}`);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            console.log(`section ${item.id} is in the view`);
          } else {
            console.log(`section ${item.id} is out of view`);
          }
        });
      });

      observer.observe(elem);
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

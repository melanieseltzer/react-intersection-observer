import React, { Component } from 'react';
import styled from 'styled-components';

import intersect from '../Intersect';
import { pageSections, lorem } from '../../helpers';

function createMarkup() {
  return { __html: lorem };
}

export default class PageContent extends Component {
  componentDidMount() {
    // Set observer on each page section
    pageSections.forEach(item => {
      intersect(item);
    });
  }

  render() {
    return (
      <main>
        {pageSections.map(item => (
          <Section className={item.id} key={item.id} id={item.id}>
            <h2>{item.title}</h2>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Section>
        ))}
      </main>
    );
  }
}

const Section = styled.section`
  border: 2px dashed #000;
  margin-bottom: 20px;
  padding: 20px;
`;

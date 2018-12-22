import React, { Component } from 'react';
import styled from 'styled-components';

import NavItems from '../NavItems';
import PageContent from '../PageContent';
import { pageSections } from '../../helpers';

class HighlightedNav extends Component {
  state = {
    active: ''
  };

  componentDidMount() {
    const options = {
      // Fired only when 70% of the element is visible so you don't switch
      // active element too early
      threshold: [0.7]
    };

    // Set an observer on each page section
    pageSections.forEach(item => {
      const elem = document.querySelector(`.${item.id}`);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.7) {
            // If the item comes into view at 70%, set it as active in state
            this.setState({ active: entry.target.id });
          }
        });
      }, options);

      observer.observe(elem);
    });
  }

  render() {
    const { active } = this.state;
    return (
      <Main>
        <NavItems active={active} />
        <PageContent active={active} />
      </Main>
    );
  }
}

export default HighlightedNav;

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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pageSections, lorem } from '../../helpers';

const createMarkup = () => ({ __html: lorem });

const PageContent = props => {
  const { active } = props;
  return (
    <main>
      {pageSections.map(item => (
        <Section
          active={active}
          itemId={item.id}
          className={item.id}
          key={item.id}
          id={item.id}
        >
          <h2>{item.title}</h2>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </Section>
      ))}
    </main>
  );
};

PageContent.defaultProps = {
  active: ''
};

PageContent.propTypes = {
  active: PropTypes.string
};

export default PageContent;

const Section = styled.section`
  /* Check if the active page section is the same as the current link,
  if so then underline it as active */
  background: ${props => (props.active === props.itemId ? '#eee' : '')};
  border: 2px dashed #000;
  margin-bottom: 20px;
  padding: 20px;
`;

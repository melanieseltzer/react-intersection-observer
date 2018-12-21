import React from 'react';

import { navItems } from '../../helpers';

const lorem = `
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus
      nulla, iaculis ac lorem ac, fringilla interdum leo. Aenean consectetur
      felis a risus faucibus interdum. Cras euismod hendrerit velit, eu
      fringilla lectus pharetra a. Praesent imperdiet tellus in imperdiet
      malesuada. Pellentesque et neque non mauris cursus commodo. Nam facilisis
      sapien eu tortor pharetra, sit amet suscipit sapien pharetra. Curabitur mi
      neque, viverra volutpat pellentesque eget, facilisis vitae sapien. Nunc
      consectetur est sit amet libero convallis bibendum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus
      nulla, iaculis ac lorem ac, fringilla interdum leo. Aenean consectetur
      felis a risus faucibus interdum. Cras euismod hendrerit velit, eu
      fringilla lectus pharetra a. Praesent imperdiet tellus in imperdiet
      malesuada. Pellentesque et neque non mauris cursus commodo. Nam facilisis
      sapien eu tortor pharetra, sit amet suscipit sapien pharetra. Curabitur mi
      neque, viverra volutpat pellentesque eget, facilisis vitae sapien. Nunc
      consectetur est sit amet libero convallis bibendum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus
      nulla, iaculis ac lorem ac, fringilla interdum leo. Aenean consectetur
      felis a risus faucibus interdum. Cras euismod hendrerit velit, eu
      fringilla lectus pharetra a. Praesent imperdiet tellus in imperdiet
      malesuada. Pellentesque et neque non mauris cursus commodo. Nam facilisis
      sapien eu tortor pharetra, sit amet suscipit sapien pharetra. Curabitur mi
      neque, viverra volutpat pellentesque eget, facilisis vitae sapien. Nunc
      consectetur est sit amet libero convallis bibendum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus
      nulla, iaculis ac lorem ac, fringilla interdum leo. Aenean consectetur
      felis a risus faucibus interdum. Cras euismod hendrerit velit, eu
      fringilla lectus pharetra a. Praesent imperdiet tellus in imperdiet
      malesuada. Pellentesque et neque non mauris cursus commodo. Nam facilisis
      sapien eu tortor pharetra, sit amet suscipit sapien pharetra. Curabitur mi
      neque, viverra volutpat pellentesque eget, facilisis vitae sapien. Nunc
      consectetur est sit amet libero convallis bibendum.
    </p>
`;

function createMarkup() {
  return { __html: lorem };
}

export default () => (
  <section>
    {navItems.map(item => (
      <div className={item.id} key={item.id}>
        <h2>{item.title}</h2>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    ))}
  </section>
);

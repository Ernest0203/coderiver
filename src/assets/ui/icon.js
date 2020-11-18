import React from 'react';

import pen from '../images/pen.svg';
import grid from '../images/grid.svg';
import search from '../images/search.svg';
import settings from '../images/settings.svg';
import arrow from '../images/arrow.svg';
import up from '../images/up.svg';
import down from '../images/down.svg';
import sort from '../images/sort.svg';

const icons = {
  pen, grid, search, settings, arrow, up, down, sort
};

export default function Icon({ icon }) {
  const styles = {
    cursor: 'pointer'
  };

  return (
    <div className="icon" style={styles}>
      <img src={icons[icon]}></img>
    </div>
  );
}

import React from 'react';

// eslint-disable-next-line
export default ({name, year, children}) => (
  <div>
    <h3>Car name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    { children }
  </div>
)

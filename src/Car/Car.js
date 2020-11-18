import React from 'react';

// eslint-disable-next-line
export default ({name, year, onChangeTitle}) => (
  <div>
    <h3>Car name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    <button onClick={onChangeTitle.bind(this, name)}>Click</button>
  </div>
)

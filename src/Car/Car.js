import React from 'react';

// eslint-disable-next-line
export default ({name, year, onChangeName, onDelete}) => (
  <div style={{
    border: '1px solid #ccc',
    margin: '0.8rem auto',
    maxWidth: '19rem',
    padding: '0.8rem'
  }}>
    <h3>Car name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    <input type="text" onChange={onChangeName} value={name} />
    <button onClick={onDelete}>Delete</button>
  </div>
)

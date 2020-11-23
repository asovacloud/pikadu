import React from 'react';

import './Car.css';
// eslint-disable-next-line
export default ({name, year, onChangeName, onDelete}) => (
    <div className="Car">
        <h3>Car name: {name}</h3>
        <p>Year: <strong>{year}</strong></p>
        <input type="text" onChange={onChangeName} value={name} />
        <button onClick={onDelete}>Delete</button>
    </div>
)

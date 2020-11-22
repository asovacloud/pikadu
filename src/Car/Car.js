import React from 'react';

// eslint-disable-next-line
export default ({name, year, onChangeName, onDelete}) => (
    <div style={{
        border: '1px solid #ccc',
        margin: '0.8rem 0',
        padding: '0.8rem',
        boxShadow: '0 4px 5px rgba(0,0,0,0.14)',
        borderRadius: '5px'
    }}>
        <h3>Car name: {name}</h3>
        <p>Year: <strong>{year}</strong></p>
        <input type="text" onChange={onChangeName} value={name} />
        <button onClick={onDelete}>Delete</button>
    </div>
)

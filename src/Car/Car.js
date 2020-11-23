import React from 'react';

import './Car.css';
// eslint-disable-next-line
export default ({name, year, onChangeName, onDelete}) => {
    const inputClasses = ['input'];

    if (name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (name.length > 4) {
        inputClasses.push('bold');
    }

    return (
        <div className="Car">
            <h3>Car name: {name}</h3>
            <p>Year: <strong>{year}</strong></p>
            <input
                className={inputClasses.join(' ')}
                type="text"
                onChange={onChangeName}
                value={name} />
            <button onClick={onDelete}>Delete</button>
        </div>
    )
};
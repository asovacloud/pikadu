import React from 'react';
import Rarium from 'radium';
import './Car.css';

const Car = ({name, year, onChangeName, onDelete}) => {
    const inputClasses = ['input'];

    if (name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (name.length > 4) {
        inputClasses.push('bold');
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #000',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .34)',
            cursor: 'pointer'
        }
    };

    return (
        <div
            className="Car"
            style={ style }
        >
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

export default Rarium(Car);
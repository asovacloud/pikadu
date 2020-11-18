import React from 'react';
import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = {
    textAlign: 'center'
  }

  return (
    <div style={divStyle}>
      <h1>Yo, buddy...</h1>

      <Car name={'BMW'} year={2021}>
        <p style={{color: 'blue'}}>COLOR</p>
      </Car>
      <Car name={'Audi'} year={2019}>
        <p style={{color: 'tomato'}}>COLOR</p>
      </Car>
      <Car name={'Mazda'} year={2010} />
    </div>
  );

}

export default App;

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

      <Car />
      <Car />
    </div>
  );

}

export default App;

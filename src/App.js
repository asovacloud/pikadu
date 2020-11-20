import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {
        name: 'BMW',
        year: 2021
      },
      {
        name: 'Audi A8',
        year: '2019'
      },
      {
        name: 'Mazda',
        year: 2010
      }
    ],
    pageTitle: 'Yo, buddy.',
    showCars: false
  }

  changeTitleHandler = (newTitle) => this.setState({pageTitle: newTitle});

  toggleCarsHandler = () => this.setState(state => {
    return {
      showCars: !state.showCars
    }
  })

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars.map(car => {
      return (
        <Car
          key={car.name}
          name={car.name}
          year={car.year}
          onChangeTitle={this.changeTitleHandler} />
      );
    });
  
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
  
        { this.state.showCars && cars }
      </div>
    );
  }
}

export default App;

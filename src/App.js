import React, { Component } from 'react';
import Car from './Car/Car';

import './App.scss';

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

  changeNameHandler = (name, idx) => {
    this.setState(state => {
      const cars = state.cars.concat();
      cars[idx].name = name;
      return {
        cars
      }
    });
  };

  toggleCarsHandler = () => this.setState(state => {
    return {
      showCars: !state.showCars
    }
  });

  deleteHandler = (index) => {
    console.log(index);
    this.setState(state => {
      const cars = state.cars.concat();
      cars.splice(index, 1);

      return { cars }
    })
  };

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars.map((car, idx) => {
      return (
        <Car
          key={idx}
          name={car.name}
          year={car.year}
          onDelete={this.deleteHandler.bind(null, idx)}
          onChangeName={event => {
            return this.changeNameHandler(event.target.value, idx)
          }} />
      );
    });
  
    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{ this.props.title }</h1>

        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
  
        { this.state.showCars && (
            <div style={{
              maxWidth: '19rem',
              margin: '0 auto'
            }}>
              {cars}
            </div>
        ) }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

class App extends Component {

  render() {
    const {
      counter,
      onDecrement,
      onIncrement
    } = this.props;
    return (
      <div className={'App'}>
        <h1>Counter <strong>{counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={onDecrement}>-1</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={onIncrement}>1</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

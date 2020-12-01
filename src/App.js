import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import './App.scss';

class App extends Component {

  render() {
    const {
      counter,
      onDecrement,
      onIncrement,
      onIncrementNumber,
      onDecrementNumber
    } = this.props;
    return (
      <div className={'App'}>
        <h1>Counter <strong>{counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={onDecrement}>-1</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={onIncrement}>1</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={onDecrementNumber.bind(null, -42)}>-42</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={onIncrementNumber.bind(null, 42)}>42</button>
        </div>

        <Counter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter1.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onIncrementNumber: (number) => dispatch({ type: 'INCREMENT_NUMBER', payload: number }),
    onDecrementNumber: (number) => dispatch({ type: 'DECREMENT_NUMBER', payload: number })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

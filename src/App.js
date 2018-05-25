import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counterIncrement,counterDecrement } from './redux/actions/simpleaction'

import './App.css';
class App extends Component {
  increment = (event) => {
    console.log("In simple action");
    this.props.counterIncrement();
  }
  decrement = (event) => {
    console.log("In counter decrement");
    this.props.counterDecrement();
  }
  render() {
    
    return (
      <div className="App">
       <h1>{this.props.simpleReducer}</h1>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  counterIncrement: () => dispatch(counterIncrement()),
  counterDecrement: () => dispatch(counterDecrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    counter: 0
  }

  render() {
    return (
      <div className="App">
        <h1>React-Counter</h1>
        
        <button onClick={()=>{this.setState({counter: this.state.counter + 1})}}>Incrementa</button>
        <button onClick={()=>{this.setState({counter: this.state.counter - 1})}}>Decrementa</button>

        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default App;

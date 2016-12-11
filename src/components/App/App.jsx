import React, { Component } from 'react';
import $ from "jquery";
import logo from './logo.svg';
import './App.css';

import LoginControl from '../LoginControl/LoginControl'
import Clock from '../Clock/Clock'
import Table from '../Table/Table'



class App extends Component {
  render() {
    return (

      <div className="App">
          <Table promise={$.getJSON('https://api.myjson.com/bins/x10s9')}/>
      </div>
   
    );
  }
}

export default App;

// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome to React</h2>
// </div>


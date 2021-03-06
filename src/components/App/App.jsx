import React, { Component } from 'react';
import $ from "jquery";
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

import LoginControl from '../LoginControl'
import Clock from '../Clock'
import Table from '../Table'
import EditableLabel from '../EditableLabel'
import NavBar from '../NavBar'



class App extends Component {
  render() {
    return (
    <div className="container-fluid">
		<div className="row">
		 	<NavBar />
			<div className="col-sm-9 col-lg-10">
		      <div className="App">
		      		{this.props.children}
		      </div>
      		</div>
		</div>
	</div>
    );
  }
}

export default App;

// https://jsonblob.com/7c6117f1-c1e8-11e6-871b-6dc71c24a5fa

// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome to React</h2>
// </div>
 // <Table promise={$.getJSON('https://api.myjson.com/bins/x10s9')}/>

// https://jsonblob.com/api/7c6117f1-c1e8-11e6-871b-6dc71c24a5fa
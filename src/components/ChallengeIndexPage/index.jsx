import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import $ from "jquery";
import { Link } from 'react-router';



class ChallengeIndexPage extends Component {

	constructor(props)
	{
		super(props);
		this.state = {data: null, error: null, loading: true}
	}

	componentDidMount()
	{
		
		$.getJSON('https://api.myjson.com/bins/16y7w1').then(
      		value => this.setState({loading: false, data: value}),
      		error => this.setState({loading: false, error: error})
      	);
	}

	render ()
	{
		if (this.state.loading) {
	      return <span>Загрузка...</span>;
	    }
	    else if (this.state.error !== null) {
	      return <span>Error: {this.state.error.message}</span>;
	    }
	    else {
		var challengeList = this.state.data.challengeList;
		var rowList = challengeList.map(function (row, index) {
	        return (
	          <tr key={index} >
	          	<td><Link to={"/challenges/"+row.id}>{row.name}</Link></td>
	          	<td>{row.users_count}</td>
	          	<td>{row.start_date}</td>
	          </tr>
	        );
	   	 });
		return (
			  <Table striped bordered condensed hover>
			  	<thead>
			  		<tr>
			  			<th>Название</th>
			  			<th className='col-xs-1'>Колво участников</th>
			  			<th className='col-xs-1'>Дата начала</th>
			  		</tr>
			  	</thead>
			  	<tbody>
			  		{rowList}
			  	</tbody>
			  </Table>
			);
		}
	}
}


export default ChallengeIndexPage;
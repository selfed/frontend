import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import moment from 'moment';


class Table extends Component {
	constructor(props)
	{
		super(props);
		this.state = {data: null, error: null, loading: true}
	}

	componentDidMount()
	{
	this.props.promise.then(
      	value => this.setState({loading: false, data: value}),
      	error => this.setState({loading: false, error: error}));

	}
	componentWillUnmount()
	{

	}
	render()
	{
	    if (this.state.loading) {
	      return <span>Загрузка...</span>;
	    }
	    else if (this.state.error !== null) {
	      return <span>Error: {this.state.error.message}</span>;
	    }
	    else {
	      var rows = this.state.data.list;
	      var rowList = rows.map(function (row, index) {
	        return (
	          <TableRow key={index} name={row.name} checklist={row.checklist} />
	        );
	   	  });
	   	  var headList=[];
	   	  var currentDate = Date.parse(this.state.data.start_date);
	   	  for (var i = 0; i < this.state.data.duration; i++)
	   	  {
	   	  	headList.push(<th key={i}>{moment(currentDate).format('DD MMMM YYYY')}</th>)
	   		currentDate = moment(currentDate).add(1, 'day');
	   	  }

		   return(
					<div className="challenge-table">
						<h1>{this.state.data.challenge_name}</h1>
						<table className='table table-bordered table-striped challenge-table'>
							<thead>
								<tr>
									<th>User Name</th>
									{headList}
								</tr>
							</thead>
							<tbody>
								{rowList}
							</tbody>
						</table>
					</div>
		    );
	  }
	}
}

export default Table;
import React, { Component } from 'react';
import Table from '../Table';
import $ from "jquery";
import { Link } from 'react-router';



class ChallengeShowPage extends Component 
{
	render ()
	{
		return (
			<div>
 				<Table challenge_id={this.props.params.challengeId} promise={$.getJSON('https://jsonblob.com/api/7c6117f1-c1e8-11e6-871b-6dc71c24a5fa')}/>
			 	<a href="https://jsonblob.com/7c6117f1-c1e8-11e6-871b-6dc71c24a5fa">JSON</a>x
			 </div>
			);
	}
}


export default ChallengeShowPage;
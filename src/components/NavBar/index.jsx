import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavBar.css'


class NavBar extends Component
{
	render()
	{
		return (

			<div id="NavBar" className="col-sm-1 col-lg-1">
				<nav className="navbar navbar-default navbar-fixed-side">
					<ul className="nav">
						<li>
						    <Link to='/'>
						        <p>Главная</p>
						    </Link>
						</li>
						<li>
						    <Link to="/challenges">
						        <p>Челенджи</p>
						    </Link>
						</li>
					</ul>
				</nav>
			</div>

			);
	}
} 

export default NavBar;

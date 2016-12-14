import React, { Component } from 'react';


class Cell extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {isToggleOn: props.checked};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick()
	{
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render ()
	{
		return (
				<td className='col-xs-1' onClick={this.handleClick}>
					{this.state.isToggleOn ? 'Check' : ''}
				</td>
			);
	}
}


export default Cell;
import React, { Component } from 'react';
import Cell from '../Cell';
import EditableLabel from '../EditableLabel'

class TableRow extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = {name: props.name, key: props.key, checklist: props.checklist};
	}
	render ()
	{
		var cells = this.state.checklist.map(function (check, index)
		{
			return (
					<Cell key={index} checked={check} />
				);
		}
		);
		return (
				<tr>
					<td className='col-xs-3'>
						<EditableLabel value={this.state.name} />
					</td>
					{cells}
				</tr>
			);
	}
}


export default TableRow;
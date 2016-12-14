import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class EditableLabel extends Component {
	constructor(props)
	{
		super(props);
		this.handleLabelClick = this.handleLabelClick.bind(this);
	    this.handleEditBlur = this.handleEditBlur.bind(this);
	    this.handleEditSubmit = this.handleEditSubmit.bind(this);
	    this.handleEditChange = this.handleEditChange.bind(this);
		this.state = {editable: false, value: this.props.value, old_value: null};
	}

	handleEditChange(event)	{
		this.setState({value: event.target.value})
	}
	handleLabelClick() {
		this.setState({editable: true, old_value: this.state.value});
	}

	handleEditBlur(event) {
		if (this.updateRequest()) {
			this.setState({editable: false});
		}else
		{
			this.setState({editable: false, value: this.state.old_value});
		}
	}

	handleEditSubmit(event)
	{
		if (this.updateRequest()) {
			this.setState({editable: false});
		}else
		{
			this.setState({editable: false, value: this.state.old_value});
		}
		event.preventDefault();
	}

	componentDidMount()	{
	}

	componentDidUpdate(){
		this.focusEditField();
	}

	focusEditField() {
		setTimeout(function() {
		    var edit = ReactDOM.findDOMNode(this.refs["editField"]);
		    if (edit != null)
		    	edit.focus();
		 }.bind(this), 0);
	}

	//return true || false
	updateRequest(){
		return true;
	}

	render()
	{
		const editable = this.state.editable;
		let label = null;
		if (editable===false)
		{
			label = <span onClick={this.handleLabelClick}>{this.state.value}</span>;
		}
		else if (editable===true)
		{
			label = 
			<form onSubmit={this.handleEditSubmit}>
				<input type="text" ref="editField" value={this.state.value} onChange={this.handleEditChange} onBlur={this.handleEditBlur} />
			</form>;
		}

		return (
			<div>
				{label}
			</div>
		);
	}
}


export default EditableLabel;
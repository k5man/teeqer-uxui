import BaseInput from './baseInput';

export default class SelectField extends BaseInput {
	constructor(props) {
		super(props);
		this.state = { value: 'conut' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		this.props.type = this.props.type ? this.props.type : 'text';
		return (
			<div className="input-field">
				<div className="select-wrapper ">
					<ul>
						<li className="select-lined " onChange={this.handleChange}>1</li>
						<li className="select-dropdown ">2</li>
						<li className="select-dropdown ">3</li>
						<li className="select-dropdown ">4</li>
						<li className="select-dropdown ">5</li>
					</ul>

					<option value="" disabled selected>Choose your option</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</div>
				<label htmlFor="first_name" className="active">First Name</label>
			</div>
		);
	}

}

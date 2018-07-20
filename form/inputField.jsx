import BaseInput from './baseInput';

export default class InputField extends BaseInput {

	constructor(props) {
		super(props);
		let initState = false;
		if (this.props.value) {
			initState = true;
		}
		this.state = {
			isActive: initState,
		};
	}

	onFocus() {
		this.setState({
			isActive: true,
		});
	}

	onBlur() {
		this.setState({
			isActive: false,
		});
	}

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		this.props.type = this.props.type ? this.props.type : 'text';
		const isActive = this.state.isActive || (this.textInput && !!this.textInput.value);
		return (
			<div className={`input-field ${this.props.className}`} >
				<input
					onFocus={() => this.onFocus()}
					onBlur={() => this.onBlur()}
					ref={(input) => { this.textInput = input; }}
					{...this.getCustomProps()}
				/>
				{this.props.label ? <label htmlFor={this.props.id} className={isActive ? 'active' : ''} >{this.props.label}</label> : null}
			</div>
		);
	}

}
